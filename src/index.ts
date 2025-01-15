import canonicalize from 'canonicalize'
import { JsonObject } from 'type-fest'
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
  private readonly baseURL: string
  private authToken?: string
  private readonly apiKey?: string

  constructor(parameters: ClientConfig) {
    const { baseURL, apiKey } = parameters

    this.baseURL = baseURL ?? 'https://api.warpcast.com'
    this.apiKey = apiKey
    this.authToken = undefined

    void this.initializeAuth(parameters)
  }

  public async request<T>(
    endpoint: string,
    params: RequestParams = {},
    options: RequestOptions = {},
  ): Promise<WarpcastResponse<T>> {
    const url = new URL(`${this.baseURL}${endpoint}`)
    if (options.method !== 'POST') {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value))
      })
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    }

    if (options.requiresAuthToken) {
      if (!this.authToken)
        throw new ApiError(401, 'Authentication authToken not initialized.')
      headers.Authorization = `Bearer ${this.authToken}`
    }

    if (options.requiresApiKey) {
      if (!this.apiKey) throw new ApiError(401, 'API key not provided.')
      headers.Authorization = `Bearer ${this.apiKey}`
    }

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

  private async initializeAuth(parameters: ClientConfig): Promise<void> {
    const { mnemonic, privateKey, token, expiresAt } = parameters

    if (mnemonic) {
      this.authToken = await this.generateAuthTokenFromMnemonic(
        mnemonic,
        expiresAt ?? Date.now() + 3600 * 1000,
      )
    } else if (isHex(privateKey)) {
      this.authToken = await this.generateAuthTokenFromPrivateKey(
        privateKey,
        expiresAt ?? Date.now() + 3600 * 1000,
      )
    } else if (token) {
      this.authToken = token
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

  private convertSignatureToBase64(signature: string): string {
    return Buffer.from(toBytes(signature)).toString('base64')
  }

  private async generateAuthToken(
    account: Account,
    expiresAt: number,
  ): Promise<string> {
    const payload = this.createAuthPayload(expiresAt)
    const payloadString = canonicalize(payload) ?? ''
    const signature = await account.signMessage({ message: payloadString })
    const encodedSignature = this.convertSignatureToBase64(signature)
    const bearerToken = `eip191:${encodedSignature}`

    const data = await this.request<{ secret: string }>(
      '/v2/auth',
      {},
      {
        method: 'PUT',
        headers: {
          Authorization: bearerToken,
        },
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
      {
        method: 'GET',
        requiresAuthToken: true,
      },
    )

    return user
  }

  public async getUserAppContext(): Promise<JsonObject> {
    const {
      result: { context },
    } = await this.request<{ context: JsonObject }>(
      `/v2/user-app-context`,
      {},
      {
        method: 'GET',
        requiresAuthToken: true,
      },
    )

    return context
  }

  public async getUserPreferences(): Promise<JsonObject> {
    const {
      result: { preferences },
    } = await this.request<{ preferences: JsonObject }>(
      `/v2/user-preferences`,
      {},
      {
        method: 'GET',
        requiresAuthToken: true,
      },
    )

    return preferences
  }
}
