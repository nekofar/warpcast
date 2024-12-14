import canonicalize from 'canonicalize'
import { JsonObject } from 'type-fest'
import { Hex, toBytes } from 'viem'
import { mnemonicToAccount, privateKeyToAccount } from 'viem/accounts'
import { Account, ClientConfig, WarpcastResponse } from './types'
import { ApiError } from './utils/error-handling'

export class WarpcastClient {
  private readonly baseURL: string
  private authToken?: string
  private readonly apiKey?: string

  constructor(parameters: ClientConfig) {
    const { baseURL, apiKey } = parameters

    this.baseURL = baseURL || 'https://api.warpcast.com'
    this.apiKey = apiKey
    this.authToken = undefined

    this.initializeAuth(parameters)
  }

  private async initializeAuth(parameters: ClientConfig): Promise<void> {
    const { mnemonic, privateKey, token, expiresAt } = parameters

    if (mnemonic) {
      this.authToken = await this.generateAuthTokenFromMnemonic(
        mnemonic,
        expiresAt || Date.now() + 3600 * 1000,
      )
    } else if (privateKey) {
      this.authToken = await this.generateAuthTokenFromPrivateKey(
        privateKey,
        expiresAt || Date.now() + 3600 * 1000,
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

  private async request<T>(
    endpoint: string,
    params: Record<string, any> = {},
    options: {
      requiresAuthToken?: boolean
      requiresApiKey?: boolean
      headers?: HeadersInit
      method?: string
      body?: any
    } = {},
  ): Promise<WarpcastResponse<T>> {
    const url = new URL(`${this.baseURL}${endpoint}`)
    if (options.method !== 'POST') {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value.toString()),
      )
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...((options.headers as Record<string, string>) || {}),
    }

    if (options.requiresAuthToken) {
      if (!this.authToken)
        throw new ApiError(401, 'Authentication authToken not initialized.')
      headers.Authorization = `Bearer ${this.authToken}`
    }

    if (options.requiresApiKey) {
      if (!this.apiKey) throw new ApiError(401, 'API key not provided.')
      headers['X-API-Key'] = this.apiKey
    }

    const response = await fetch(url.toString(), {
      headers,
      method: options.method || 'GET',
      body: options.body ? JSON.stringify(options.body) : null,
    })

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText)
    }

    return response.json()
  }
}
