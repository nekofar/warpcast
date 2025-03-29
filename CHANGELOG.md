# Changelog

All notable changes to this project will be documented in this file.

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
