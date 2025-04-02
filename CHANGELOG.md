# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0-alpha.17] - 2025-04-02

### ⚙️ Miscellaneous Tasks

- _(build)_ Remove `guard` job from workflow

## [2.0.0-alpha.16] - 2025-04-01

### ⚙️ Miscellaneous Tasks

- _(package)_ Add author metadata
- _(package)_ Add repository and bugs metadata

## [2.0.0-alpha.15] - 2025-04-01

### 🚀 Features

- _(client)_ Add support for domain manifest retrieval
- _(client)_ Add `getMetaTags` endpoint support
- _(client)_ Add `getFarcasterJson` for Farcaster integration
- _(api-keys)_ Add support for retrieving user API keys
- _(client)_ Add support for creating API keys
- _(client)_ Add `revokeApiKey` function to revoke API keys
- _(api)_ Add `getCastsByFid` endpoint support
- _(openapi)_ Expand cast schema with additional properties
- _(client)_ Add `getConnectedAccounts` API integration
- _(client)_ Add `getProfileCasts` for fetching user casts
- _(client)_ Add `getUserLikedCasts` API integration
- _(client)_ Enhance `getUserThreadCasts` with query params

### 🐛 Bug Fixes

- _(openapi)_ Update channel schema reference
- _(openapi)_ Update user schema reference

### 🚜 Refactor

- _(openapi)_ Centralize `paths` references
- _(openapi)_ Restructure parameters and component refs
- _(openapi)_ Remove nested paths index and inline refs
- _(openapi)_ Update `$ref` paths for consistency
- _(schemas)_ Update references to use inline fragments

### ⚙️ Miscellaneous Tasks

- _(openapi)_ Update schema and response references

## [2.0.0-alpha.14] - 2025-04-01

### 🚀 Features

- _(client)_ Add support for `getAppsByAuthor` API
- _(openapi)_ Add `fidParam` and `limitParam` references

### 🚜 Refactor

- _(openapi)_ Centralize common query parameters
- _(openapi)_ Reuse shared parameters for query params
- _(schemas)_ Deduplicate schemas and reorganize structure
- _(openapi)_ Modularize tags and parameters
- _(openapi)_ Inline `tags.yaml` content into `index.yaml`

## [2.0.0-alpha.13] - 2025-03-31

### 🚀 Features

- _(api)_ Add endpoint for developer reward winners

### 🚜 Refactor

- _(openapi)_ Centralize `OnboardingState` schema
- _(openapi)_ Extract `Channel` schema into a separate file

### ⚙️ Miscellaneous Tasks

- _(openapi)_ Update string quotes to align with style guide

## [2.0.0-alpha.12] - 2025-03-30

### 🚀 Features

- _(api)_ Add `getUserByVerificationAddress` endpoint

### 🚜 Refactor

- _(openapi)_ Centralize `User` schema definition

## [2.0.0-alpha.11] - 2025-03-30

### 🚀 Features

- _(api)_ Add OpenAPI 3.1 schema for Warpcast API
- _(openapi)_ Extract `channel-restricted-users` path to file
- _(openapi)_ Extract `favorite-frames` path to a separate file
- _(openapi)_ Add schema for unseen counts endpoint
- _(openapi)_ Add schemas and endpoints for invite handling
- _(api)_ Add rewards scores response schema and endpoint
- _(openapi)_ Add rewards metadata response and refactor schemas
- _(openapi)_ Update `starter-pack-users` endpoint ref
- _(api)_ Add schemas for starter packs
- _(openapi)_ Add support for bookmarked casts
- _(openapi)_ Add schema and endpoints for channels and users
- _(openapi)_ Add follower-related API endpoints
- _(api)_ Add muted keywords endpoints
- _(openapi)_ Add endpoints for cast interactions
- _(api)_ Add support for cast and draft-cast operations
- _(openapi)_ Add schemas and endpoints for channel features
- _(openapi)_ Enhance `top-frameapps` endpoint with ref schema

### 🚜 Refactor

- _(api)_ Modularize `fc/account-verifications` endpoint
- _(api)_ Modularize `v1/creator-rewards-winner-history` endpoint
- _(api)_ Modularize `fc/primary-address` endpoint
- _(api)_ Modularize `fc/primary-addresses` endpoint
- _(api)_ Modularize `fc/starter-pack-members` endpoint
- _(api)_ Modularize `v2/ext-send-direct-cast` endpoint
- _(api)_ Modularize `fc/blocked-users` endpoint
- _(api)_ Modularize `v2/discover-composer-actions` endpoint
- _(api)_ Modularize `v2/discover-actions` endpoint
- _(openapi)_ Extract and reuse `Action` schema
- _(api)_ Modularize `fc/pinned-casts` endpoint
- _(openapi)_ Use reusable `SuccessResponse` schema
- _(openapi)_ Extract `/v2/onboarding-state` to a separate file
- _(openapi)_ Extract `/fc/channel-bans` paths to a new file
- _(openapi)_ Move `channel-follows` to separate file
- _(openapi)_ Extract `moderate-cast` path to a separate file
- _(openapi)_ Extract `moderated-casts` to a separate file
- _(openapi)_ Extract `channel-invites` to a separate file
- _(openapi)_ Extract `fc/channel-members` to a separate file
- _(openapi)_ Extract `cast-likes` paths into a separate file
- _(openapi)_ Move `/v2/verifications` to a separate file
- _(openapi)_ Reuse `VerifiedAddress` schema in paths
- _(client)_ Use `VerifiedAddress` schema for consistency
- _(openapi)_ Extract `user-by-fid` path to separate file
- _(openapi)_ Extract `direct-cast-inbox` path to its own file
- _(openapi)_ Extract `user-app-context` path to a file
- _(openapi)_ Extract `user-preferences` path to a separate file
- _(openapi)_ Move `highlighted-channels` to a separate file
- _(openapi)_ Move `feed-items` path to a dedicated file
- _(openapi)_ Extract user path into separate file
- _(openapi)_ Extract `user-following-channels` path
- _(openapi)_ Extract `suggested-users` path into its own file
- _(openapi)_ Extract `user-by-username` path to a new file
- _(openapi)_ Extract `channel-streaks` path to a new file
- _(openapi)_ Extract `user-thread-casts` to a separate file
- _(openapi)_ Extract channel followers path schema
- _(openapi)_ Extract `mark-all-notifications-read` path
- _(openapi)_ Move `notifications-for-tab` path to its file
- _(openapi)_ Extract direct cast conversation path
- _(openapi)_ Extract `discover-channels` path schema
- _(openapi)_ Extract v2 endpoint to separate file
- _(openapi)_ Modularize `invites-available` schema
- _(openapi)_ Extract rewards leaderboard path
- _(openapi)_ Extract `/v2/starter-packs` path to a new file
- _(openapi)_ Extract `/v2/starter-packs` path to a new file
- _(openapi)_ Extract `starter-packs-suggested` to separate file
- _(openapi)_ Extract and modularize user schema
- _(openapi)_ Extract `search-channels` schema to a file

### 🎨 Styling

- _(openapi)_ Fix spacing in `required` array definitions

### ⚙️ Miscellaneous Tasks

- _(config)_ Update `input` path to use JSON file
- _(scripts)_ Update and expand npm scripts

## [2.0.0-alpha.10] - 2025-03-29

### 💼 Other

- _(tsup)_ Add `tsup` configuration for bundling
- _(package)_ Update exports and module definitions

### ⚙️ Miscellaneous Tasks

- _(build)_ Update build script to use `tsup`
- _(test)_ Remove `vitest` configuration

## [2.0.0-alpha.9] - 2025-03-29

### 🚀 Features

- _(openapi)_ Add `channelKey` to cast posting endpoint

### ⚙️ Miscellaneous Tasks

- _(package)_ Add `license` field to package.json
- _(scripts)_ Add `clean` script and update `prebuild`

## [2.0.0-alpha.8] - 2025-03-29

### 🚀 Features

- _(index)_ Export all from `client`

### 🚜 Refactor

- _(client)_ Reorganize generated files into `client`

### ⚙️ Miscellaneous Tasks

- _(config)_ Update openapi-ts plugin configurations
- _(src)_ Update auto-generated exports
- _(config)_ Update output path in `openapi-ts` config
- _(config)_ Update `@hey-api/client-fetch` plugin config

## [2.0.0-alpha.7] - 2025-03-29

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [2.0.0-alpha.6] - 2025-03-29

### ⚙️ Miscellaneous Tasks

- _(package)_ Update metadata for package publishing
- _(package)_ Add keywords to improve package metadata

## [2.0.0-alpha.5] - 2025-03-29

### ⚙️ Miscellaneous Tasks

- _(eslint)_ Disable `@typescript-eslint/no-misused-spread`

## [2.0.0-alpha.4] - 2025-03-29

### 📚 Documentation

- _(readme)_ Add note about project instability

## [2.0.0-alpha.3] - 2025-03-29

### 📚 Documentation

- _(license)_ Add missing license file

## [2.0.0-alpha.2] - 2025-03-29

### 📚 Documentation

- _(readme)_ Add project overview and badges

## [2.0.0-alpha.1] - 2025-03-28

### 🚀 Features

- _(api)_ Add `result.success` to direct cast response
- _(openapi)_ Add schema for starter pack members response
- _(openapi)_ Add response typing for `getUserPrimaryAddresses`

### 🚜 Refactor

- _(openapi)_ Use `$ref` for user schema definition
- _(schemas)_ Use `UserWithExtras` schema reference
- _(openapi)_ Reference `User` schema in users array
- _(types)_ Simplify `users` type in API response
- _(openapi)_ Simplify user schema with `$ref`
- _(types)_ Replace inline `reactor` and `author` types

## [2.0.0-alpha.0] - 2025-03-28

### 🚀 Features

- _(api)_ Add OpenAPI spec for Warpcast API
- _(api)_ Enhance `openapi.yaml` with expanded API specs
- _(openapi)_ Enhance `user-by-fid` endpoint
- _(api)_ Enhance `direct-cast-inbox` endpoint
- _(api)_ Enhance `user-app-context` endpoint
- _(api)_ Enhance `user-preferences` endpoint documentation
- _(api)_ Enhance feed items endpoint with new features
- _(api)_ Update `user` endpoint definitions
- _(openapi)_ Enhance `user-following-channels` endpoint
- _(openapi)_ Enhance API request/response schemas
- _(client)_ Add auto-generated API client and schemas

### 🚜 Refactor

- _(client)_ Remove `WarpcastClient` and related utils

### 📚 Documentation

- _(api)_ Update onboarding-state endpoint docs
- _(api)_ Update `highlighted-channels` endpoint details
- _(openapi)_ Add main and client API server definitions
- _(openapi)_ Update API documentation

### ⚙️ Miscellaneous Tasks

- _(openapi)_ Add `operationId` fields to API paths
- _(openapi)_ Add `operationId` fields to API paths
- _(openapi)_ Move `openapi.yaml` to `openapi` folder
- _(scripts)_ Update build script to use `openapi-ts`

## [1.0.0-alpha.6] - 2025-03-24

### ⚙️ Miscellaneous Tasks

- _(deps)_ Bump actions/setup-node from 4.2.0 to 4.3.0 (#143)
- _(deps)_ Bump actions/cache from 4.2.2 to 4.2.3 (#149)

## [1.0.0-alpha.5] - 2025-03-15

### 🚀 Features

- _(api)_ Add `getUserByFid` method to fetch user by FID
- _(api)_ Add `getUserAppContext` method to fetch context
- _(api)_ Add `getUserPreferences` method
- _(api)_ Add `getUserByUsername` method
- _(index)_ Add `getFeeds` method to fetch feed summaries
- _(api)_ Add `getFeedItems` method
- _(api)_ Add `getFollowing` method to fetch user followings
- _(api)_ Add `getFollowers` method
- _(api)_ Add `getProfileCasts` method
- _(api)_ Add `getChannel` method to fetch channel data
- _(api)_ Add `getChannelFollowersYouKnow` method
- _(api)_ Add `getChannelUsers` method to fetch channel users
- _(api)_ Add `getDirectCastInbox` method
- _(types)_ Add optional `next` cursor to `WarpcastResponse`
- _(api)_ Add `getStarterPacks` method
- _(api)_ Add `createStarterPack` method
- _(api)_ Add `updateStarterPack` method
- _(api)_ Add `getStarterPack` method
- _(api)_ Add `like` method for liking a cast
- _(index)_ Add `deleteLike` method to handle deletion
- _(api)_ Add `recast` method to handle recast actions
- _(api)_ Add `deleteRecast` method

### 🐛 Bug Fixes

- _(types)_ Make `privateKey` and `expiresAt` optional

### 🚜 Refactor

- _(auth)_ Replace `||` with `??` for `expiresAt` fallback
- _(client)_ Improve `WarpcastClient` auth initialization
- _(api)_ Simplify response handling in `request` methods

### ⚙️ Miscellaneous Tasks

- _(gitignore)_ Add `.env.*` to ignored files
- _(vitest)_ Add Vitest configuration setup
- _(deps)_ Bump actions/setup-node from 4.1.0 to 4.2.0 (#62)
- _(deps)_ Bump pnpm/action-setup from 4.0.0 to 4.1.0 (#81)
- _(deps)_ Bump actions/cache from 4.2.0 to 4.2.1 (#104)
- _(deps)_ Bump actions/cache from 4.2.1 to 4.2.2 (#117)

## [1.0.0-alpha.4] - 2025-01-15

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.3] - 2025-01-04

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies

## [1.0.0-alpha.2] - 2024-12-25

### 🚀 Features

- _(auth)_ Validate privateKey with `isHex` utility

### 🐛 Bug Fixes

- _(client)_ Add void to `initializeAuth` call
- _(api)_ Ensure query parameters are stringified
- _(index)_ Use nullish coalescing for `method` default
- _(index)_ Remove unnecessary fallback in headers spread
- _(api)_ Cast `response.json` to `WarpcastResponse<T>`
- _(api)_ Use `Authorization` header for API key

### 🚜 Refactor

- _(client)_ Rename `ClientOptions` to `ClientConfig`
- _(index)_ Change `request` method to public
- _(core)_ Use nullish coalescing for `baseURL`
- _(types)_ Use `interface` instead of `type` for response
- _(client)_ Improve `request` method with stricter types
- _(types)_ Consolidate request options and params

### 🎨 Styling

- _(utils)_ Format `ApiError` class for consistency

### ⚙️ Miscellaneous Tasks

- _(deps)_ Bump orhun/git-cliff-action from 4.4.1 to 4.4.2 (#1)

## [1.0.0-alpha.1] - 2024-12-14

### ⚙️ Miscellaneous Tasks

- _(build)_ Remove `pnpm` version specification

## [1.0.0-alpha.0] - 2024-12-14

### 🚀 Features

- _(client)_ Add `WarpcastClient` class
- _(types)_ Add `ClientOptions` and `WarpcastResponse` types
- _(utils)_ Add `ApiError` class for error handling
- _(client)_ Add authentication via mnemonic and private key

### 🚜 Refactor

- _(api)_ Update token references to `secret`
- _(client)_ Simplify auth token generation logic
- _(client)_ Rename `token` to `authToken`
- _(types)_ Add `Account` type and cleanup imports

### 📚 Documentation

- _(funding)_ Add funding configuration to GitHub

### ⚙️ Miscellaneous Tasks

- _(build)_ Add TypeScript configuration file
- _(scripts)_ Add `build` and `prepublishOnly` scripts
- Add `.editorconfig` for consistent formatting
- _(issue-templates)_ Add issue templates for bugs and features
- _(git-flow)_ Add workflow for automated PR creation
- _(dependabot)_ Configure automated dependency updates
- _(stale)_ Add GitHub Actions stale issue workflow
- _(workflows)_ Add GitHub Actions build and release pipeline

<!-- generated by git-cliff -->
