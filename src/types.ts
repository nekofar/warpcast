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
  result: T
  next?: {
    cursor: string
  }
}

export type Account = HDAccount | PrivateKeyAccount

export interface RequestOptions {
  authTokenRequired?: boolean
  apiKeyRequired?: boolean
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

export interface Context {
  canAddLinks: boolean
  showConnectedApps: boolean
  signerRequestsEnabled: boolean
  prompts: string[]
  adminForChannelKeys: string[]
  modOfChannelKeys: string[]
  memberOfChannelKeys: string[]
  canEditAllChannels: boolean
  canUploadVideo: boolean
  statsigEnabled: boolean
  shouldPromptForPushNotifications: boolean
  shouldPromptForUserFollowsSyncContacts: boolean
  castActions: {
    id: string
    name: string
    octicon: string
    actionUrl: string
    action: {
      actionType: string
      postUrl: string
    }
  }[]
  canAddCastAction: boolean
  enabledCastAction?: {
    id: string
    name: string
    octicon: string
    actionUrl: string
    action: {
      actionType: string
      postUrl: string
    }
  }
  notificationTabsV2: {
    id: string
    name: string
  }[]
  enabledVideoAutoplay: boolean
  regularCastByteLimit: number
  longCastByteLimit: number
  newUserStatus: Record<string, unknown>
  country: string
  higherClientEventSamplingRateEnabled: boolean
}
