# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0-alpha.36] - 2025-07-23

### 🚀 Features

- *(package)* Add `types` export in package configuration

## [2.0.0-alpha.35] - 2025-07-22

### 🚀 Features

- *(openapi)* Add schemas for cast and channel features

### 🚜 Refactor

- *(openapi)* Simplify metadata schema requirements
- *(client)* Update `metadata` requirements in schema

## [2.0.0-alpha.34] - 2025-07-22

### 🚀 Features

- *(openapi)* Add endpoint for marking direct cast unread
- *(openapi)* Add endpoint for marking direct cast unread
- *(client)* Add `directCastManuallyMarkUnread` endpoint
- *(openapi)* Add `pinDirectCastConversation` endpoint
- *(openapi)* Add `pinDirectCastConversation` schema
- *(client)* Add `pinDirectCastConversation` functionality
- *(openapi)* Add schemas and endpoint for `topMiniApps`
- *(openapi)* Add `getTopMiniApps` endpoint and schemas
- *(openapi)* Add schemas and endpoint for `RankedMiniApp`
- *(openapi)* Add `categorizeDirectCastConversation` endpoint
- *(openapi)* Add `categorizeDirectCastConversation` endpoint
- *(openapi)* Add `categorizeDirectCastConversation` schemas
- *(openapi)* Add `updateDirectCastConversationNotifications` endpoint
- *(openapi)* Add `updateDirectCastConversationNotifications` schemas
- *(client)* Add `updateDirectCastConversationNotifications`
- *(openapi)* Update `getUserByUsername` schema and response
- *(openapi)* Improve `getUserByUsername` API documentation
- *(openapi)* Enhance user schemas with additional fields
- *(openapi)* Add `setDirectCastConversationMessageTtl` endpoint
- *(openapi)* Add `setDirectCastConversationMessageTtl` endpoint
- *(openapi)* Add `setDirectCastConversationMessageTtl` schemas
- *(openapi)* Add `unpinDirectCastConversation` endpoint
- *(openapi)* Add `unpinDirectCastConversation` endpoint
- *(client)* Add `unpinDirectCastConversation`
- *(openapi)* Add `directCastMessageReaction` endpoint
- *(openapi)* Add `directCastMessageReaction` endpoint
- *(client)* Add SDK methods for message reactions

## [2.0.0-alpha.33] - 2025-07-22

### 🚀 Features

- *(openapi)* Add `sendDirectCastMessage` endpoint
- *(openapi)* Add `sendDirectCastMessage` request/response schemas
- *(client)* Add `sendDirectCastMessage` support
- *(openapi)* Add descriptive tags for operations
- *(openapi)* Refactor schemas with reusable components
- *(openapi)* Add new tags, refactor, and enhance schemas
- *(openapi)* Refactor schemas with reusable components

## [2.0.0-alpha.32] - 2025-07-21

### 🚀 Features

- *(openapi)* Add `direct-cast-conversation-messages` endpoint
- *(openapi)* Update conversation ID desc and add responses
- *(client)* Add support for direct cast messages
- *(openapi)* Add recent-direct-cast-messages endpoint
- *(openapi)* Add recent-direct-cast-messages enhancements
- *(openapi)* Enhance schemas and add recent messages support

### ◀️ Revert

- *(openapi)* Add pagination parameters to conversations
- *(openapi)* Enhance pagination and response schema
- *(client)* Enhance direct cast conversation responses

## [2.0.0-alpha.31] - 2025-07-21

### 🚀 Features

- *(openapi)* Add pagination parameters to conversations
- *(openapi)* Enhance pagination and response schema
- *(client)* Enhance direct cast conversation responses

### 📚 Documentation

- *(openapi)* Refine conversation ID description

## [2.0.0-alpha.30] - 2025-07-21

### ⚙️ Miscellaneous Tasks

- *(openapi)* Update config to use biome settings
- *(client)* Apply biome formatting standards

## [2.0.0-alpha.29] - 2025-07-21

### 🚀 Features

- *(client)* Implement `client-fetch` replacement
- *(openapi)* Integrate `defaultPlugins` into config

### ⚙️ Miscellaneous Tasks

- *(openapi)* Remove unused `@hey-api/client-fetch` plugin
- *(build)* Remove `noExternal` configuration

## [2.0.0-alpha.28] - 2025-07-21

### 🚀 Features

- *(openapi)* Extend `Conversation` and `DirectCastMessage` schemas

### 🚜 Refactor

- *(openapi)* Rename `Conversation` to `DirectCastConversation`

## [2.0.0-alpha.27] - 2025-07-21

### 🚀 Features

- *(openapi)* Extract `Conversation` schema into a dedicated file
- *(openapi)* Refine `DirectCastInboxResponse` and extract schemas
- *(openapi)* Modularize `DirectCastInboxResponse` components

## [2.0.0-alpha.26] - 2025-07-21

### 🚜 Refactor

- *(client)* Adjust response transformer placement

### ⚙️ Miscellaneous Tasks

- *(gitignore)* Add `/docs/` to ignored files
- *(scripts)* Add `docs` script for typedoc generation
- *(config)* Add `typedoc.json` for documentation settings

## [2.0.0-alpha.25] - 2025-06-12

### 🐛 Bug Fixes

- *(openapi)* Update main API server URL

### 🚜 Refactor

- *(client)* Standardize error and response types

## [2.0.0-alpha.24] - 2025-04-25

### 💼 Other

- *(tsup)* Update entry configuration to include all ts files

### 🧪 Testing

- *(index)* Add tests for `version`

## [2.0.0-alpha.23] - 2025-04-19

### 🚀 Features

- *(index)* Export `version` from package.json

### 🚜 Refactor

- *(client)* Convert types to interfaces

### 📚 Documentation

- *(sdk)* Add `@param options` annotations to methods

### ⚙️ Miscellaneous Tasks

- *(tsconfig)* Enable `resolveJsonModule` option

## [2.0.0-alpha.22] - 2025-04-19

### 🚀 Features

- *(openapi)* Add miniapps analytics rollup endpoint
- *(openapi)* Add `inspectMiniAppUrl` endpoint
- *(openapi)* Add alt text fields for Open Graph & Twitter
- *(openapi)* Add `frameConfig` and `updatedAt` fields
- *(openapi)* Add `inspectImageUrl` API endpoint
- *(openapi)* Add endpoint to fetch owned domains
- *(openapi)* Add `exportMiniAppUserData` endpoint

### 🚜 Refactor

- *(client)* Update naming for `Miniapp` to `MiniApp`
- *(client)* Remove redundant `@param options` comments

### ⚙️ Miscellaneous Tasks

- *(deps)* Bump actions/setup-node from 4.3.0 to 4.4.0 (#173)

## [2.0.0-alpha.21] - 2025-04-15

### 🐛 Bug Fixes

- *(openapi)* Correct nesting of `next` objects in responses

## [2.0.0-alpha.20] - 2025-04-05

### 🚀 Features

- *(openapi)* Add error responses to user endpoint
- *(client)* Add error handling for `GetUserByUsername`

### 🐛 Bug Fixes

- *(openapi)* Correct indentation in `next.cursor` responses

### 🚜 Refactor

- *(api)* Update `ErrorResponse` schema to use `errors` array
- *(openapi)* Update all `$ref` paths for consistency
- *(openapi)* Update schema and response references

### 📚 Documentation

- *(openapi)* Add API license information

### ⚙️ Miscellaneous Tasks

- *(gitignore)* Add `redoc-static.html` to ignore list

## [2.0.0-alpha.19] - 2025-04-04

### 🚀 Features

- *(openapi)* Add `imageUrl` property to schema
- *(openapi)* Add `401 Unauthorized` response to endpoints
- *(openapi)* Update schema and paths for API responses
- *(openapi)* Add `bearerAuth` security to all endpoints
- *(openapi)* Add `401` responses and `bearerAuth` security

### 🐛 Bug Fixes

- *(openapi)* Update schema reference for `Action`
- *(openapi)* Update schema to allow nullable fields

### 🚜 Refactor

- *(client)* Restructure `User` and response interfaces
- *(openapi)* Remove unused schema and fix $ref paths
- *(client)* Add typed error responses to API methods

### ⚙️ Miscellaneous Tasks

- *(scripts)* Update `openapi:bundle` command
- *(scripts)* Replace `openapi:validate` with `openapi:lint`
- *(docs)* Update changelog formatting for clarity

## [2.0.0-alpha.18] - 2025-04-03

### 🎨 Styling

- *(client)* Remove unnecessary semicolons in type definitions
- *(openapi)* Standardize array and enum formatting

### ⚙️ Miscellaneous Tasks

- *(ci)* Update workflow formatting and dependencies
- *(docs)* Update changelog formatting and remove extra line

## [2.0.0-alpha.17] - 2025-04-02

### ⚙️ Miscellaneous Tasks

- *(build)* Remove `guard` job from workflow

## [2.0.0-alpha.16] - 2025-04-01

### ⚙️ Miscellaneous Tasks

- *(package)* Add author metadata
- *(package)* Add repository and bugs metadata

## [2.0.0-alpha.15] - 2025-04-01

### 🚀 Features

- *(client)* Add support for domain manifest retrieval
- *(client)* Add `getMetaTags` endpoint support
- *(client)* Add `getFarcasterJson` for Farcaster integration
- *(api-keys)* Add support for retrieving user API keys
- *(client)* Add support for creating API keys
- *(client)* Add `revokeApiKey` function to revoke API keys
- *(api)* Add `getCastsByFid` endpoint support
- *(openapi)* Expand cast schema with additional properties
- *(client)* Add `getConnectedAccounts` API integration
- *(client)* Add `getProfileCasts` for fetching user casts
- *(client)* Add `getUserLikedCasts` API integration
- *(client)* Enhance `getUserThreadCasts` with query params

### 🐛 Bug Fixes

- *(openapi)* Update channel schema reference
- *(openapi)* Update user schema reference

### 🚜 Refactor

- *(openapi)* Centralize `paths` references
- *(openapi)* Restructure parameters and component refs
- *(openapi)* Remove nested paths index and inline refs
- *(openapi)* Update `$ref` paths for consistency
- *(schemas)* Update references to use inline fragments

### ⚙️ Miscellaneous Tasks

- *(openapi)* Update schema and response references

## [2.0.0-alpha.14] - 2025-04-01

### 🚀 Features

- *(client)* Add support for `getAppsByAuthor` API
- *(openapi)* Add `fidParam` and `limitParam` references

### 🚜 Refactor

- *(openapi)* Centralize common query parameters
- *(openapi)* Reuse shared parameters for query params
- *(schemas)* Deduplicate schemas and reorganize structure
- *(openapi)* Modularize tags and parameters
- *(openapi)* Inline `tags.yaml` content into `index.yaml`

## [2.0.0-alpha.13] - 2025-03-31

### 🚀 Features

- *(api)* Add endpoint for developer reward winners

### 🚜 Refactor

- *(openapi)* Centralize `OnboardingState` schema
- *(openapi)* Extract `Channel` schema into a separate file

### ⚙️ Miscellaneous Tasks

- *(openapi)* Update string quotes to align with style guide

## [2.0.0-alpha.12] - 2025-03-30

### 🚀 Features

- *(api)* Add `getUserByVerificationAddress` endpoint

### 🚜 Refactor

- *(openapi)* Centralize `User` schema definition

## [2.0.0-alpha.11] - 2025-03-30

### 🚀 Features

- *(api)* Add OpenAPI 3.1 schema for Warpcast API
- *(openapi)* Extract `channel-restricted-users` path to file
- *(openapi)* Extract `favorite-frames` path to a separate file
- *(openapi)* Add schema for unseen counts endpoint
- *(openapi)* Add schemas and endpoints for invite handling
- *(api)* Add rewards scores response schema and endpoint
- *(openapi)* Add rewards metadata response and refactor schemas
- *(openapi)* Update `starter-pack-users` endpoint ref
- *(api)* Add schemas for starter packs
- *(openapi)* Add support for bookmarked casts
- *(openapi)* Add schema and endpoints for channels and users
- *(openapi)* Add follower-related API endpoints
- *(api)* Add muted keywords endpoints
- *(openapi)* Add endpoints for cast interactions
- *(api)* Add support for cast and draft-cast operations
- *(openapi)* Add schemas and endpoints for channel features
- *(openapi)* Enhance `top-frameapps` endpoint with ref schema

### 🚜 Refactor

- *(api)* Modularize `fc/account-verifications` endpoint
- *(api)* Modularize `v1/creator-rewards-winner-history` endpoint
- *(api)* Modularize `fc/primary-address` endpoint
- *(api)* Modularize `fc/primary-addresses` endpoint
- *(api)* Modularize `fc/starter-pack-members` endpoint
- *(api)* Modularize `v2/ext-send-direct-cast` endpoint
- *(api)* Modularize `fc/blocked-users` endpoint
- *(api)* Modularize `v2/discover-composer-actions` endpoint
- *(api)* Modularize `v2/discover-actions` endpoint
- *(openapi)* Extract and reuse `Action` schema
- *(api)* Modularize `fc/pinned-casts` endpoint
- *(openapi)* Use reusable `SuccessResponse` schema
- *(openapi)* Extract `/v2/onboarding-state` to a separate file
- *(openapi)* Extract `/fc/channel-bans` paths to a new file
- *(openapi)* Move `channel-follows` to separate file
- *(openapi)* Extract `moderate-cast` path to a separate file
- *(openapi)* Extract `moderated-casts` to a separate file
- *(openapi)* Extract `channel-invites` to a separate file
- *(openapi)* Extract `fc/channel-members` to a separate file
- *(openapi)* Extract `cast-likes` paths into a separate file
- *(openapi)* Move `/v2/verifications` to a separate file
- *(openapi)* Reuse `VerifiedAddress` schema in paths
- *(client)* Use `VerifiedAddress` schema for consistency
- *(openapi)* Extract `user-by-fid` path to separate file
- *(openapi)* Extract `direct-cast-inbox` path to its own file
- *(openapi)* Extract `user-app-context` path to a file
- *(openapi)* Extract `user-preferences` path to a separate file
- *(openapi)* Move `highlighted-channels` to a separate file
- *(openapi)* Move `feed-items` path to a dedicated file
- *(openapi)* Extract user path into separate file
- *(openapi)* Extract `user-following-channels` path
- *(openapi)* Extract `suggested-users` path into its own file
- *(openapi)* Extract `user-by-username` path to a new file
- *(openapi)* Extract `channel-streaks` path to a new file
- *(openapi)* Extract `user-thread-casts` to a separate file
- *(openapi)* Extract channel followers path schema
- *(openapi)* Extract `mark-all-notifications-read` path
- *(openapi)* Move `notifications-for-tab` path to its file
- *(openapi)* Extract direct cast conversation path
- *(openapi)* Extract `discover-channels` path schema
- *(openapi)* Extract v2 endpoint to separate file
- *(openapi)* Modularize `invites-available` schema
- *(openapi)* Extract rewards leaderboard path
- *(openapi)* Extract `/v2/starter-packs` path to a new file
- *(openapi)* Extract `/v2/starter-packs` path to a new file
- *(openapi)* Extract `starter-packs-suggested` to separate file
- *(openapi)* Extract and modularize user schema
- *(openapi)* Extract `search-channels` schema to a file

### 🎨 Styling

- *(openapi)* Fix spacing in `required` array definitions

### ⚙️ Miscellaneous Tasks

- *(config)* Update `input` path to use JSON file
- *(scripts)* Update and expand npm scripts

## [2.0.0-alpha.10] - 2025-03-29

### 💼 Other

- *(tsup)* Add `tsup` configuration for bundling
- *(package)* Update exports and module definitions

### ⚙️ Miscellaneous Tasks

- *(build)* Update build script to use `tsup`
- *(test)* Remove `vitest` configuration

## [2.0.0-alpha.9] - 2025-03-29

### 🚀 Features

- *(openapi)* Add `channelKey` to cast posting endpoint

### ⚙️ Miscellaneous Tasks

- *(package)* Add `license` field to package.json
- *(scripts)* Add `clean` script and update `prebuild`

## [2.0.0-alpha.8] - 2025-03-29

### 🚀 Features

- *(index)* Export all from `client`

### 🚜 Refactor

- *(client)* Reorganize generated files into `client`

### ⚙️ Miscellaneous Tasks

- *(config)* Update openapi-ts plugin configurations
- *(src)* Update auto-generated exports
- *(config)* Update output path in `openapi-ts` config
- *(config)* Update `@hey-api/client-fetch` plugin config

## [2.0.0-alpha.7] - 2025-03-29

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [2.0.0-alpha.6] - 2025-03-29

### ⚙️ Miscellaneous Tasks

- *(package)* Update metadata for package publishing
- *(package)* Add keywords to improve package metadata

## [2.0.0-alpha.5] - 2025-03-29

### ⚙️ Miscellaneous Tasks

- *(eslint)* Disable `@typescript-eslint/no-misused-spread`

## [2.0.0-alpha.4] - 2025-03-29

### 📚 Documentation

- *(readme)* Add note about project instability

## [2.0.0-alpha.3] - 2025-03-29

### 📚 Documentation

- *(license)* Add missing license file

## [2.0.0-alpha.2] - 2025-03-29

### 📚 Documentation

- *(readme)* Add project overview and badges

## [2.0.0-alpha.1] - 2025-03-28

### 🚀 Features

- *(api)* Add `result.success` to direct cast response
- *(openapi)* Add schema for starter pack members response
- *(openapi)* Add response typing for `getUserPrimaryAddresses`

### 🚜 Refactor

- *(openapi)* Use `$ref` for user schema definition
- *(schemas)* Use `UserWithExtras` schema reference
- *(openapi)* Reference `User` schema in users array
- *(types)* Simplify `users` type in API response
- *(openapi)* Simplify user schema with `$ref`
- *(types)* Replace inline `reactor` and `author` types

## [2.0.0-alpha.0] - 2025-03-28

### 🚀 Features

- *(api)* Add OpenAPI spec for Warpcast API
- *(api)* Enhance `openapi.yaml` with expanded API specs
- *(openapi)* Enhance `user-by-fid` endpoint
- *(api)* Enhance `direct-cast-inbox` endpoint
- *(api)* Enhance `user-app-context` endpoint
- *(api)* Enhance `user-preferences` endpoint documentation
- *(api)* Enhance feed items endpoint with new features
- *(api)* Update `user` endpoint definitions
- *(openapi)* Enhance `user-following-channels` endpoint
- *(openapi)* Enhance API request/response schemas
- *(client)* Add auto-generated API client and schemas

### 🚜 Refactor

- *(client)* Remove `WarpcastClient` and related utils

### 📚 Documentation

- *(api)* Update onboarding-state endpoint docs
- *(api)* Update `highlighted-channels` endpoint details
- *(openapi)* Add main and client API server definitions
- *(openapi)* Update API documentation

### ⚙️ Miscellaneous Tasks

- *(openapi)* Add `operationId` fields to API paths
- *(openapi)* Add `operationId` fields to API paths
- *(openapi)* Move `openapi.yaml` to `openapi` folder
- *(scripts)* Update build script to use `openapi-ts`

## [1.0.0-alpha.6] - 2025-03-24

### ⚙️ Miscellaneous Tasks

- *(deps)* Bump actions/setup-node from 4.2.0 to 4.3.0 (#143)
- *(deps)* Bump actions/cache from 4.2.2 to 4.2.3 (#149)

## [1.0.0-alpha.5] - 2025-03-15

### 🚀 Features

- *(api)* Add `getUserByFid` method to fetch user by FID
- *(api)* Add `getUserAppContext` method to fetch context
- *(api)* Add `getUserPreferences` method
- *(api)* Add `getUserByUsername` method
- *(index)* Add `getFeeds` method to fetch feed summaries
- *(api)* Add `getFeedItems` method
- *(api)* Add `getFollowing` method to fetch user followings
- *(api)* Add `getFollowers` method
- *(api)* Add `getProfileCasts` method
- *(api)* Add `getChannel` method to fetch channel data
- *(api)* Add `getChannelFollowersYouKnow` method
- *(api)* Add `getChannelUsers` method to fetch channel users
- *(api)* Add `getDirectCastInbox` method
- *(types)* Add optional `next` cursor to `WarpcastResponse`
- *(api)* Add `getStarterPacks` method
- *(api)* Add `createStarterPack` method
- *(api)* Add `updateStarterPack` method
- *(api)* Add `getStarterPack` method
- *(api)* Add `like` method for liking a cast
- *(index)* Add `deleteLike` method to handle deletion
- *(api)* Add `recast` method to handle recast actions
- *(api)* Add `deleteRecast` method

### 🐛 Bug Fixes

- *(types)* Make `privateKey` and `expiresAt` optional

### 🚜 Refactor

- *(auth)* Replace `||` with `??` for `expiresAt` fallback
- *(client)* Improve `WarpcastClient` auth initialization
- *(api)* Simplify response handling in `request` methods

### ⚙️ Miscellaneous Tasks

- *(gitignore)* Add `.env.*` to ignored files
- *(vitest)* Add Vitest configuration setup
- *(deps)* Bump actions/setup-node from 4.1.0 to 4.2.0 (#62)
- *(deps)* Bump pnpm/action-setup from 4.0.0 to 4.1.0 (#81)
- *(deps)* Bump actions/cache from 4.2.0 to 4.2.1 (#104)
- *(deps)* Bump actions/cache from 4.2.1 to 4.2.2 (#117)

## [1.0.0-alpha.4] - 2025-01-15

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.3] - 2025-01-04

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.2] - 2024-12-25

### 🚀 Features

- *(auth)* Validate privateKey with `isHex` utility

### 🐛 Bug Fixes

- *(client)* Add void to `initializeAuth` call
- *(api)* Ensure query parameters are stringified
- *(index)* Use nullish coalescing for `method` default
- *(index)* Remove unnecessary fallback in headers spread
- *(api)* Cast `response.json` to `WarpcastResponse<T>`
- *(api)* Use `Authorization` header for API key

### 🚜 Refactor

- *(client)* Rename `ClientOptions` to `ClientConfig`
- *(index)* Change `request` method to public
- *(core)* Use nullish coalescing for `baseURL`
- *(types)* Use `interface` instead of `type` for response
- *(client)* Improve `request` method with stricter types
- *(types)* Consolidate request options and params

### 🎨 Styling

- *(utils)* Format `ApiError` class for consistency

### ⚙️ Miscellaneous Tasks

- *(deps)* Bump orhun/git-cliff-action from 4.4.1 to 4.4.2 (#1)

## [1.0.0-alpha.1] - 2024-12-14

### ⚙️ Miscellaneous Tasks

- *(build)* Remove `pnpm` version specification

## [1.0.0-alpha.0] - 2024-12-14

### 🚀 Features

- *(client)* Add `WarpcastClient` class
- *(types)* Add `ClientOptions` and `WarpcastResponse` types
- *(utils)* Add `ApiError` class for error handling
- *(client)* Add authentication via mnemonic and private key

### 🚜 Refactor

- *(api)* Update token references to `secret`
- *(client)* Simplify auth token generation logic
- *(client)* Rename `token` to `authToken`
- *(types)* Add `Account` type and cleanup imports

### 📚 Documentation

- *(funding)* Add funding configuration to GitHub

### ⚙️ Miscellaneous Tasks

- *(build)* Add TypeScript configuration file
- *(scripts)* Add `build` and `prepublishOnly` scripts
- Add `.editorconfig` for consistent formatting
- *(issue-templates)* Add issue templates for bugs and features
- *(git-flow)* Add workflow for automated PR creation
- *(dependabot)* Configure automated dependency updates
- *(stale)* Add GitHub Actions stale issue workflow
- *(workflows)* Add GitHub Actions build and release pipeline

<!-- generated by git-cliff -->
