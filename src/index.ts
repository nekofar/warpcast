export type {
  Auth, // Auth type.
  Client, // Core client instance type.
  ClientOptions, // Client options type.
  Config, // Client configuration type.
  CreateClientConfig, // Type helper to customize the client configuration.
  Options, // Request options type.
  QuerySerializerOptions, // Query/body serializer options type.
  RequestOptions, // Request options per-call type.
  RequestResult, // Request result type.
  ResolvedRequestOptions, // Resolved request options type.
  ResponseStyle, // Response style type.
  TDataShape, // Data shape type.
} from "./client/client";

export {
  buildClientParams, // Build client params helper.
  createClient, // Create a configurable client instance.
  createConfig, // Create a client config object.
  formDataBodySerializer, // FormData body serializer.
  jsonBodySerializer, // JSON body serializer.
  mergeHeaders, // Merge Request/Client headers helper.
  serializeQueryKeyValue, // Serialize query-key helper.
  urlSearchParamsBodySerializer, // URLSearchParams body serializer.
} from "./client/client";
export {
  client, // Preconfigured Warpcast API client instance.
} from "./client/client.gen";

export {
  ActionSchema, // Action schema definition.
  ApiKeySchema, // Api key schema definition.
  AppsByAuthorResponseSchema, // Apps by author response schema definition.
  AttachEmbedsResponseSchema, // Attach embeds response schema definition.
  BadRequestErrorSchema, // Bad request error schema definition.
  BioSchema, // Bio schema definition.
  BookmarkedCastSchema, // Bookmarked cast schema definition.
  BookmarkedCastsResponseSchema, // Bookmarked casts response schema definition.
  CastActionSchema, // Cast action schema definition.
  CastCreatedResponseSchema, // Cast-created response schema definition.
  CastHashResponseSchema, // Cast hash response schema definition.
  CastQuoteSchema, // Cast quote schema definition.
  CastQuotesResponseSchema, // Cast quotes response schema definition.
  CastRecastersResponseSchema, // Cast recasters response schema definition.
  CastSchema, // Cast schema definition.
  ChannelFollowerSchema, // Channel follower schema definition.
  ChannelFollowersResponseSchema, // Channel followers response schema definition.
  ChannelFollowersYouKnowResponseSchema, // Channel followers you know the response schema definition.
  ChannelFollowStatusResponseSchema, // Channel follow status response schema definition.
  ChannelFollowStatusSchema, // Channel follow status schema definition.
  ChannelListResponseSchema, // Channel list response schema definition.
  ChannelResponseSchema, // Channel response schema definition.
  ChannelSchema, // Channel schema definition.
  ChannelStreaksResponseSchema, // Channel streaks response schema definition.
  ChannelUsersResponseSchema, // Channel users response schema definition.
  DirectCastConversationCategorizationRequestSchema, // Direct cast conversation categorization request schema definition.
  DirectCastConversationCategorizationResponseSchema, // Direct cast conversation categorization response schema definition.
  DirectCastConversationMessagesResponseSchema, // Direct cast conversation messages response schema definition.
  DirectCastConversationMessageTtlRequestSchema, // Direct cast conversation message ttl request schema definition.
  DirectCastConversationMessageTtlResponseSchema, // Direct cast conversation message ttl response schema definition.
  DirectCastConversationNotificationsRequestSchema, // Direct cast conversation notifications request schema definition.
  DirectCastConversationNotificationsResponseSchema, // Direct cast conversation notifications response schema definition.
  DirectCastConversationResponseSchema, // Direct cast conversation response schema definition.
  DirectCastConversationSchema, // Direct cast conversation schema definition.
  DirectCastConversationViewerContextSchema, // Direct cast conversation viewer context schema definition.
  DirectCastInboxResponseSchema, // Direct cast inbox response schema definition.
  DirectCastInboxResultSchema, // Direct cast inbox result schema definition.
  DirectCastManuallyMarkUnreadRequestSchema, // Direct cast manually marks unread request schema definition.
  DirectCastMessageMentionSchema, // Direct cast message mention schema definition.
  DirectCastMessageMetadataSchema, // Direct cast message metadata schema definition.
  DirectCastMessageReactionRequestSchema, // Direct cast message reaction request schema definition.
  DirectCastMessageReactionResponseSchema, // Direct cast message reaction response schema definition.
  DirectCastMessageReactionSchema, // Direct cast message reaction schema definition.
  DirectCastMessageSchema, // Direct cast message schema definition.
  DirectCastMessageViewerContextSchema, // Direct cast message viewer context schema definition.
  DirectCastPinConversationRequestSchema, // Direct cast pin conversation request schema definition.
  DirectCastSendRequestSchema, // Direct cast send request schema definition.
  DirectCastSendResponseSchema, // Direct cast send response schema definition.
  DiscoverChannelsResponseSchema, // Discover channels response schema definition.
  DraftCastSchema, // Draft cast schema definition.
  DraftCreatedResponseSchema, // Draft created response schema definition.
  DraftSchema, // Draft schema definition.
  DraftsResponseSchema, // Drafts response schema definition.
  ErrorResponseSchema, // Error response schema definition.
  FavoriteFramesResponseSchema, // Favorite frames response schema definition.
  FeedItemsResponseSchema, // Feed items response schema definition.
  FrameAppSchema, // Frame app schema definition.
  FrameAppsResponseSchema, // Frame apps response schema definition.
  FrameSchema, // Frame schema definition.
  GenericBadRequestErrorSchema, // Generic bad request error schema definition.
  GenericResponseSchema, // Generic response schema definition.
  HighlightedChannelsResponseSchema, // Highlighted channels response schema definition.
  ImageEmbedSchema, // Image embed schema definition.
  InvitesAvailableResponseSchema, // Invites available response schema definition.
  LocationSchema, // Location schema definition.
  MiniAppSchema, // Mini app schema definition.
  MutedKeywordPropertiesSchema, // Muted keyword properties schema definition.
  MutedKeywordSchema, // Muted keyword schema definition.
  MutedKeywordsResponseSchema, // Muted keywords response schema definition.
  NotificationsResponseSchema, // Notification response schema definition.
  OnboardingStateResponseSchema, // Onboarding state response schema definition.
  OnboardingStateSchema, // Onboarding state schema definition.
  PaginatedResponseSchema, // Paginated response schema definition.
  PaginationCursorSchema, // Pagination cursor schema definition.
  ProfilePictureSchema, // Profile picture schema definition.
  ProfileSchema, // Profile schema definition.
  RankedMiniAppSchema, // Ranked mini app schema definition.
  RawChannelResponseSchema, // Raw channel response schema definition.
  RawChannelSchema, // Raw channel schema definition.
  RecasterSchema, // Recaster schema definition.
  RewardsLeaderboardResponseSchema, // Rewards leaderboard response schema definition.
  RewardsMetadataResponseSchema, // Rewards metadata response schema definition.
  RewardsScoresResponseSchema, // Rewards scores response schema definition.
  SearchChannelsResponseSchema, // Search channels response schema definition.
  SponsoredInvitesResponseSchema, // Sponsored invites response schema definition.
  StarterPackResponseSchema, // Starter pack response schema definition.
  StarterPackSchema, // Starter pack schema definition.
  StarterPacksResponseSchema, // Starter packs response schema definition.
  StarterPackUpdateRequestSchema, // Starter pack update request schema definition.
  StarterPackUsersResponseSchema, // Starter pack users response schema definition.
  SuccessResponseSchema, // Success response schema definition.
  SuggestedUsersResponseSchema, // Suggested users response schema definition.
  TopMiniAppsResponseSchema, // Top mini apps response schema definition.
  UnseenCountsResponseSchema, // Unseen counts response schema definition.
  UrlEmbedSchema, // Url embed schema definition.
  UserAppContextResponseSchema, // User app context response schema definition.
  UserByFidResponseSchema, // User by fid response schema definition.
  UserExtrasSchema, // User extras schema definition.
  UserPreferencesResponseSchema, // User preferences response schema definition.
  UserResponse_2Schema, // User response user response schema definition.
  UserResponseSchema, // User response schema definition.
  UserSchema, // User schema definition.
  UsersResponseSchema, // Users response schema definition.
  UsersWithCountResponseSchema, // Users with count response schema definition.
  UserThreadCastsResponseSchema, // User thread casts response schema definition.
  UserWithExtrasSchema, // User with extra schema definition.
  ValidationErrorSchema, // Validation error schema definition.
  VerifiedAddressSchema, // Verified address schema definition.
  VideoEmbedSchema, // Video embed schema definition.
  ViewerContext_2Schema, // Mini app viewer context schema definition.
  ViewerContextSchema, // Viewer context schema definition.
  WinnerSchema, // Winner schema definition.
} from "./client/schemas.gen";

// Note: Options is exported from './client/client'

export {
  version, // Package version pulled from package.json.
} from "../package.json";
export {
  acceptChannelInvite, // Accept channel invite endpoint helper.
  addDirectCastMessageReaction, // Add direct cast message reaction endpoint helper.
  attachEmbeds, // Attach embeds endpoint helper.
  banUserFromChannel, // Ban user from channel endpoint helper.
  blockUser, // Block user endpoint helper.
  categorizeDirectCastConversation, // Categorize direct cast conversation endpoint helper.
  checkUserChannelFollowStatus, // Check user channel follow status endpoint helper.
  createApiKey, // Create api key endpoint helper.
  createCast, // Create a cast endpoint helper.
  createDraftCasts, // Create draft casts endpoint helper.
  deleteCast, // Delete cast endpoint helper.
  deleteDraftCast, // Delete draft cast endpoint helper.
  directCastManuallyMarkUnread, // Direct cast manually marks unread endpoint helper.
  discoverChannels, // Discover channels endpoint helper.
  exportMiniAppUserData, // Export mini app user data endpoint helper.
  followChannel, // Follow channel endpoint helper.
  getAccountVerifications, // Get account verifications endpoint helper.
  getAllChannels, // Get all channels endpoint helper.
  getApiKeys, // Get api keys endpoint helper.
  getAppsByAuthor, // Get apps by author endpoint helper.
  getAvailableInvites, // Get available invites endpoint helper.
  getBlockedUsers, // Get blocked users endpoint helper.
  getBookmarkedCasts, // Get bookmarked casts endpoint helper.
  getCastLikes, // Get cast likes endpoint helper.
  getCastQuotes, // Get cast quotes endpoint helper.
  getCastRecasters, // Get cast recasters endpoint helper.
  getCastsByFid, // Get casts by fid endpoint helper.
  getChannel, // Get channel endpoint helper.
  getChannelBannedUsers, // Get channel banned users endpoint helper.
  getChannelDetails, // Get channel details endpoint helper.
  getChannelFollowers, // Get channel followers endpoint helper.
  getChannelFollowersYouKnow, // Get channel followers you know the endpoint helper.
  getChannelInvites, // Get channel invites endpoint helper.
  getChannelMembers, // Get channel members endpoint helper.
  getChannelModeratedCasts, // Get channel moderated casts endpoint helper.
  getChannelRestrictedUsers, // Get channel restricted users endpoint helper.
  getChannelStreaksForUser, // Get channel streaks for user endpoint helper.
  getChannelUsers, // Get channel users endpoint helper.
  getConnectedAccounts, // Get connected accounts endpoint helper.
  getCreatorRewardWinners, // Get creator reward winners endpoint helper.
  getCurrentUser, // Get current user endpoint helper.
  getDeveloperRewardWinners, // Get developer reward winners endpoint helper.
  getDirectCastConversation, // Get direct cast conversation endpoint helper.
  getDirectCastConversationMessages, // Get direct cast conversation messages endpoint helper.
  getDirectCastConversationRecentMessages, // Get direct cast conversation recent messages endpoint helper.
  getDirectCastInbox, // Get direct cast inbox endpoint helper.
  getDiscoverableActions, // Get discoverable actions endpoint helper.
  getDiscoverableComposerActions, // Get discoverable composer actions endpoint helper.
  getDomainManifest, // Get domain manifest endpoint helper.
  getDraftCasts, // Get draft casts endpoint helper.
  getFarcasterJson, // Get farcaster json endpoint helper.
  getFeedItems, // Get feed items endpoint helper.
  getFollowers, // Get followers endpoint helper.
  getFollowing, // Get following endpoint helper.
  getHighlightedChannels, // Get highlighted channels endpoint helper.
  getManagedApps, // Get managed apps endpoint helper.
  getMetaTags, // Get meta tags endpoint helper.
  getMiniAppAnalyticsRollup, // Get mini app analytics rollup endpoint helper.
  getMutedKeywords, // Get muted keywords endpoint helper.
  getMutualFollowers, // Get mutual followers endpoint helper.
  getNotifications, // Get notifications endpoint helper.
  getOrCreateReferralCode, // Get or create a referral code endpoint helper.
  getOwnedDomains, // Get owned domains endpoint helper.
  getProfileCasts, // Get profile casts endpoint helper.
  getRewardsLeaderboard, // Get rewards leaderboard endpoint helper.
  getRewardsMetadata, // Get rewards metadata endpoint helper.
  getSponsoredInvites, // Get sponsored invites endpoint helper.
  getStarterPack, // Get starter pack endpoint helper.
  getStarterPackMembers, // Get starter pack members endpoint helper.
  getStarterPackUsers, // Get starter pack users endpoint helper.
  getSuggestedStarterPacks, // Get suggested starter packs endpoint helper.
  getSuggestedUsers, // Get suggested users endpoint helper.
  getTopFrameApps, // Get top frame apps endpoint helper.
  getTopMiniApps, // Get top mini apps endpoint helper.
  getTrendingTopics, // Get trending topics endpoint helper.
  getUnseenCounts, // Get unseen counts endpoint helper.
  getUser, // Get user endpoint helper.
  getUserAppContext, // Get user app context endpoint helper.
  getUserByFid, // Get user by fid endpoint helper.
  getUserByUsername, // Get user by username endpoint helper.
  getUserByVerificationAddress, // Get user by verification address endpoint helper.
  getUserFavoriteFrames, // Get user favorite frames endpoint helper.
  getUserFollowedChannels, // Get user followed channels endpoint helper.
  getUserFollowingChannels, // Get user-following channels endpoint helper.
  getUserLikedCasts, // Get user liked casts endpoint helper.
  getUserOnboardingState, // Get user onboarding state endpoint helper.
  getUserPreferences, // Get user preferences endpoint helper.
  getUserPrimaryAddress, // Get user primary address endpoint helper.
  getUserPrimaryAddresses, // Get user primary addresses endpoint helper.
  getUserRewardsScores, // Get user rewards scores endpoint helper.
  getUserStarterPacks, // Get user starter packs endpoint helper.
  getUserThreadCasts, // Get user thread casts endpoint helper.
  getVerifications, // Get verifications endpoint helper.
  getXpClaimableSummary, // Get xp claimable summary endpoint helper.
  getXpRewards, // Get xp rewards endpoint helper.
  inspectImageUrl, // Inspect image url endpoint helper.
  inspectMiniAppUrl, // Inspect mini app url endpoint helper.
  inviteUserToChannel, // Invite user to channel endpoint helper.
  likeCast, // Like cast endpoint helper.
  markAllNotificationsRead, // Mark all notifications read endpoint helper.
  moderateCast, // Moderate cast endpoint helper.
  muteKeyword, // Mute keyword endpoint helper.
  pinCastToChannel, // Pin cast to channel endpoint helper.
  pinDirectCastConversation, // Pin direct cast conversation endpoint helper.
  recastCast, // Recast cast endpoint helper.
  registerStatsigEvents, // Register statsig events endpoint helper.
  removeChannelInvite, // Remove channel invite endpoint helper.
  removeDirectCastMessageReaction, // Remove direct cast message reaction endpoint helper.
  revokeApiKey, // Revoke api key endpoint helper.
  searchChannels, // Search channels endpoint helper.
  sendDirectCast, // Send direct cast endpoint helper.
  sendDirectCastMessage, // Send direct cast message endpoint helper.
  setDirectCastConversationMessageTtl, // Set direct cast conversation message ttl endpoint helper.
  setLastCheckedTimestamp, // Set last checked timestamp endpoint helper.
  submitAnalyticsEvents, // Submit analytics events endpoint helper.
  unbanUserFromChannel, // Unban user from channel endpoint helper.
  unblockUser, // Unblock user endpoint helper.
  undoRecast, // Undo recast endpoint helper.
  unfollowChannel, // Unfollow channel endpoint helper.
  unlikeCast, // Unlike cast endpoint helper.
  unmuteKeyword, // Unmute keyword endpoint helper.
  unpinCastFromChannel, // Unpin cast from channel endpoint helper.
  unpinDirectCastConversation, // Unpin direct cast conversation endpoint helper.
  updateDirectCastConversationNotifications, // Update direct cast conversation notifications endpoint helper.
  updateStarterPack, // Update starter pack endpoint helper.
} from "./client/sdk.gen";
export {
  createCastResponseTransformer, // Create cast response transformer.
  getApiKeysResponseTransformer, // Get api keys response transformer.
  getCastsByFidResponseTransformer, // Get casts by fid response transformer.
  getCreatorRewardWinnersResponseTransformer, // Get creator reward winners response transformer.
  getDirectCastConversationMessagesResponseTransformer, // Get direct cast conversation messages response transformer.
  getDirectCastConversationRecentMessagesResponseTransformer, // Get direct cast conversation recent messages response transformer.
  getDirectCastConversationResponseTransformer, // Get direct cast conversation response transformer.
  getDirectCastInboxResponseTransformer, // Get direct cast inbox response transformer.
  getFeedItemsResponseTransformer, // Get feed items response transformer.
  getMiniAppAnalyticsRollupResponseTransformer, // Get mini app analytics rollup response transformer.
  getProfileCastsResponseTransformer, // Get profile casts response transformer.
  getRewardsMetadataResponseTransformer, // Get rewards metadata response transformer.
  getStarterPackMembersResponseTransformer, // Get starter pack members response transformer.
  getUserLikedCastsResponseTransformer, // Get user liked casts response transformer.
} from "./client/transformers.gen";
export type {
  AcceptChannelInviteData, // Accept channel invite type definition.
  AcceptChannelInviteError, // Accept channel invite type definition.
  AcceptChannelInviteErrors, // Accept channel invite type definition.
  AcceptChannelInviteResponse, // Accept channel invite type definition.
  AcceptChannelInviteResponses, // Accept channel invite type definition.
  Action, // Action type definition.
  AddDirectCastMessageReactionData, // Add direct cast message reaction type definition.
  AddDirectCastMessageReactionError, // Add direct cast message reaction type definition.
  AddDirectCastMessageReactionErrors, // Add direct cast message reaction type definition.
  AddDirectCastMessageReactionResponse, // Add direct cast message reaction type definition.
  AddDirectCastMessageReactionResponses, // Add direct cast message reaction type definition.
  ApiKey, // Api key type definition.
  AppsByAuthorResponse, // Apps by author type definition.
  AttachEmbedsData, // Attach embed type definition.
  AttachEmbedsError, // Attach embed type definition.
  AttachEmbedsErrors, // Attach embed type definition.
  AttachEmbedsResponse, // Attach embed type definition.
  AttachEmbedsResponse2, // Attach embed response2 type definition.
  AttachEmbedsResponses, // Attach embed type definition.
  BadRequestError, // Bad request type definition.
  BanUserFromChannelData, // Ban user from channel type definition.
  BanUserFromChannelError, // Ban user from channel type definition.
  BanUserFromChannelErrors, // Ban user from channel type definition.
  BanUserFromChannelResponse, // Ban user from channel type definition.
  BanUserFromChannelResponses, // Ban user from channel type definition.
  Bio, // Bio type definition.
  BlockUserData, // Block user type definition.
  BlockUserError, // Block user type definition.
  BlockUserErrors, // Block user type definition.
  BlockUserResponse, // Block user type definition.
  BlockUserResponses, // Block user type definition.
  BookmarkedCast, // Bookmarked cast type definition.
  BookmarkedCastsResponse, // Bookmarked casts type definition.
  Cast, // Cast type definition.
  CastAction, // Cast action type definition.
  CastCreatedResponse, // Cast-created type definition.
  CastHashResponse, // Cast hash type definition.
  CastQuote, // Cast quote type definition.
  CastQuotesResponse, // Cast quotes type definition.
  CastRecastersResponse, // Cast recasters type definition.
  CategorizeDirectCastConversationData, // Categorize direct cast conversation type definition.
  CategorizeDirectCastConversationError, // Categorize direct cast conversation type definition.
  CategorizeDirectCastConversationErrors, // Categorize direct cast conversation type definition.
  CategorizeDirectCastConversationResponse, // Categorize direct cast conversation type definition.
  CategorizeDirectCastConversationResponses, // Categorize direct cast conversation type definition.
  Channel, // Channel type definition.
  ChannelFollower, // Channel follower type definition.
  ChannelFollowersResponse, // Channel followers type definition.
  ChannelFollowersYouKnowResponse, // Channel followers you know type definition.
  ChannelFollowStatus, // Channel follow status type definition.
  ChannelFollowStatusResponse, // Channel follow status type definition.
  ChannelListResponse, // Channel list type definition.
  ChannelResponse, // Channel type definition.
  ChannelStreaksResponse, // Channel streaks type definition.
  ChannelUsersResponse, // Channel users type definition.
  CheckUserChannelFollowStatusData, // Check user channel follow status type definition.
  CheckUserChannelFollowStatusError, // Check user channel follow status type definition.
  CheckUserChannelFollowStatusErrors, // Check user channel follow status type definition.
  CheckUserChannelFollowStatusResponse, // Check user channel follow status type definition.
  CheckUserChannelFollowStatusResponses, // Check user channel follow status type definition.
  CreateApiKeyData, // Create api key type definition.
  CreateApiKeyError, // Create api key type definition.
  CreateApiKeyErrors, // Create api key type definition.
  CreateApiKeyResponse, // Create api key type definition.
  CreateApiKeyResponses, // Create api key type definition.
  CreateCastData, // Create cast type definition.
  CreateCastError, // Create cast type definition.
  CreateCastErrors, // Create cast type definition.
  CreateCastResponse, // Create cast type definition.
  CreateCastResponses, // Create cast type definition.
  CreateDraftCastsData, // Create draft casts type definition.
  CreateDraftCastsError, // Create draft casts type definition.
  CreateDraftCastsErrors, // Create draft casts type definition.
  CreateDraftCastsResponse, // Create draft casts type definition.
  CreateDraftCastsResponses, // Create draft casts type definition.
  CursorParam, // Cursor type definition.
  DeleteCastData, // Delete cast type definition.
  DeleteCastError, // Delete cast type definition.
  DeleteCastErrors, // Delete cast type definition.
  DeleteCastResponse, // Delete cast type definition.
  DeleteCastResponses, // Delete cast type definition.
  DeleteDraftCastData, // Delete draft cast type definition.
  DeleteDraftCastError, // Delete draft cast type definition.
  DeleteDraftCastErrors, // Delete draft cast type definition.
  DeleteDraftCastResponse, // Delete draft cast type definition.
  DeleteDraftCastResponses, // Delete draft cast type definition.
  DirectCastConversation, // Direct cast conversation type definition.
  DirectCastConversationCategorizationRequest, // Direct cast conversation categorization type definition.
  DirectCastConversationCategorizationResponse, // Direct cast conversation categorization type definition.
  DirectCastConversationMessagesResponse, // Direct cast conversation messages type definition.
  DirectCastConversationMessageTtlRequest, // Direct cast conversation message ttl type definition.
  DirectCastConversationMessageTtlResponse, // Direct cast conversation message ttl type definition.
  DirectCastConversationNotificationsRequest, // Direct cast conversation notifications type definition.
  DirectCastConversationNotificationsResponse, // Direct cast conversation notifications type definition.
  DirectCastConversationResponse, // Direct cast conversation type definition.
  DirectCastConversationViewerContext, // Direct cast conversation viewer type definition.
  DirectCastInboxResponse, // Direct cast inbox type definition.
  DirectCastInboxResult, // Direct cast inbox type definition.
  DirectCastManuallyMarkUnreadData, // Direct cast manually mark unread type definition.
  DirectCastManuallyMarkUnreadError, // Direct cast manually mark unread type definition.
  DirectCastManuallyMarkUnreadErrors, // Direct cast manually mark unread type definition.
  DirectCastManuallyMarkUnreadRequest, // Direct cast manually mark unread type definition.
  DirectCastManuallyMarkUnreadResponse, // Direct cast manually mark unread type definition.
  DirectCastManuallyMarkUnreadResponses, // Direct cast manually mark unread type definition.
  DirectCastMessage, // Direct cast message type definition.
  DirectCastMessageMention, // Direct cast message mention type definition.
  DirectCastMessageMetadata, // Direct cast message metadata type definition.
  DirectCastMessageReaction, // Direct cast message reaction type definition.
  DirectCastMessageReactionRequest, // Direct cast message reaction type definition.
  DirectCastMessageReactionResponse, // Direct cast message reaction type definition.
  DirectCastMessageViewerContext, // Direct cast message viewer type definition.
  DirectCastPinConversationRequest, // Direct cast pin conversation type definition.
  DirectCastSendRequest, // Direct cast send type definition.
  DirectCastSendResponse, // Direct cast send type definition.
  DiscoverChannelsData, // Discover channel type definition.
  DiscoverChannelsError, // Discover channel type definition.
  DiscoverChannelsErrors, // Discover channel type definition.
  DiscoverChannelsResponse, // Discover channel type definition.
  DiscoverChannelsResponse2, // Discover channel response2 type definition.
  DiscoverChannelsResponses, // Discover channel type definition.
  Draft, // Draft type definition.
  DraftCast, // Draft cast type definition.
  DraftCreatedResponse, // Draft created type definition.
  DraftsResponse, // Draft type definition.
  ErrorResponse, // Error type definition.
  ExportMiniAppUserDataData, // Export mini app user data type definition.
  ExportMiniAppUserDataError, // Export mini app user data type definition.
  ExportMiniAppUserDataErrors, // Export mini app user data type definition.
  ExportMiniAppUserDataResponse, // Export mini app user data type definition.
  ExportMiniAppUserDataResponses, // Export mini app user data type definition.
  FavoriteFramesResponse, // Favorite frames type definition.
  FeedItemsResponse, // Feed items type definition.
  FidParam, // Fid type definition.
  FollowChannelData, // Follow channel type definition.
  FollowChannelError, // Follow channel type definition.
  FollowChannelErrors, // Follow channel type definition.
  FollowChannelResponse, // Follow channel type definition.
  FollowChannelResponses, // Follow channel type definition.
  Frame, // Frame type definition.
  FrameApp, // Frame app type definition.
  FrameAppsResponse, // Frame apps type definition.
  GenericBadRequestError, // Generic bad request type definition.
  GenericResponse, // Generic type definition.
  GetAccountVerificationsData, // Get account verifications type definition.
  GetAccountVerificationsError, // Get account verifications type definition.
  GetAccountVerificationsErrors, // Get account verifications type definition.
  GetAccountVerificationsResponse, // Get account verifications type definition.
  GetAccountVerificationsResponses, // Get account verifications type definition.
  GetAllChannelsData, // Get all channels type definition.
  GetAllChannelsError, // Get all channels type definition.
  GetAllChannelsErrors, // Get all channels type definition.
  GetAllChannelsResponse, // Get all channels type definition.
  GetAllChannelsResponses, // Get all channels type definition.
  GetApiKeysData, // Get api keys type definition.
  GetApiKeysError, // Get api keys type definition.
  GetApiKeysErrors, // Get api keys type definition.
  GetApiKeysResponse, // Get api keys type definition.
  GetApiKeysResponses, // Get api keys type definition.
  GetAppsByAuthorData, // Get apps by author type definition.
  GetAppsByAuthorError, // Get apps by author type definition.
  GetAppsByAuthorErrors, // Get apps by author type definition.
  GetAppsByAuthorResponse, // Get apps by author type definition.
  GetAppsByAuthorResponses, // Get apps by author type definition.
  GetAvailableInvitesData, // Get available invites type definition.
  GetAvailableInvitesError, // Get available invites type definition.
  GetAvailableInvitesErrors, // Get available invites type definition.
  GetAvailableInvitesResponse, // Get available invites type definition.
  GetAvailableInvitesResponses, // Get available invites type definition.
  GetBlockedUsersData, // Get blocked users type definition.
  GetBlockedUsersError, // Get blocked users type definition.
  GetBlockedUsersErrors, // Get blocked users type definition.
  GetBlockedUsersResponse, // Get blocked users type definition.
  GetBlockedUsersResponses, // Get blocked users type definition.
  GetBookmarkedCastsData, // Get bookmarked cast type definition.
  GetBookmarkedCastsError, // Get bookmarked cast type definition.
  GetBookmarkedCastsErrors, // Get bookmarked cast type definition.
  GetBookmarkedCastsResponse, // Get bookmarked cast type definition.
  GetBookmarkedCastsResponses, // Get bookmarked cast type definition.
  GetCastLikesData, // Get cast likes type definition.
  GetCastLikesError, // Get cast likes type definition.
  GetCastLikesErrors, // Get cast likes type definition.
  GetCastLikesResponse, // Get cast likes type definition.
  GetCastLikesResponses, // Get cast likes type definition.
  GetCastQuotesData, // Get cast quotes type definition.
  GetCastQuotesError, // Get cast quotes type definition.
  GetCastQuotesErrors, // Get cast quotes type definition.
  GetCastQuotesResponse, // Get cast quotes type definition.
  GetCastQuotesResponses, // Get cast quotes type definition.
  GetCastRecastersData, // Get cast recasters type definition.
  GetCastRecastersError, // Get cast recasters type definition.
  GetCastRecastersErrors, // Get cast recasters type definition.
  GetCastRecastersResponse, // Get cast recasters type definition.
  GetCastRecastersResponses, // Get cast recasters type definition.
  GetCastsByFidData, // Get casts by fid type definition.
  GetCastsByFidError, // Get casts by fid type definition.
  GetCastsByFidErrors, // Get casts by fid type definition.
  GetCastsByFidResponse, // Get casts by fid type definition.
  GetCastsByFidResponses, // Get casts by fid type definition.
  GetChannelBannedUsersData, // Get channel banned users type definition.
  GetChannelBannedUsersError, // Get channel banned users type definition.
  GetChannelBannedUsersErrors, // Get channel banned users type definition.
  GetChannelBannedUsersResponse, // Get channel banned users type definition.
  GetChannelBannedUsersResponses, // Get channel banned users type definition.
  GetChannelData, // Get channel type definition.
  GetChannelDetailsData, // Get channel details type definition.
  GetChannelDetailsError, // Get channel details type definition.
  GetChannelDetailsErrors, // Get channel details type definition.
  GetChannelDetailsResponse, // Get channel details type definition.
  GetChannelDetailsResponses, // Get channel details type definition.
  GetChannelError, // Get channel type definition.
  GetChannelErrors, // Get channel type definition.
  GetChannelFollowersData, // Get channel followers type definition.
  GetChannelFollowersError, // Get channel followers type definition.
  GetChannelFollowersErrors, // Get channel followers type definition.
  GetChannelFollowersResponse, // Get channel followers type definition.
  GetChannelFollowersResponses, // Get channel followers type definition.
  GetChannelFollowersYouKnowData, // Get channel followers you know type definition.
  GetChannelFollowersYouKnowError, // Get channel followers you know type definition.
  GetChannelFollowersYouKnowErrors, // Get channel followers you know type definition.
  GetChannelFollowersYouKnowResponse, // Get channel followers you know type definition.
  GetChannelFollowersYouKnowResponses, // Get channel followers you know type definition.
  GetChannelInvitesData, // Get channel invites type definition.
  GetChannelInvitesError, // Get channel invites type definition.
  GetChannelInvitesErrors, // Get channel invites type definition.
  GetChannelInvitesResponse, // Get channel invites type definition.
  GetChannelInvitesResponses, // Get channel invites type definition.
  GetChannelMembersData, // Get channel members type definition.
  GetChannelMembersError, // Get channel members type definition.
  GetChannelMembersErrors, // Get channel members type definition.
  GetChannelMembersResponse, // Get channel members type definition.
  GetChannelMembersResponses, // Get channel members type definition.
  GetChannelModeratedCastsData, // Get channel moderated casts type definition.
  GetChannelModeratedCastsError, // Get channel moderated casts type definition.
  GetChannelModeratedCastsErrors, // Get channel moderated casts type definition.
  GetChannelModeratedCastsResponse, // Get channel moderated casts type definition.
  GetChannelModeratedCastsResponses, // Get channel moderated casts type definition.
  GetChannelResponse, // Get channel type definition.
  GetChannelResponses, // Get channel type definition.
  GetChannelRestrictedUsersData, // Get channel-restricted users type definition.
  GetChannelRestrictedUsersError, // Get channel-restricted users type definition.
  GetChannelRestrictedUsersErrors, // Get channel-restricted users type definition.
  GetChannelRestrictedUsersResponse, // Get channel-restricted users type definition.
  GetChannelRestrictedUsersResponses, // Get channel-restricted users type definition.
  GetChannelStreaksForUserData, // Get channel streaks for user type definition.
  GetChannelStreaksForUserError, // Get channel streaks for user type definition.
  GetChannelStreaksForUserErrors, // Get channel streaks for user type definition.
  GetChannelStreaksForUserResponse, // Get channel streaks for user type definition.
  GetChannelStreaksForUserResponses, // Get channel streaks for user type definition.
  GetChannelUsersData, // Get channel users type definition.
  GetChannelUsersError, // Get channel users type definition.
  GetChannelUsersErrors, // Get channel users type definition.
  GetChannelUsersResponse, // Get channel users type definition.
  GetChannelUsersResponses, // Get channel users type definition.
  GetConnectedAccountsData, // Get connected accounts type definition.
  GetConnectedAccountsError, // Get connected accounts type definition.
  GetConnectedAccountsErrors, // Get connected accounts type definition.
  GetConnectedAccountsResponse, // Get connected accounts type definition.
  GetConnectedAccountsResponses, // Get connected accounts type definition.
  GetCreatorRewardWinnersData, // Get creator reward winners type definition.
  GetCreatorRewardWinnersError, // Get creator reward winners type definition.
  GetCreatorRewardWinnersErrors, // Get creator reward winners type definition.
  GetCreatorRewardWinnersResponse, // Get creator reward winners type definition.
  GetCreatorRewardWinnersResponses, // Get creator reward winners type definition.
  GetCurrentUserData, // Get current user type definition.
  GetCurrentUserError, // Get current user type definition.
  GetCurrentUserErrors, // Get current user type definition.
  GetCurrentUserResponse, // Get current user type definition.
  GetCurrentUserResponses, // Get current user type definition.
  GetDeveloperRewardWinnersData, // Get developer reward winners type definition.
  GetDeveloperRewardWinnersError, // Get developer reward winners type definition.
  GetDeveloperRewardWinnersErrors, // Get developer reward winners type definition.
  GetDeveloperRewardWinnersResponse, // Get developer reward winners type definition.
  GetDeveloperRewardWinnersResponses, // Get developer reward winners type definition.
  GetDirectCastConversationData, // Get direct cast conversation type definition.
  GetDirectCastConversationError, // Get direct cast conversation type definition.
  GetDirectCastConversationErrors, // Get direct cast conversation type definition.
  GetDirectCastConversationMessagesData, // Get direct cast conversation messages type definition.
  GetDirectCastConversationMessagesError, // Get direct cast conversation messages type definition.
  GetDirectCastConversationMessagesErrors, // Get direct cast conversation messages type definition.
  GetDirectCastConversationMessagesResponse, // Get direct cast conversation messages type definition.
  GetDirectCastConversationMessagesResponses, // Get direct cast conversation messages type definition.
  GetDirectCastConversationRecentMessagesData, // Get direct cast conversation recent messages type definition.
  GetDirectCastConversationRecentMessagesError, // Get direct cast conversation recent messages type definition.
  GetDirectCastConversationRecentMessagesErrors, // Get direct cast conversation recent messages type definition.
  GetDirectCastConversationRecentMessagesResponse, // Get direct cast conversation recent messages type definition.
  GetDirectCastConversationRecentMessagesResponses, // Get direct cast conversation recent messages type definition.
  GetDirectCastConversationResponse, // Get direct cast conversation type definition.
  GetDirectCastConversationResponses, // Get direct cast conversation type definition.
  GetDirectCastInboxData, // Get direct cast inbox type definition.
  GetDirectCastInboxError, // Get direct cast inbox type definition.
  GetDirectCastInboxErrors, // Get direct cast inbox type definition.
  GetDirectCastInboxResponse, // Get direct cast inbox type definition.
  GetDirectCastInboxResponses, // Get direct cast inbox type definition.
  GetDiscoverableActionsData, // Get discoverable actions type definition.
  GetDiscoverableActionsError, // Get discoverable actions type definition.
  GetDiscoverableActionsErrors, // Get discoverable actions type definition.
  GetDiscoverableActionsResponse, // Get discoverable actions type definition.
  GetDiscoverableActionsResponses, // Get discoverable actions type definition.
  GetDiscoverableComposerActionsData, // Get discoverable composer actions type definition.
  GetDiscoverableComposerActionsError, // Get discoverable composer actions type definition.
  GetDiscoverableComposerActionsErrors, // Get discoverable composer actions type definition.
  GetDiscoverableComposerActionsResponse, // Get discoverable composer actions type definition.
  GetDiscoverableComposerActionsResponses, // Get discoverable composer actions type definition.
  GetDomainManifestData, // Get domain manifest type definition.
  GetDomainManifestError, // Get domain manifest type definition.
  GetDomainManifestErrors, // Get domain manifest type definition.
  GetDomainManifestResponse, // Get domain manifest type definition.
  GetDomainManifestResponses, // Get domain manifest type definition.
  GetDraftCastsData, // Get draft casts type definition.
  GetDraftCastsError, // Get draft casts type definition.
  GetDraftCastsErrors, // Get draft casts type definition.
  GetDraftCastsResponse, // Get draft casts type definition.
  GetDraftCastsResponses, // Get draft casts type definition.
  GetFarcasterJsonData, // Get farcaster json type definition.
  GetFarcasterJsonError, // Get farcaster json type definition.
  GetFarcasterJsonErrors, // Get farcaster json type definition.
  GetFarcasterJsonResponse, // Get farcaster json type definition.
  GetFarcasterJsonResponses, // Get farcaster json type definition.
  GetFeedItemsData, // Get feed items type definition.
  GetFeedItemsError, // Get feed items type definition.
  GetFeedItemsErrors, // Get feed items type definition.
  GetFeedItemsResponse, // Get feed items type definition.
  GetFeedItemsResponses, // Get feed items type definition.
  GetFollowersData, // Get follower type definition.
  GetFollowersError, // Get follower type definition.
  GetFollowersErrors, // Get follower type definition.
  GetFollowersResponse, // Get follower type definition.
  GetFollowersResponses, // Get follower type definition.
  GetFollowingData, // Get following type definition.
  GetFollowingError, // Get following type definition.
  GetFollowingErrors, // Get following type definition.
  GetFollowingResponse, // Get following type definition.
  GetFollowingResponses, // Get following type definition.
  GetHighlightedChannelsData, // Get highlighted channels type definition.
  GetHighlightedChannelsError, // Get highlighted channels type definition.
  GetHighlightedChannelsErrors, // Get highlighted channels type definition.
  GetHighlightedChannelsResponse, // Get highlighted channels type definition.
  GetHighlightedChannelsResponses, // Get highlighted channels type definition.
  GetManagedAppsData, // Get managed apps type definition.
  GetManagedAppsError, // Get managed apps type definition.
  GetManagedAppsErrors, // Get managed apps type definition.
  GetManagedAppsResponse, // Get managed apps type definition.
  GetManagedAppsResponses, // Get managed apps type definition.
  GetMetaTagsData, // Get meta tags type definition.
  GetMetaTagsError, // Get meta tags type definition.
  GetMetaTagsErrors, // Get meta tags type definition.
  GetMetaTagsResponse, // Get meta tags type definition.
  GetMetaTagsResponses, // Get meta tags type definition.
  GetMiniAppAnalyticsRollupData, // Get mini app analytics rollup type definition.
  GetMiniAppAnalyticsRollupError, // Get mini app analytics rollup type definition.
  GetMiniAppAnalyticsRollupErrors, // Get mini app analytics rollup type definition.
  GetMiniAppAnalyticsRollupResponse, // Get mini app analytics rollup type definition.
  GetMiniAppAnalyticsRollupResponses, // Get mini app analytics rollup type definition.
  GetMutedKeywordsData, // Get muted keywords type definition.
  GetMutedKeywordsError, // Get muted keywords type definition.
  GetMutedKeywordsErrors, // Get muted keywords type definition.
  GetMutedKeywordsResponse, // Get muted keywords type definition.
  GetMutedKeywordsResponses, // Get muted keywords type definition.
  GetMutualFollowersData, // Get mutual followers type definition.
  GetMutualFollowersError, // Get mutual followers type definition.
  GetMutualFollowersErrors, // Get mutual followers type definition.
  GetMutualFollowersResponse, // Get mutual followers type definition.
  GetMutualFollowersResponses, // Get mutual followers type definition.
  GetNotificationsData, // Get notification type definition.
  GetNotificationsError, // Get notification type definition.
  GetNotificationsErrors, // Get notification type definition.
  GetNotificationsResponse, // Get notification type definition.
  GetNotificationsResponses, // Get notification type definition.
  GetOrCreateReferralCodeData, // Get or create a referral code type definition.
  GetOrCreateReferralCodeError, // Get or create a referral code type definition.
  GetOrCreateReferralCodeErrors, // Get or create a referral code type definition.
  GetOrCreateReferralCodeResponse, // Get or create a referral code type definition.
  GetOrCreateReferralCodeResponses, // Get or create a referral code type definition.
  GetOwnedDomainsData, // Get owned domains type definition.
  GetOwnedDomainsError, // Get owned domains type definition.
  GetOwnedDomainsErrors, // Get owned domains type definition.
  GetOwnedDomainsResponse, // Get owned domains type definition.
  GetOwnedDomainsResponses, // Get owned domains type definition.
  GetProfileCastsData, // Get profile casts type definition.
  GetProfileCastsError, // Get profile casts type definition.
  GetProfileCastsErrors, // Get profile casts type definition.
  GetProfileCastsResponse, // Get profile casts type definition.
  GetProfileCastsResponses, // Get profile casts type definition.
  GetRewardsLeaderboardData, // Get rewards leaderboard type definition.
  GetRewardsLeaderboardError, // Get rewards leaderboard type definition.
  GetRewardsLeaderboardErrors, // Get rewards leaderboard type definition.
  GetRewardsLeaderboardResponse, // Get rewards leaderboard type definition.
  GetRewardsLeaderboardResponses, // Get rewards leaderboard type definition.
  GetRewardsMetadataData, // Get rewards metadata type definition.
  GetRewardsMetadataError, // Get rewards metadata type definition.
  GetRewardsMetadataErrors, // Get rewards metadata type definition.
  GetRewardsMetadataResponse, // Get rewards metadata type definition.
  GetRewardsMetadataResponses, // Get rewards metadata type definition.
  GetSponsoredInvitesData, // Get sponsored invites type definition.
  GetSponsoredInvitesError, // Get sponsored invites type definition.
  GetSponsoredInvitesErrors, // Get sponsored invites type definition.
  GetSponsoredInvitesResponse, // Get sponsored invites type definition.
  GetSponsoredInvitesResponses, // Get sponsored invites type definition.
  GetStarterPackData, // Get starter pack type definition.
  GetStarterPackError, // Get starter pack type definition.
  GetStarterPackErrors, // Get starter pack type definition.
  GetStarterPackMembersData, // Get starter pack members type definition.
  GetStarterPackMembersError, // Get starter pack members type definition.
  GetStarterPackMembersErrors, // Get starter pack members type definition.
  GetStarterPackMembersResponse, // Get starter pack members type definition.
  GetStarterPackMembersResponses, // Get starter pack members type definition.
  GetStarterPackResponse, // Get starter pack type definition.
  GetStarterPackResponses, // Get starter pack type definition.
  GetStarterPackUsersData, // Get starter pack users type definition.
  GetStarterPackUsersError, // Get starter pack users type definition.
  GetStarterPackUsersErrors, // Get starter pack users type definition.
  GetStarterPackUsersResponse, // Get starter pack users type definition.
  GetStarterPackUsersResponses, // Get starter pack users type definition.
  GetSuggestedStarterPacksData, // Get suggested starter packs type definition.
  GetSuggestedStarterPacksError, // Get suggested starter packs type definition.
  GetSuggestedStarterPacksErrors, // Get suggested starter packs type definition.
  GetSuggestedStarterPacksResponse, // Get suggested starter packs type definition.
  GetSuggestedStarterPacksResponses, // Get suggested starter packs type definition.
  GetSuggestedUsersData, // Get suggested users type definition.
  GetSuggestedUsersError, // Get suggested users type definition.
  GetSuggestedUsersErrors, // Get suggested users type definition.
  GetSuggestedUsersResponse, // Get suggested users type definition.
  GetSuggestedUsersResponses, // Get suggested users type definition.
  GetTopFrameAppsData, // Get top frame apps type definition.
  GetTopFrameAppsError, // Get top frame apps type definition.
  GetTopFrameAppsErrors, // Get top frame apps type definition.
  GetTopFrameAppsResponse, // Get top frame apps type definition.
  GetTopFrameAppsResponses, // Get top frame apps type definition.
  GetTopMiniAppsData, // Get top mini apps type definition.
  GetTopMiniAppsError, // Get top mini apps type definition.
  GetTopMiniAppsErrors, // Get top mini apps type definition.
  GetTopMiniAppsResponse, // Get top mini apps type definition.
  GetTopMiniAppsResponses, // Get top mini apps type definition.
  GetTrendingTopicsData, // Get trending topics type definition.
  GetTrendingTopicsError, // Get trending topics type definition.
  GetTrendingTopicsErrors, // Get trending topics type definition.
  GetTrendingTopicsResponse, // Get trending topics type definition.
  GetTrendingTopicsResponses, // Get trending topics type definition.
  GetUnseenCountsData, // Get unseen counts type definition.
  GetUnseenCountsError, // Get unseen counts type definition.
  GetUnseenCountsErrors, // Get unseen counts type definition.
  GetUnseenCountsResponse, // Get unseen counts type definition.
  GetUnseenCountsResponses, // Get unseen counts type definition.
  GetUserAppContextData, // Get user app context type definition.
  GetUserAppContextError, // Get user app context type definition.
  GetUserAppContextErrors, // Get user app context type definition.
  GetUserAppContextResponse, // Get user app context type definition.
  GetUserAppContextResponses, // Get user app context type definition.
  GetUserByFidData, // Get user by fid type definition.
  GetUserByFidError, // Get user by fid type definition.
  GetUserByFidErrors, // Get user by fid type definition.
  GetUserByFidResponse, // Get user by fid type definition.
  GetUserByFidResponses, // Get user by fid type definition.
  GetUserByUsernameData, // Get user by username type definition.
  GetUserByUsernameError, // Get user by username type definition.
  GetUserByUsernameErrors, // Get user by username type definition.
  GetUserByUsernameResponse, // Get user by username type definition.
  GetUserByUsernameResponses, // Get user by username type definition.
  GetUserByVerificationAddressData, // Get user by verification address type definition.
  GetUserByVerificationAddressError, // Get user by verification address type definition.
  GetUserByVerificationAddressErrors, // Get user by verification address type definition.
  GetUserByVerificationAddressResponse, // Get user by verification address type definition.
  GetUserByVerificationAddressResponses, // Get user by verification address type definition.
  GetUserData, // Get user type definition.
  GetUserError, // Get user type definition.
  GetUserErrors, // Get user type definition.
  GetUserFavoriteFramesData, // Get user favorite frames type definition.
  GetUserFavoriteFramesError, // Get user favorite frames type definition.
  GetUserFavoriteFramesErrors, // Get user favorite frames type definition.
  GetUserFavoriteFramesResponse, // Get user favorite frames type definition.
  GetUserFavoriteFramesResponses, // Get user favorite frames type definition.
  GetUserFollowedChannelsData, // Get user followed channel type definition.
  GetUserFollowedChannelsError, // Get user followed channel type definition.
  GetUserFollowedChannelsErrors, // Get user followed channel type definition.
  GetUserFollowedChannelsResponse, // Get user followed channel type definition.
  GetUserFollowedChannelsResponses, // Get user followed channel type definition.
  GetUserFollowingChannelsData, // Get user-following channels type definition.
  GetUserFollowingChannelsError, // Get user-following channels type definition.
  GetUserFollowingChannelsErrors, // Get user-following channels type definition.
  GetUserFollowingChannelsResponse, // Get user-following channels type definition.
  GetUserFollowingChannelsResponses, // Get user-following channels type definition.
  GetUserLikedCastsData, // Get user liked cast type definition.
  GetUserLikedCastsError, // Get user liked cast type definition.
  GetUserLikedCastsErrors, // Get user liked cast type definition.
  GetUserLikedCastsResponse, // Get user liked cast type definition.
  GetUserLikedCastsResponses, // Get user liked cast type definition.
  GetUserOnboardingStateData, // Get user onboarding state type definition.
  GetUserOnboardingStateError, // Get user onboarding state type definition.
  GetUserOnboardingStateErrors, // Get user onboarding state type definition.
  GetUserOnboardingStateResponse, // Get user onboarding state type definition.
  GetUserOnboardingStateResponses, // Get user onboarding state type definition.
  GetUserPreferencesData, // Get user preferences type definition.
  GetUserPreferencesError, // Get user preferences type definition.
  GetUserPreferencesErrors, // Get user preferences type definition.
  GetUserPreferencesResponse, // Get user preferences type definition.
  GetUserPreferencesResponses, // Get user preferences type definition.
  GetUserPrimaryAddressData, // Get the user primary address type definition.
  GetUserPrimaryAddressError, // Get the user primary address type definition.
  GetUserPrimaryAddressErrors, // Get the user primary address type definition.
  GetUserPrimaryAddressesData, // Get user primary addresses type definition.
  GetUserPrimaryAddressesError, // Get user primary addresses type definition.
  GetUserPrimaryAddressesErrors, // Get user primary addresses type definition.
  GetUserPrimaryAddressesResponse, // Get user primary addresses type definition.
  GetUserPrimaryAddressesResponses, // Get user primary addresses type definition.
  GetUserPrimaryAddressResponse, // Get the user primary address type definition.
  GetUserPrimaryAddressResponses, // Get the user primary address type definition.
  GetUserResponse, // Get user type definition.
  GetUserResponses, // Get user type definition.
  GetUserRewardsScoresData, // Get user rewards scores type definition.
  GetUserRewardsScoresError, // Get user rewards scores type definition.
  GetUserRewardsScoresErrors, // Get user rewards scores type definition.
  GetUserRewardsScoresResponse, // Get user rewards scores type definition.
  GetUserRewardsScoresResponses, // Get user rewards scores type definition.
  GetUserStarterPacksData, // Get user starter packs type definition.
  GetUserStarterPacksError, // Get user starter packs type definition.
  GetUserStarterPacksErrors, // Get user starter packs type definition.
  GetUserStarterPacksResponse, // Get user starter packs type definition.
  GetUserStarterPacksResponses, // Get user starter packs type definition.
  GetUserThreadCastsData, // Get user thread casts type definition.
  GetUserThreadCastsError, // Get user thread casts type definition.
  GetUserThreadCastsErrors, // Get user thread casts type definition.
  GetUserThreadCastsResponse, // Get user thread casts type definition.
  GetUserThreadCastsResponses, // Get user thread casts type definition.
  GetVerificationsData, // Get verification type definition.
  GetVerificationsError, // Get verification type definition.
  GetVerificationsErrors, // Get verification type definition.
  GetVerificationsResponse, // Get verification type definition.
  GetVerificationsResponses, // Get verification type definition.
  GetXpClaimableSummaryData, // Get xp claimable summary type definition.
  GetXpClaimableSummaryError, // Get xp claimable summary type definition.
  GetXpClaimableSummaryErrors, // Get xp claimable summary type definition.
  GetXpClaimableSummaryResponse, // Get xp claimable summary type definition.
  GetXpClaimableSummaryResponses, // Get xp claimable summary type definition.
  GetXpRewardsData, // Get xp rewards type definition.
  GetXpRewardsError, // Get xp rewards type definition.
  GetXpRewardsErrors, // Get xp rewards type definition.
  GetXpRewardsResponse, // Get xp rewards type definition.
  GetXpRewardsResponses, // Get xp rewards type definition.
  HighlightedChannelsResponse, // Highlighted channels type definition.
  ImageEmbed, // Image embed type definition.
  InspectImageUrlData, // Inspect image url type definition.
  InspectImageUrlError, // Inspect image url type definition.
  InspectImageUrlErrors, // Inspect image url type definition.
  InspectImageUrlResponse, // Inspect image url type definition.
  InspectImageUrlResponses, // Inspect image url type definition.
  InspectMiniAppUrlData, // Inspect mini app url type definition.
  InspectMiniAppUrlError, // Inspect mini app url type definition.
  InspectMiniAppUrlErrors, // Inspect mini app url type definition.
  InspectMiniAppUrlResponse, // Inspect mini app url type definition.
  InspectMiniAppUrlResponses, // Inspect mini app url type definition.
  InvitesAvailableResponse, // Invites available type definition.
  InviteUserToChannelData, // Invite the user to channel type definition.
  InviteUserToChannelError, // Invite the user to channel type definition.
  InviteUserToChannelErrors, // Invite the user to channel type definition.
  InviteUserToChannelResponse, // Invite the user to channel type definition.
  InviteUserToChannelResponses, // Invite the user to channel type definition.
  LikeCastData, // Like cast type definition.
  LikeCastError, // Like cast type definition.
  LikeCastErrors, // Like cast type definition.
  LikeCastResponse, // Like cast type definition.
  LikeCastResponses, // Like cast type definition.
  LimitParam, // Limit type definition.
  Location, // Location type definition.
  MarkAllNotificationsReadData, // Mark all notifications read type definition.
  MarkAllNotificationsReadError, // Mark all notifications read type definition.
  MarkAllNotificationsReadErrors, // Mark all notifications read type definition.
  MarkAllNotificationsReadResponse, // Mark all notifications read type definition.
  MarkAllNotificationsReadResponses, // Mark all notifications read type definition.
  MiniApp, // Mini app type definition.
  ModerateCastData, // Moderate cast type definition.
  ModerateCastError, // Moderate cast type definition.
  ModerateCastErrors, // Moderate cast type definition.
  ModerateCastResponse, // Moderate cast type definition.
  ModerateCastResponses, // Moderate cast type definition.
  MutedKeyword, // Muted keyword type definition.
  MutedKeywordProperties, // Muted keyword properties type definition.
  MutedKeywordsResponse, // Muted keywords type definition.
  MuteKeywordData, // Mute keyword type definition.
  MuteKeywordError, // Mute keyword type definition.
  MuteKeywordErrors, // Mute keyword type definition.
  MuteKeywordResponse, // Mute keyword type definition.
  MuteKeywordResponses, // Mute keyword type definition.
  NotificationsResponse, // Notification type definition.
  OnboardingState, // Onboarding type definition.
  OnboardingStateResponse, // Onboarding state type definition.
  PaginatedResponse, // Paginated type definition.
  PaginationCursor, // Pagination cursor type definition.
  PinCastToChannelData, // Pin cast to channel type definition.
  PinCastToChannelError, // Pin cast to channel type definition.
  PinCastToChannelErrors, // Pin cast to channel type definition.
  PinCastToChannelResponse, // Pin cast to channel type definition.
  PinCastToChannelResponses, // Pin cast to channel type definition.
  PinDirectCastConversationData, // Pin direct cast conversation type definition.
  PinDirectCastConversationError, // Pin direct cast conversation type definition.
  PinDirectCastConversationErrors, // Pin direct cast conversation type definition.
  PinDirectCastConversationResponse, // Pin direct cast conversation type definition.
  PinDirectCastConversationResponses, // Pin direct cast conversation type definition.
  Profile, // Profile type definition.
  ProfilePicture, // Profile picture type definition.
  RankedMiniApp, // Ranked mini app type definition.
  RawChannel, // Raw channel type definition.
  RawChannelResponse, // Raw channel type definition.
  RecastCastData, // Recast cast type definition.
  RecastCastError, // Recast cast type definition.
  RecastCastErrors, // Recast cast type definition.
  RecastCastResponse, // Recast cast type definition.
  RecastCastResponses, // Recast cast type definition.
  Recaster, // Recaster type definition.
  RegisterStatsigEventsData, // Register statsig events type definition.
  RegisterStatsigEventsError, // Register statsig events type definition.
  RegisterStatsigEventsErrors, // Register statsig events type definition.
  RegisterStatsigEventsResponse, // Register statsig events type definition.
  RegisterStatsigEventsResponses, // Register statsig events type definition.
  RemoveChannelInviteData, // Remove channel invite type definition.
  RemoveChannelInviteError, // Remove channel invite type definition.
  RemoveChannelInviteErrors, // Remove channel invite type definition.
  RemoveChannelInviteResponse, // Remove channel invite type definition.
  RemoveChannelInviteResponses, // Remove channel invite type definition.
  RemoveDirectCastMessageReactionData, // Remove direct cast message reaction type definition.
  RemoveDirectCastMessageReactionError, // Remove direct cast message reaction type definition.
  RemoveDirectCastMessageReactionErrors, // Remove direct cast message reaction type definition.
  RemoveDirectCastMessageReactionResponse, // Remove direct cast message reaction type definition.
  RemoveDirectCastMessageReactionResponses, // Remove direct cast message reaction type definition.
  RevokeApiKeyData, // Revoke api key type definition.
  RevokeApiKeyError, // Revoke api key type definition.
  RevokeApiKeyErrors, // Revoke api key type definition.
  RevokeApiKeyResponse, // Revoke api key type definition.
  RevokeApiKeyResponses, // Revoke api key type definition.
  RewardsLeaderboardResponse, // Rewards leaderboard type definition.
  RewardsMetadataResponse, // Rewards metadata type definition.
  RewardsScoresResponse, // Rewards scores type definition.
  SearchChannelsData, // Search channels type definition.
  SearchChannelsError, // Search channels type definition.
  SearchChannelsErrors, // Search channels type definition.
  SearchChannelsResponse, // Search channels type definition.
  SearchChannelsResponse2, // Search channels response2 type definition.
  SearchChannelsResponses, // Search channels type definition.
  SendDirectCastData, // Send direct cast type definition.
  SendDirectCastError, // Send direct cast type definition.
  SendDirectCastErrors, // Send direct cast type definition.
  SendDirectCastMessageData, // Send direct cast message type definition.
  SendDirectCastMessageError, // Send direct cast message type definition.
  SendDirectCastMessageErrors, // Send direct cast message type definition.
  SendDirectCastMessageResponse, // Send direct cast message type definition.
  SendDirectCastMessageResponses, // Send direct cast message type definition.
  SendDirectCastResponse, // Send direct cast type definition.
  SendDirectCastResponses, // Send direct cast type definition.
  SetDirectCastConversationMessageTtlData, // Set direct cast conversation message ttl type definition.
  SetDirectCastConversationMessageTtlError, // Set direct cast conversation message ttl type definition.
  SetDirectCastConversationMessageTtlErrors, // Set direct cast conversation message ttl type definition.
  SetDirectCastConversationMessageTtlResponse, // Set direct cast conversation message ttl type definition.
  SetDirectCastConversationMessageTtlResponses, // Set direct cast conversation message ttl type definition.
  SetLastCheckedTimestampData, // Set the last checked timestamp type definition.
  SetLastCheckedTimestampError, // Set the last checked timestamp type definition.
  SetLastCheckedTimestampErrors, // Set the last checked timestamp type definition.
  SetLastCheckedTimestampResponse, // Set the last checked timestamp type definition.
  SetLastCheckedTimestampResponses, // Set the last checked timestamp type definition.
  SponsoredInvitesResponse, // Sponsored invites type definition.
  StarterPack, // Starter pack type definition.
  StarterPackResponse, // Starter pack type definition.
  StarterPacksResponse, // Starter packs type definition.
  StarterPackUpdateRequest, // Starter pack updates type definition.
  StarterPackUsersResponse, // Starter pack users type definition.
  SubmitAnalyticsEventsData, // Submit analytics events type definition.
  SubmitAnalyticsEventsError, // Submit analytics events type definition.
  SubmitAnalyticsEventsErrors, // Submit analytics events type definition.
  SubmitAnalyticsEventsResponse, // Submit analytics events type definition.
  SubmitAnalyticsEventsResponses, // Submit analytics events type definition.
  SuccessResponse, // Success type definition.
  SuggestedUsersResponse, // Suggested users type definition.
  TopMiniAppsResponse, // Top mini apps type definition.
  UnbanUserFromChannelData, // Unban user from channel type definition.
  UnbanUserFromChannelError, // Unban user from channel type definition.
  UnbanUserFromChannelErrors, // Unban user from channel type definition.
  UnbanUserFromChannelResponse, // Unban user from channel type definition.
  UnbanUserFromChannelResponses, // Unban user from channel type definition.
  UnblockUserData, // Unblock user type definition.
  UnblockUserError, // Unblock user type definition.
  UnblockUserErrors, // Unblock user type definition.
  UnblockUserResponse, // Unblock user type definition.
  UnblockUserResponses, // Unblock user type definition.
  UndoRecastData, // Undo recast type definition.
  UndoRecastError, // Undo recast type definition.
  UndoRecastErrors, // Undo recast type definition.
  UndoRecastResponse, // Undo recast type definition.
  UndoRecastResponses, // Undo recast type definition.
  UnfollowChannelData, // Unfollow channel type definition.
  UnfollowChannelError, // Unfollow channel type definition.
  UnfollowChannelErrors, // Unfollow channel type definition.
  UnfollowChannelResponse, // Unfollow channel type definition.
  UnfollowChannelResponses, // Unfollow channel type definition.
  UnlikeCastData, // Unlike cast type definition.
  UnlikeCastError, // Unlike cast type definition.
  UnlikeCastErrors, // Unlike cast type definition.
  UnlikeCastResponse, // Unlike cast type definition.
  UnlikeCastResponses, // Unlike cast type definition.
  UnmuteKeywordData, // Unmute keyword type definition.
  UnmuteKeywordError, // Unmute keyword type definition.
  UnmuteKeywordErrors, // Unmute keyword type definition.
  UnmuteKeywordResponse, // Unmute keyword type definition.
  UnmuteKeywordResponses, // Unmute keyword type definition.
  UnpinCastFromChannelData, // Unpin cast from the channel type definition.
  UnpinCastFromChannelError, // Unpin cast from the channel type definition.
  UnpinCastFromChannelErrors, // Unpin cast from the channel type definition.
  UnpinCastFromChannelResponse, // Unpin cast from the channel type definition.
  UnpinCastFromChannelResponses, // Unpin cast from the channel type definition.
  UnpinDirectCastConversationData, // Unpin direct cast conversation type definition.
  UnpinDirectCastConversationError, // Unpin direct cast conversation type definition.
  UnpinDirectCastConversationErrors, // Unpin direct cast conversation type definition.
  UnpinDirectCastConversationResponse, // Unpin direct cast conversation type definition.
  UnpinDirectCastConversationResponses, // Unpin direct cast conversation type definition.
  UnseenCountsResponse, // Unseen counts type definition.
  UpdateDirectCastConversationNotificationsData, // Update direct cast conversation notifications type definition.
  UpdateDirectCastConversationNotificationsError, // Update direct cast conversation notifications type definition.
  UpdateDirectCastConversationNotificationsErrors, // Update direct cast conversation notifications type definition.
  UpdateDirectCastConversationNotificationsResponse, // Update direct cast conversation notifications type definition.
  UpdateDirectCastConversationNotificationsResponses, // Update direct cast conversation notifications type definition.
  UpdateStarterPackData, // Update starter pack type definition.
  UpdateStarterPackError, // Update starter pack type definition.
  UpdateStarterPackErrors, // Update starter pack type definition.
  UpdateStarterPackResponse, // Update starter pack type definition.
  UpdateStarterPackResponses, // Update starter pack type definition.
  UrlEmbed, // Url embed type definition.
  User, // User type definition.
  UserAppContextResponse, // User app context type definition.
  UserByFidResponse, // User by fid type definition.
  UserExtras, // User extras type definition.
  UserPreferencesResponse, // User preferences type definition.
  UserResponse, // User type definition.
  UserResponse2, // User response user type definition.
  UsersResponse, // Users' type definition.
  UsersWithCountResponse, // Users with count type definition.
  UserThreadCastsResponse, // User thread casts type definition.
  UserWithExtras, // User with extra type definition.
  ValidationError, // Validation type definition.
  VerifiedAddress, // Verified address type definition.
  VideoEmbed, // Video embed type definition.
  ViewerContext, // Viewer type definition.
  ViewerContext2, // Mini app viewer type definition.
  Winner, // Winner type definition.
} from "./client/types.gen";
export {
  zAcceptChannelInviteBody, // Accept channel invite data Zod schema.
  zAction, // Action Zod schema.
  zAddDirectCastMessageReactionBody, // Add direct cast message reaction data Zod schema.
  zApiKey, // Api key Zod schema.
  zAppsByAuthorResponse, // Apps by author response Zod schema.
  zAttachEmbedsBody, // Attach embeds data Zod schema.
  zAttachEmbedsResponse, // Attach embeds response Zod schema.
  zBadRequestError, // Bad request error Zod schema.
  zBanUserFromChannelBody, // Ban user from channel data Zod schema.
  zBio, // Bio Zod schema.
  zBlockUserBody, // Block user data Zod schema.
  zBookmarkedCast, // Bookmarked cast Zod schema.
  zBookmarkedCastsResponse, // Bookmarked casts response Zod schema.
  zCast, // Cast Zod schema.
  zCastAction, // Cast action Zod schema.
  zCastCreatedResponse, // Cast created response Zod schema.
  zCastHashResponse, // Cast hash response Zod schema.
  zCastQuote, // Cast quote Zod schema.
  zCastQuotesResponse, // Cast quotes response Zod schema.
  zCastRecastersResponse, // Cast recasters response Zod schema.
  zCategorizeDirectCastConversationBody, // Categorize direct cast conversation data Zod schema.
  zChannel, // Channel Zod schema.
  zChannelFollower, // Channel follower Zod schema.
  zChannelFollowersResponse, // Channel followers response Zod schema.
  zChannelFollowersYouKnowResponse, // Channel followers you know the response Zod schema.
  zChannelFollowStatus, // Channel follow status Zod schema.
  zChannelFollowStatusResponse, // Channel follow status response Zod schema.
  zChannelListResponse, // Channel list response Zod schema.
  zChannelResponse, // Channel response Zod schema.
  zChannelStreaksResponse, // Channel streaks response Zod schema.
  zChannelUsersResponse, // Channel users response Zod schema.
  zCheckUserChannelFollowStatusQuery, // Check user channel follow status data Zod schema.
  zCreateApiKeyBody, // Create api key data Zod schema.
  zCreateCastBody, // Create cast data Zod schema.
  zCreateDraftCastsBody, // Create draft casts data Zod schema.
  zCursorParam, // Cursor param Zod schema.
  zDeleteCastBody, // Delete cast data Zod schema.
  zDeleteDraftCastBody, // Delete draft cast data Zod schema.
  zDirectCastConversation, // Direct cast conversation Zod schema.
  zDirectCastConversationCategorizationRequest, // Direct cast conversation categorization request Zod schema.
  zDirectCastConversationCategorizationResponse, // Direct cast conversation categorization response Zod schema.
  zDirectCastConversationMessagesResponse, // Direct cast conversation messages response Zod schema.
  zDirectCastConversationMessageTtlRequest, // Direct cast conversation message ttl request Zod schema.
  zDirectCastConversationMessageTtlResponse, // Direct cast conversation message ttl response Zod schema.
  zDirectCastConversationNotificationsRequest, // Direct cast conversation notifications request Zod schema.
  zDirectCastConversationNotificationsResponse, // Direct cast conversation notifications response Zod schema.
  zDirectCastConversationResponse, // Direct cast conversation response Zod schema.
  zDirectCastConversationViewerContext, // Direct cast conversation viewer context Zod schema.
  zDirectCastInboxResponse, // Direct cast inbox response Zod schema.
  zDirectCastInboxResult, // Direct cast inbox result Zod schema.
  zDirectCastManuallyMarkUnreadBody, // Direct cast manually mark unread data Zod schema.
  zDirectCastManuallyMarkUnreadRequest, // Direct cast manually mark unread request Zod schema.
  zDirectCastMessage, // Direct cast message Zod schema.
  zDirectCastMessageMention, // Direct cast message mention Zod schema.
  zDirectCastMessageMetadata, // Direct cast message metadata Zod schema.
  zDirectCastMessageReaction, // Direct cast message reaction Zod schema.
  zDirectCastMessageReactionRequest, // Direct cast message reaction request Zod schema.
  zDirectCastMessageReactionResponse, // Direct cast message reaction response Zod schema.
  zDirectCastMessageViewerContext, // Direct cast message viewer context Zod schema.
  zDirectCastPinConversationRequest, // Direct cast pin conversation request Zod schema.
  zDirectCastSendRequest, // Direct cast send request Zod schema.
  zDirectCastSendResponse, // Direct cast send response Zod schema.
  zDiscoverChannelsQuery, // Discover channels data Zod schema.
  zDiscoverChannelsResponse, // Discover channels response Zod schema.
  zDraft, // Draft Zod schema.
  zDraftCast, // Draft cast Zod schema.
  zDraftCreatedResponse, // Draft created response Zod schema.
  zDraftsResponse, // Drafts response Zod schema.
  zErrorResponse, // Error response Zod schema.
  zExportMiniAppUserDataQuery, // Export mini app user data data Zod schema.
  zFavoriteFramesResponse, // Favorite frames response Zod schema.
  zFeedItemsResponse, // Feed items response Zod schema.
  zFidParam, // Fid param Zod schema.
  zFollowChannelBody, // Follow channel data Zod schema.
  zFrame, // Frame Zod schema.
  zFrameApp, // Frame app Zod schema.
  zFrameAppsResponse, // Frame apps response Zod schema.
  zGenericBadRequestError, // Generic bad request error Zod schema.
  zGenericResponse, // Generic response Zod schema.
  zGetAccountVerificationsQuery, // Get account verifications data Zod schema.
  zGetAppsByAuthorQuery, // Get apps by author data Zod schema.
  zGetBookmarkedCastsQuery, // Get bookmarked casts data Zod schema.
  zGetCastLikesQuery, // Get cast likes data Zod schema.
  zGetCastQuotesQuery, // Get cast quotes data Zod schema.
  zGetCastRecastersQuery, // Get cast recasters data Zod schema.
  zGetCastsByFidQuery, // Get casts by fid data Zod schema.
  zGetChannelBannedUsersQuery, // Get channel banned users data Zod schema.
  zGetChannelDetailsQuery, // Get channel details data Zod schema.
  zGetChannelFollowersQuery, // Get channel followers data Zod schema.
  zGetChannelFollowersYouKnowQuery, // Get channel followers you know data Zod schema.
  zGetChannelInvitesQuery, // Get channel invites data Zod schema.
  zGetChannelMembersQuery, // Get channel members data Zod schema.
  zGetChannelModeratedCastsQuery, // Get channel moderated casts data Zod schema.
  zGetChannelQuery, // Get channel data Zod schema.
  zGetChannelRestrictedUsersQuery, // Get channel restricted users data Zod schema.
  zGetChannelStreaksForUserQuery, // Get channel streaks for user data Zod schema.
  zGetChannelUsersQuery, // Get channel users data Zod schema.
  zGetConnectedAccountsQuery, // Get connected accounts data Zod schema.
  zGetCreatorRewardWinnersQuery, // Get creator reward winners data Zod schema.
  zGetDeveloperRewardWinnersQuery, // Get developer reward winners data Zod schema.
  zGetDirectCastConversationMessagesQuery, // Get direct cast conversation messages data Zod schema.
  zGetDirectCastConversationQuery, // Get direct cast conversation data Zod schema.
  zGetDirectCastConversationRecentMessagesQuery, // Get direct cast conversation recent messages data Zod schema.
  zGetDirectCastInboxQuery, // Get direct cast inbox data Zod schema.
  zGetDiscoverableActionsQuery, // Get discoverable actions data Zod schema.
  zGetDiscoverableComposerActionsQuery, // Get discoverable composer actions data Zod schema.
  zGetDomainManifestQuery, // Get domain manifest data Zod schema.
  zGetDraftCastsQuery, // Get draft casts data Zod schema.
  zGetFarcasterJsonQuery, // Get farcaster json data Zod schema.
  zGetFeedItemsBody, // Get feed items data Zod schema.
  zGetFollowersQuery, // Get followers data Zod schema.
  zGetFollowingQuery, // Get following data Zod schema.
  zGetManagedAppsQuery, // Get managed apps data Zod schema.
  zGetMetaTagsQuery, // Get meta tags data Zod schema.
  zGetMiniAppAnalyticsRollupBody, // Get mini app analytics rollup data Zod schema.
  zGetMutualFollowersQuery, // Get mutual followers data Zod schema.
  zGetNotificationsQuery, // Get notifications data Zod schema.
  zGetOrCreateReferralCodeBody, // Get or create referral code data Zod schema.
  zGetProfileCastsQuery, // Get profile casts data Zod schema.
  zGetRewardsLeaderboardQuery, // Get rewards leaderboard data Zod schema.
  zGetRewardsMetadataQuery, // Get rewards metadata data Zod schema.
  zGetStarterPackMembersQuery, // Get starter pack members data Zod schema.
  zGetStarterPackQuery, // Get starter pack data Zod schema.
  zGetStarterPackUsersQuery, // Get starter pack users data Zod schema.
  zGetSuggestedStarterPacksQuery, // Get suggested starter packs data Zod schema.
  zGetSuggestedUsersQuery, // Get suggested users data Zod schema.
  zGetTopFrameAppsQuery, // Get top frame apps data Zod schema.
  zGetTopMiniAppsQuery, // Get top mini apps data Zod schema.
  zGetUserByFidQuery, // Get user by fid data Zod schema.
  zGetUserByUsernameQuery, // Get user by username data Zod schema.
  zGetUserByVerificationAddressQuery, // Get user by verification address data Zod schema.
  zGetUserFavoriteFramesQuery, // Get user favorite frames data Zod schema.
  zGetUserFollowedChannelsQuery, // Get user followed channels data Zod schema.
  zGetUserFollowingChannelsQuery, // Get user-following channels data Zod schema.
  zGetUserLikedCastsQuery, // Get user-liked casts data Zod schema.
  zGetUserPrimaryAddressesQuery, // Get user primary addresses data Zod schema.
  zGetUserPrimaryAddressQuery, // Get user primary address data Zod schema.
  zGetUserQuery, // Get user data Zod schema.
  zGetUserRewardsScoresQuery, // Get user rewards scores data Zod schema.
  zGetUserStarterPacksQuery, // Get user starter packs data Zod schema.
  zGetUserThreadCastsQuery, // Get user thread casts data Zod schema.
  zGetVerificationsQuery, // Get verifications data Zod schema.
  zGetXpClaimableSummaryBody, // Get xp claimable summary data Zod schema.
  zGetXpRewardsQuery, // Get xp rewards data Zod schema.
  zHighlightedChannelsResponse, // Highlighted channels response Zod schema.
  zImageEmbed, // Image embed Zod schema.
  zInspectImageUrlQuery, // Inspect image url data Zod schema.
  zInspectMiniAppUrlQuery, // Inspect mini app url data Zod schema.
  zInvitesAvailableResponse, // Invites available response Zod schema.
  zInviteUserToChannelBody, // Invite user to channel data Zod schema.
  zLikeCastBody, // Like cast data Zod schema.
  zLimitParam, // Limit param Zod schema.
  zLocation, // Location Zod schema.
  zMarkAllNotificationsReadBody, // Mark all notifications read data Zod schema.
  zMiniApp, // Mini app Zod schema.
  zModerateCastBody, // Moderate cast data Zod schema.
  zMutedKeyword, // Muted keyword Zod schema.
  zMutedKeywordProperties, // Muted keyword properties Zod schema.
  zMutedKeywordsResponse, // Muted keywords response Zod schema.
  zMuteKeywordBody, // Mute keyword data Zod schema.
  zNotificationsResponse, // Notifications response Zod schema.
  zOnboardingState, // Onboarding state Zod schema.
  zOnboardingStateResponse, // Onboarding state response Zod schema.
  zPaginatedResponse, // Paginated response Zod schema.
  zPaginationCursor, // Pagination cursor Zod schema.
  zPinCastToChannelBody, // Pin cast to channel data Zod schema.
  zPinDirectCastConversationBody, // Pin direct cast conversation data Zod schema.
  zProfile, // Profile Zod schema.
  zProfilePicture, // Profile picture Zod schema.
  zRankedMiniApp, // Ranked mini app Zod schema.
  zRawChannel, // Raw channel Zod schema.
  zRawChannelResponse, // Raw channel response Zod schema.
  zRecastCastBody, // Recast cast data Zod schema.
  zRecaster, // Recaster Zod schema.
  zRegisterStatsigEventsBody, // Register statsig events data Zod schema.
  zRemoveChannelInviteBody, // Remove channel invite data Zod schema.
  zRemoveDirectCastMessageReactionBody, // Remove direct cast message reaction data Zod schema.
  zRevokeApiKeyBody, // Revoke api key data Zod schema.
  zRewardsLeaderboardResponse, // Rewards leaderboard response Zod schema.
  zRewardsMetadataResponse, // Rewards metadata response Zod schema.
  zRewardsScoresResponse, // Rewards scores response Zod schema.
  zSearchChannelsQuery, // Search channels data Zod schema.
  zSearchChannelsResponse, // Search channels response Zod schema.
  zSendDirectCastBody, // Send direct cast data Zod schema.
  zSendDirectCastMessageBody, // Send direct cast message data Zod schema.
  zSetDirectCastConversationMessageTtlBody, // Set direct cast conversation message ttl data Zod schema.
  zSetLastCheckedTimestampBody, // Set last checked timestamp data Zod schema.
  zSponsoredInvitesResponse, // Sponsored invites response Zod schema.
  zStarterPack, // Starter pack Zod schema.
  zStarterPackResponse, // Starter pack response Zod schema.
  zStarterPacksResponse, // Starter packs response Zod schema.
  zStarterPackUpdateRequest, // Starter pack update request Zod schema.
  zStarterPackUsersResponse, // Starter pack users response Zod schema.
  zSubmitAnalyticsEventsBody, // Submit analytics events data Zod schema.
  zSuccessResponse, // Success response Zod schema.
  zSuggestedUsersResponse, // Suggested users response Zod schema.
  zTopMiniAppsResponse, // Top mini apps response Zod schema.
  zUnbanUserFromChannelBody, // Unban user from channel data Zod schema.
  zUnblockUserBody, // Unblock user data Zod schema.
  zUndoRecastBody, // Undo recast data Zod schema.
  zUnfollowChannelBody, // Unfollow channel data Zod schema.
  zUnlikeCastBody, // Unlike cast data Zod schema.
  zUnmuteKeywordBody, // Unmute keyword data Zod schema.
  zUnpinCastFromChannelBody, // Unpin cast from channel data Zod schema.
  zUnpinDirectCastConversationBody, // Unpin direct cast conversation data Zod schema.
  zUnseenCountsResponse, // Unseen counts response Zod schema.
  zUpdateDirectCastConversationNotificationsBody, // Update direct cast conversation notifications data Zod schema.
  zUpdateStarterPackBody, // Update starter pack data Zod schema.
  zUrlEmbed, // Url embed Zod schema.
  zUser, // User Zod schema.
  zUserAppContextResponse, // User app context response Zod schema.
  zUserByFidResponse, // User by fid response Zod schema.
  zUserExtras, // User extras Zod schema.
  zUserPreferencesResponse, // User preferences response Zod schema.
  zUserResponse, // User response Zod schema.
  zUserResponse2, // User response user response Zod schema.
  zUsersResponse, // Users response Zod schema.
  zUsersWithCountResponse, // Users with count response Zod schema.
  zUserThreadCastsResponse, // User thread casts response Zod schema.
  zUserWithExtras, // User with extras Zod schema.
  zValidationError, // Validation error Zod schema.
  zVerifiedAddress, // Verified address Zod schema.
  zVideoEmbed, // Video embed Zod schema.
  zViewerContext, // Viewer context Zod schema.
  zViewerContext2, // Mini app viewer context Zod schema.
  zWinner, // Winner Zod schema.
} from "./client/zod.gen";
