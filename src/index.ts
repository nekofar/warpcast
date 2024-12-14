import canonicalize from 'canonicalize'
import { JsonObject } from 'type-fest'
import { Hex, toBytes } from 'viem'
import {
  HDAccount,
  mnemonicToAccount,
  PrivateKeyAccount,
  privateKeyToAccount,
} from 'viem/accounts'
import { ClientOptions, WarpcastResponse } from './types'
import { ApiError } from './utils/error-handling'

export class WarpcastClient {
  private readonly baseURL: string
  private token?: string
  private readonly apiKey?: string

  constructor(options: ClientOptions) {
    this.baseURL = options.baseURL || 'https://api.warpcast.com'
    this.apiKey = options.apiKey
    this.token = undefined
    this.initializeAuth(options)
  }

  private async initializeAuth(options: ClientOptions): Promise<void> {
    if (options.mnemonic) {
      this.token = await this.generateAuthTokenFromMnemonic(
        options.mnemonic,
        options.expiresAt || Date.now() + 3600 * 1000,
      )
    } else if (options.privateKey) {
      this.token = await this.generateAuthTokenFromPrivateKey(
        options.privateKey,
        options.expiresAt || Date.now() + 3600 * 1000,
      )
    } else if (options.token) {
      this.token = options.token
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
    account: HDAccount | PrivateKeyAccount,
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
      requiresToken?: boolean
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

    if (options.requiresToken) {
      if (!this.token)
        throw new ApiError(401, 'Authentication token not initialized.')
      headers.Authorization = `Bearer ${this.token}`
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
