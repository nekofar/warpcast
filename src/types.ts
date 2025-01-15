import { JsonObject } from 'type-fest'
import { Hex } from 'viem'
import { HDAccount, PrivateKeyAccount } from 'viem/accounts'

export interface ClientConfig {
  privateKey?: Hex
  expiresAt?: number
  mnemonic?: string
  baseURL?: string // The base URL for API requests (default: "https://api.warpcast.com").
  token?: string // Authentication token for protected endpoints.
  apiKey?: string // API key for specific endpoints that require it.
}

export interface WarpcastResponse<T> {
  result: T // The result object containing the data for the request.
}

export type Account = HDAccount | PrivateKeyAccount

export interface RequestOptions {
  requiresAuthToken?: boolean
  requiresApiKey?: boolean
  headers?: HeadersInit
  method?: string
  body?: JsonObject
}

export type RequestParams = Record<string, string | number | boolean>

export interface User {
  fid: number
  username: string
  displayName: string
  pfp: {
    url: string
    verified: boolean
  }
  profile: {
    bio: {
      text: string
      mentions: string[]
      channelMentions: string[]
    }
    location: {
      placeId: string
      description: string
    }
  }
  followerCount: number
  followingCount: number
  connectedAccounts: string[]
  viewerContext: {
    following: boolean
    followedBy: boolean
    canSendDirectCasts: boolean
    enableNotifications: boolean
    hasUploadedInboxKeys: boolean
  }
}
