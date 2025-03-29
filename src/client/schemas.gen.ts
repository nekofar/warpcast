// This file is auto-generated by @hey-api/openapi-ts

export const ErrorResponseSchema = {
  type: 'object',
  properties: {
    error: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
    status: {
      type: 'integer',
    },
  },
} as const

export const OnboardingStateResponseSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        state: {
          $ref: '#/components/schemas/OnboardingState',
        },
      },
    },
  },
} as const

export const OnboardingStateSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    user: {
      $ref: '#/components/schemas/User',
    },
    hasOnboarding: {
      type: 'boolean',
    },
    hasConfirmedEmail: {
      type: 'boolean',
    },
    handledConnectAddress: {
      type: 'boolean',
    },
    canRegisterUsername: {
      type: 'boolean',
    },
    needsRegistrationPayment: {
      type: 'boolean',
    },
    hasFid: {
      type: 'boolean',
    },
    hasFname: {
      type: 'boolean',
    },
    hasDelegatedSigner: {
      type: 'boolean',
    },
    hasSetupProfile: {
      type: 'boolean',
    },
    hasCompletedRegistration: {
      type: 'boolean',
    },
    hasStorage: {
      type: 'boolean',
    },
    handledPushNotificationsNudge: {
      type: 'boolean',
    },
    handledContactsNudge: {
      type: 'boolean',
    },
    handledInterestsNudge: {
      type: 'boolean',
    },
    hasValidPaidInvite: {
      type: 'boolean',
    },
    hasWarpcastWalletAddress: {
      type: 'boolean',
    },
    hasPhone: {
      type: 'boolean',
    },
    needsPhone: {
      type: 'boolean',
    },
    sponsoredRegisterEligible: {
      type: 'boolean',
    },
    geoRestricted: {
      type: 'boolean',
    },
  },
} as const

export const UserByFidResponseSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        user: {
          $ref: '#/components/schemas/UserWithExtras',
        },
        collectionsOwned: {
          type: 'array',
          items: {},
        },
        extras: {
          $ref: '#/components/schemas/UserExtras',
        },
      },
    },
  },
} as const

export const DirectCastInboxResponseSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        hasArchived: {
          type: 'boolean',
        },
        hasUnreadRequests: {
          type: 'boolean',
        },
        requestsCount: {
          type: 'integer',
        },
        conversations: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              conversationId: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              description: {
                type: 'string',
              },
              photoUrl: {
                type: 'string',
              },
              adminFids: {
                type: 'array',
                items: {
                  type: 'integer',
                },
              },
              lastReadTime: {
                type: 'integer',
              },
              lastMessage: {
                type: 'object',
                properties: {
                  conversationId: {
                    type: 'string',
                  },
                  senderFid: {
                    type: 'integer',
                  },
                  messageId: {
                    type: 'string',
                  },
                  serverTimestamp: {
                    type: 'integer',
                  },
                  type: {
                    type: 'string',
                  },
                  message: {
                    type: 'string',
                  },
                  hasMention: {
                    type: 'boolean',
                  },
                  reactions: {
                    type: 'array',
                    items: {},
                  },
                  isPinned: {
                    type: 'boolean',
                  },
                  isDeleted: {
                    type: 'boolean',
                  },
                  senderContext: {
                    $ref: '#/components/schemas/User',
                  },
                },
              },
              isGroup: {
                type: 'boolean',
              },
              createdAt: {
                type: 'integer',
              },
              viewerContext: {
                type: 'object',
                properties: {
                  category: {
                    type: 'string',
                  },
                  lastReadAt: {
                    type: 'integer',
                  },
                  muted: {
                    type: 'boolean',
                  },
                  manuallyMarkedUnread: {
                    type: 'boolean',
                  },
                  pinned: {
                    type: 'boolean',
                  },
                  unreadCount: {
                    type: 'integer',
                  },
                  unreadMentionsCount: {
                    type: 'integer',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
} as const

export const UserAppContextResponseSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        context: {
          type: 'object',
          properties: {
            canAddLinks: {
              type: 'boolean',
            },
            showConnectedApps: {
              type: 'boolean',
            },
            signerRequestsEnabled: {
              type: 'boolean',
            },
            prompts: {
              type: 'array',
              items: {},
            },
            adminForChannelKeys: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            modOfChannelKeys: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            memberOfChannelKeys: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            canEditAllChannels: {
              type: 'boolean',
            },
            canUploadVideo: {
              type: 'boolean',
            },
            statsigEnabled: {
              type: 'boolean',
            },
            shouldPromptForPushNotifications: {
              type: 'boolean',
            },
            shouldPromptForUserFollowsSyncContacts: {
              type: 'boolean',
            },
            castActions: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/CastAction',
              },
            },
            canAddCastAction: {
              type: 'boolean',
            },
            enabledCastAction: {
              $ref: '#/components/schemas/CastAction',
            },
            notificationTabsV2: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                  },
                  name: {
                    type: 'string',
                  },
                },
              },
            },
            enabledVideoAutoplay: {
              type: 'boolean',
            },
            regularCastByteLimit: {
              type: 'integer',
            },
            longCastByteLimit: {
              type: 'integer',
            },
            newUserStatus: {
              type: 'object',
            },
            country: {
              type: 'string',
            },
            higherClientEventSamplingRateEnabled: {
              type: 'boolean',
            },
          },
        },
      },
    },
  },
} as const

export const CastActionSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    octicon: {
      type: 'string',
    },
    actionUrl: {
      type: 'string',
    },
    action: {
      type: 'object',
      properties: {
        actionType: {
          type: 'string',
        },
        postUrl: {
          type: 'string',
        },
      },
    },
  },
} as const

export const UserSchema = {
  type: 'object',
  properties: {
    fid: {
      type: 'integer',
    },
    username: {
      type: 'string',
    },
    displayName: {
      type: 'string',
    },
    pfp: {
      $ref: '#/components/schemas/ProfilePicture',
    },
    profile: {
      $ref: '#/components/schemas/Profile',
    },
    followerCount: {
      type: 'integer',
    },
    followingCount: {
      type: 'integer',
    },
    viewerContext: {
      $ref: '#/components/schemas/ViewerContext',
    },
  },
} as const

export const UserWithExtrasSchema = {
  allOf: [
    {
      $ref: '#/components/schemas/User',
    },
    {
      type: 'object',
      properties: {
        connectedAccounts: {
          type: 'array',
          items: {},
        },
      },
    },
  ],
} as const

export const ProfilePictureSchema = {
  type: 'object',
  properties: {
    url: {
      type: 'string',
      format: 'uri',
    },
    verified: {
      type: 'boolean',
    },
  },
} as const

export const ProfileSchema = {
  type: 'object',
  properties: {
    bio: {
      $ref: '#/components/schemas/Bio',
    },
    location: {
      $ref: '#/components/schemas/Location',
    },
  },
} as const

export const BioSchema = {
  type: 'object',
  properties: {
    text: {
      type: 'string',
    },
    mentions: {
      type: 'array',
      items: {},
    },
    channelMentions: {
      type: 'array',
      items: {},
    },
  },
} as const

export const LocationSchema = {
  type: 'object',
  properties: {
    placeId: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
  },
} as const

export const ViewerContextSchema = {
  type: 'object',
  properties: {
    following: {
      type: 'boolean',
    },
    followedBy: {
      type: 'boolean',
    },
    enableNotifications: {
      type: 'boolean',
    },
    canSendDirectCasts: {
      type: 'boolean',
    },
    hasUploadedInboxKeys: {
      type: 'boolean',
    },
  },
} as const

export const UserExtrasSchema = {
  type: 'object',
  properties: {
    fid: {
      type: 'integer',
    },
    custodyAddress: {
      type: 'string',
    },
    ethWallets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    solanaWallets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
} as const

export const UserPreferencesResponseSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        preferences: {
          type: 'object',
          additionalProperties: true,
        },
      },
    },
  },
} as const

export const HighlightedChannelsResponseSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        channels: {
          type: 'array',
          items: {
            $ref: '#/components/schemas/Channel',
          },
        },
        viewerContext: {
          type: 'object',
          properties: {
            defaultFeed: {
              type: 'string',
            },
          },
        },
      },
    },
  },
} as const

export const ChannelSchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
    },
    key: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    imageUrl: {
      type: 'string',
    },
    fastImageUrl: {
      type: 'string',
    },
    feeds: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          type: {
            type: 'string',
          },
        },
      },
    },
    description: {
      type: 'string',
    },
    followerCount: {
      type: 'integer',
    },
    memberCount: {
      type: 'integer',
    },
    showCastSourceLabels: {
      type: 'boolean',
    },
    showCastTags: {
      type: 'boolean',
    },
    sectionRank: {
      type: 'integer',
    },
    subscribable: {
      type: 'boolean',
    },
    publicCasting: {
      type: 'boolean',
    },
    inviteCode: {
      type: 'string',
    },
    headerImageUrl: {
      type: 'string',
    },
    headerAction: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
        },
        target: {
          type: 'string',
        },
      },
    },
    headerActionMetadata: {
      type: 'object',
      additionalProperties: true,
    },
    viewerContext: {
      type: 'object',
      properties: {
        following: {
          type: 'boolean',
        },
        isMember: {
          type: 'boolean',
        },
        hasUnseenItems: {
          type: 'boolean',
        },
        favoritePosition: {
          type: 'integer',
        },
        activityRank: {
          type: 'integer',
        },
        canCast: {
          type: 'boolean',
        },
      },
    },
  },
} as const

export const FeedItemsResponseSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        items: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: true,
          },
        },
        latestMainCastTimestamp: {
          type: 'integer',
        },
        feedTopSeenAtTimestamp: {
          type: 'integer',
        },
        replaceFeed: {
          type: 'boolean',
        },
      },
    },
  },
} as const

export const UserResponseSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        user: {
          $ref: '#/components/schemas/UserWithExtras',
        },
        collectionsOwned: {
          type: 'array',
          items: {
            type: 'object',
          },
        },
        extras: {
          type: 'object',
          properties: {
            fid: {
              type: 'integer',
            },
            custodyAddress: {
              type: 'string',
            },
            ethWallets: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            solanaWallets: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
} as const

export const SuggestedUsersResponseSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        users: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: true,
          },
        },
        next: {
          type: 'object',
          properties: {
            cursor: {
              type: 'string',
            },
          },
        },
      },
    },
  },
} as const

export const ActionSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    icon: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    aboutUrl: {
      type: 'string',
      format: 'uri',
    },
    actionUrl: {
      type: 'string',
      format: 'uri',
    },
    action: {
      type: 'object',
      properties: {
        actionType: {
          type: 'string',
          enum: ['post', 'get', 'put', 'delete'],
        },
        postUrl: {
          type: 'string',
          format: 'uri',
        },
      },
    },
  },
} as const

export const SuccessResponseSchema = {
  type: 'object',
  required: ['result'],
  properties: {
    result: {
      type: 'object',
      required: ['success'],
      properties: {
        success: {
          type: 'boolean',
          description: 'Indicates whether the operation was successful',
        },
      },
    },
  },
} as const

export const VerifiedAddressSchema = {
  type: 'object',
  properties: {
    fid: {
      type: 'integer',
    },
    address: {
      type: 'string',
    },
    timestamp: {
      type: 'integer',
    },
    version: {
      type: 'string',
    },
    protocol: {
      type: 'string',
    },
    isPrimary: {
      type: 'boolean',
    },
    labels: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
} as const

export const FavoriteFramesResponseSchema = {
  type: 'object',
  required: ['result'],
  properties: {
    result: {
      type: 'object',
      required: ['frames'],
      properties: {
        frames: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: true,
          },
        },
      },
    },
  },
} as const
