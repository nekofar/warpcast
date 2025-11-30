# Warpcast

[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/nekofar/warpcast?include_prereleases)](https://github.com/nekofar/warpcast/releases)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/nekofar/warpcast/build.yml)](https://github.com/nekofar/warpcast/actions/workflows/build.yml)
[![GitHub](https://img.shields.io/github/license/nekofar/warpcast)](https://github.com/nekofar/warpcast/blob/master/LICENSE)
[![X (formerly Twitter) Follow](https://img.shields.io/badge/follow-%40nekofar-ffffff?logo=x&style=flat)](https://x.com/nekofar)
[![Farcaster (Warpcast) Follow](https://img.shields.io/badge/follow-%40nekofar-855DCD.svg?logo=farcaster&logoColor=f5f5f5&style=flat)](https://warpcast.com/nekofar)
[![Donate](https://img.shields.io/badge/donate-nekofar.crypto-a2b9bc?logo=ethereum&logoColor=f5f5f5)](https://ud.me/nekofar.crypto)

> [!IMPORTANT]
> This repo is for **educational and experimental use only**. It uses **non-public APIs** and may **violate Warpcast policies**.
> **Not recommended for production or consumer products**. Use at your own risk.

> [!IMPORTANT]
> This project is currently **under development** and considered **unstable**. Significant changes may occur, and
> functionality is not guaranteed at this stage.

## Usage

Install the package using your preferred package manager:

```bash
npm install @nekofar/warpcast
```

### Basic Setup

First, import and configure the client with your API credentials:

```typescript
import { client } from '@nekofar/warpcast';

client.setConfig({
  baseUrl: 'https://api.warpcast.com',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN'
  }
});

```

### Fetching User Data

Retrieve user information by username:

```typescript
import { getUserByUsername } from '@nekofar/warpcast';

const user = await getUserByUsername({
  query: { username: 'nekofar' }
});

console.log(user.data); // User profile information
```

### Getting Feed Items

Fetch items from a user's feed:

```typescript
import { getFeedItems } from '@nekofar/warpcast';

const feed = await getFeedItems({
  query: { feedType: 'following', limit: 25 }
});

console.log(feed.data); // Array of feed items
```

### Creating Casts

Post a new cast to Warpcast:

```typescript
import { createCast } from '@nekofar/warpcast';

const cast = await createCast({
  body: {
    text: 'Hello Warpcast!',
    embeds: []
  }
});

console.log(cast.data); // Created cast details
```
