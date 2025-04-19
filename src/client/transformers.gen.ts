// This file is auto-generated by @hey-api/openapi-ts

import type {
  CreateCastResponse,
  GetApiKeysResponse,
  GetCastsByFidResponse,
  GetCreatorRewardWinnersResponse,
  GetMiniappAnalyticsRollupResponse,
  GetProfileCastsResponse,
  GetStarterPackMembersResponse,
  GetUserLikedCastsResponse,
} from './types.gen'

const castSchemaResponseTransformer = (data: any) => {
  if (data.timestamp) {
    data.timestamp = BigInt(data.timestamp.toString())
  }
  return data
}

export const getCastsByFidResponseTransformer = async (
  data: any,
): Promise<GetCastsByFidResponse> => {
  if (data.result) {
    if (data.result.casts) {
      data.result.casts = data.result.casts.map((item: any) => {
        return castSchemaResponseTransformer(item)
      })
    }
  }
  return data
}

const castCreatedResponseSchemaResponseTransformer = (data: any) => {
  if (data.result) {
    if (data.result.cast) {
      data.result.cast = castSchemaResponseTransformer(data.result.cast)
    }
  }
  return data
}

export const createCastResponseTransformer = async (
  data: any,
): Promise<CreateCastResponse> => {
  data = castCreatedResponseSchemaResponseTransformer(data)
  return data
}

export const getCreatorRewardWinnersResponseTransformer = async (
  data: any,
): Promise<GetCreatorRewardWinnersResponse> => {
  if (data.result) {
    if (data.result.periodStartTimestamp) {
      data.result.periodStartTimestamp = BigInt(
        data.result.periodStartTimestamp.toString(),
      )
    }
    if (data.result.periodEndTimestamp) {
      data.result.periodEndTimestamp = BigInt(
        data.result.periodEndTimestamp.toString(),
      )
    }
  }
  return data
}

export const getStarterPackMembersResponseTransformer = async (
  data: any,
): Promise<GetStarterPackMembersResponse> => {
  if (data.result) {
    if (data.result.members) {
      data.result.members = data.result.members.map((item: any) => {
        item.memberAt = BigInt(item.memberAt.toString())
        return item
      })
    }
  }
  return data
}

const apiKeySchemaResponseTransformer = (data: any) => {
  data.createdAt = BigInt(data.createdAt.toString())
  data.expiresAt = BigInt(data.expiresAt.toString())
  return data
}

export const getApiKeysResponseTransformer = async (
  data: any,
): Promise<GetApiKeysResponse> => {
  data.result.apiKeys = data.result.apiKeys.map((item: any) => {
    return apiKeySchemaResponseTransformer(item)
  })
  return data
}

export const getProfileCastsResponseTransformer = async (
  data: any,
): Promise<GetProfileCastsResponse> => {
  data.result.casts = data.result.casts.map((item: any) => {
    return castSchemaResponseTransformer(item)
  })
  return data
}

export const getUserLikedCastsResponseTransformer = async (
  data: any,
): Promise<GetUserLikedCastsResponse> => {
  if (data.result.casts) {
    data.result.casts = data.result.casts.map((item: any) => {
      return castSchemaResponseTransformer(item)
    })
  }
  return data
}

export const getMiniappAnalyticsRollupResponseTransformer = async (
  data: any,
): Promise<GetMiniappAnalyticsRollupResponse> => {
  if (data.result) {
    if (data.result.rollup) {
      if (data.result.rollup.dateRange) {
        if (data.result.rollup.dateRange.startDate) {
          data.result.rollup.dateRange.startDate = new Date(
            data.result.rollup.dateRange.startDate,
          )
        }
        if (data.result.rollup.dateRange.endDate) {
          data.result.rollup.dateRange.endDate = new Date(
            data.result.rollup.dateRange.endDate,
          )
        }
      }
    }
  }
  return data
}
