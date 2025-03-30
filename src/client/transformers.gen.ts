// This file is auto-generated by @hey-api/openapi-ts

import type {
  GetCreatorRewardWinnersResponse,
  GetStarterPackMembersResponse,
} from './types.gen'

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
