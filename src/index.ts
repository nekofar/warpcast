import canonicalize from 'canonicalize'
import { JsonArray, JsonObject } from 'type-fest'
import { Hex, isHex, toBytes } from 'viem'
import { mnemonicToAccount, privateKeyToAccount } from 'viem/accounts'
import {
  Account,
  ClientConfig,
  RequestOptions,
  RequestParams,
  User,
  WarpcastResponse,
} from './types'
import { ApiError } from './utils/error-handling'

export class WarpcastClient {
  private static readonly DEFAULT_BASE_URL = 'https://api.warpcast.com'
  private static readonly ONE_HOUR_IN_MS = 3600 * 1000

  private readonly baseURL: string
  private readonly apiKey?: string
  private authToken?: string

  constructor(config: ClientConfig) {
    this.baseURL = config.baseURL ?? WarpcastClient.DEFAULT_BASE_URL
    this.apiKey = config.apiKey
    void this.initializeAuth(config)
  }

  private async initializeAuth(config: ClientConfig): Promise<void> {
    const expiresAt =
      config.expiresAt ?? Date.now() + WarpcastClient.ONE_HOUR_IN_MS
    this.authToken = await this.resolveAuthToken(config, expiresAt)
  }

  private async resolveAuthToken(
    config: ClientConfig,
    expiresAt: number,
  ): Promise<string | undefined> {
    const { mnemonic, privateKey, token } = config
    if (mnemonic) {
      return this.generateAuthTokenFromMnemonic(mnemonic, expiresAt)
    } else if (isHex(privateKey)) {
      return this.generateAuthTokenFromPrivateKey(privateKey, expiresAt)
    }
    return token
  }

  public async request<T>(
    endpoint: string,
    params: RequestParams = {},
    options: RequestOptions = {},
  ): Promise<WarpcastResponse<T>> {
    const url = this.constructUrl(endpoint, params)
    const headers = this.buildHeaders(options)

    const response = await fetch(url.toString(), {
      headers,
      method: options.method ?? 'GET',
      body: options.body ? JSON.stringify(options.body) : undefined,
    })

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText)
    }
    return (await response.json()) as WarpcastResponse<T>
  }

  private constructUrl(endpoint: string, params: RequestParams): URL {
    const url = new URL(`${this.baseURL}${endpoint}`)
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value))
    })
    return url
  }

  private buildHeaders(options: RequestOptions): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    }

    if (options.authTokenRequired || options.apiKeyRequired) {
      this.validateAuthentication(options.authTokenRequired)
    }

    if (options.authTokenRequired) {
      headers.Authorization = `Bearer ${this.authToken ?? ''}`
    }

    if (options.apiKeyRequired) {
      headers.Authorization = `Bearer ${this.apiKey ?? ''}`
    }

    return headers
  }

  private validateAuthentication(authTokenRequired = false): void {
    if (authTokenRequired && !this.authToken) {
      throw new ApiError(401, 'Authentication authToken not initialized.')
    }
    if (!authTokenRequired && !this.apiKey) {
      throw new ApiError(401, 'API key not provided.')
    }
  }

  private async generateAuthTokenFromMnemonic(
    mnemonic: string,
    expiresAt: number,
  ): Promise<string> {
    const account = mnemonicToAccount(mnemonic)
    return this.generateAuthToken(account, expiresAt)
  }

  private async generateAuthTokenFromPrivateKey(
    privateKey: Hex,
    expiresAt: number,
  ): Promise<string> {
    const account = privateKeyToAccount(privateKey)
    return this.generateAuthToken(account, expiresAt)
  }

  private createAuthPayload(expiresAt: number): JsonObject {
    return {
      method: 'generateToken',
      params: {
        timestamp: Date.now(),
        expiresAt,
      },
    }
  }

  private async generateAuthToken(
    account: Account,
    expiresAt: number,
  ): Promise<string> {
    const payload = this.createAuthPayload(expiresAt)
    const payloadString = canonicalize(payload) ?? ''
    const signature = await account.signMessage({ message: payloadString })

    const encodedSignature = Buffer.from(toBytes(signature)).toString('base64')
    const bearerToken = `eip191:${encodedSignature}`

    const data = await this.request<{ secret: string }>(
      '/v2/auth',
      {},
      {
        method: 'PUT',
        headers: { Authorization: bearerToken },
        body: payload,
      },
    )

    return data.result.secret
  }

  public async getUserByFid(fid: number): Promise<User> {
    if (!fid) throw new ApiError(400, 'FID must be provided.')
    const {
      result: { user },
    } = await this.request<{ user: User }>(
      `/v2/user-by-fid`,
      { fid },
      { method: 'GET' },
    )
    return user
  }

  public async getUserByUsername(username: string): Promise<User> {
    if (!username) throw new ApiError(400, 'Username must be provided.')
    const {
      result: { user },
    } = await this.request<{ user: User }>(
      `/v2/user-by-username`,
      { username },
      { method: 'GET', authTokenRequired: true },
    )

    return user
  }

  public async getFollowers(fid: number, limit = 15): Promise<JsonArray> {
    if (!fid) throw new ApiError(400, 'FID must be provided.')
    const {
      result: { users },
    } = await this.request<{ users: JsonArray }>(
      `/v2/followers`,
      { fid, limit },
      { method: 'GET', authTokenRequired: true },
    )

    return users
  }

  public async getFollowing(fid: number, limit = 15): Promise<JsonArray> {
    if (!fid) throw new ApiError(400, 'FID must be provided.')
    const {
      result: { users },
    } = await this.request<{ users: JsonArray }>(
      `/v2/following`,
      { fid, limit },
      { method: 'GET', authTokenRequired: true },
    )

    return users
  }

  public async getProfileCasts(fid: number, limit = 15): Promise<JsonArray> {
    if (!fid) throw new ApiError(400, 'FID must be provided.')
    const {
      result: { casts },
    } = await this.request<{ casts: JsonArray }>(
      `/v2/profile-casts`,
      { fid, limit },
      { method: 'GET', authTokenRequired: true },
    )

    return casts
  }

  public async getChannel(key: string): Promise<JsonObject> {
    if (!key) throw new ApiError(400, 'Channel key must be provided.')
    const {
      result: { channel },
    } = await this.request<{ channel: JsonObject }>(
      `/v2/channel`,
      { key: key },
      { method: 'GET', authTokenRequired: true },
    )

    return channel
  }
}
