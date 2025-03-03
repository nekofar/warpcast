import { beforeEach, describe, expect, it, vi } from 'vitest'
import { WarpcastClient } from '../src'
import { ApiError } from '../src/utils/error-handling'

describe('WarpcastClient', () => {
  let client: WarpcastClient

  beforeEach(() => {
    const token = process.env.ACCESS_TOKEN
    expect(token).toBeDefined()

    client = new WarpcastClient({
      token,
    })
  })

  it('should fetch user details by fid', async () => {
    const mockResponse = {
      result: {
        user: {
          fid: 20146,
          username: 'lilnouns',
          displayName: 'Lil Nouns 🤖',
          pfp: {
            url: 'https://imagedelivery.net/.../original',
            verified: false,
          },
          profile: {
            bio: { text: 'Lil Nouns bio', mentions: [], channelMentions: [] },
            location: { placeId: '', description: '' },
          },
          followerCount: 1362,
          followingCount: 2,
          connectedAccounts: [],
          viewerContext: {
            following: false,
            followedBy: false,
            canSendDirectCasts: false,
            enableNotifications: false,
            hasUploadedInboxKeys: true,
          },
        },
      },
    }

    // Mock fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      }),
    ) as any

    const user = await client.getUserByFid(20146)
    expect(user.fid).toBe(20146)
    expect(user.username).toBe('lilnouns')
  })

  it('should throw an error if fid is not provided', async () => {
    await expect(client.getUserByFid(undefined as any)).rejects.toThrow(
      'FID must be provided.',
    )
  })

  it('should throw an ApiError on failed request', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      }),
    ) as any

    await expect(client.getUserByFid(99999)).rejects.toThrow(ApiError)
  })
})
