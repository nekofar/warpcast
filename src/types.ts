import { Hex } from 'viem'
import { HDAccount, PrivateKeyAccount } from 'viem/accounts'

/**
 * Configuration options for the WarpcastClient.
 */
export interface ClientConfig {
  privateKey: Hex
  expiresAt: number
  mnemonic?: string
  baseURL?: string // The base URL for API requests (default: "https://api.warpcast.com").
  token?: string // Authentication token for protected endpoints.
  apiKey?: string // API key for specific endpoints that require it.
}

/**
 * Standard response format for the Warpcast API.
 */
export type WarpcastResponse<T> = {
  result: T // The result object containing the data for the request.
}

export type Account = HDAccount | PrivateKeyAccount
