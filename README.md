# My Portfolio - A fullstack React application: Next.js 14, Typescript, TailwindCSS, Convex, and Clerk.

## Key Features

- [x] Real-time database
- [x] Style Editor
- [x] Light / Dark mode
- [x] Infinite children documents
- [x] Trash can & soft delete
- [x] Authentication
- [x] File upload
- [x] File replacement
- [x] Icons for each document (changes in real time)
- [x] Expandable sidebar
- [x] Full responsivity and mobile UI
- [x] Publish your notes to the web
- [x] Fullt collapsable sidebar
- [x] Landing page
- [x] Cover image of each post
- [x] recover deleted post
- [x] Published posts
- [x] Preview mode

## Contributing

You can contribute to this project by creating a PR on the [GitHub repository](https://github.com/aleksanderpalamar/palamar-dev/pulls).

## Cloning the repository

```
git clone https://github.com/aleksanderpalamar/palamar-dev.git
```

## Installing dependencies

```
bun install
```

## Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

## Setup Convex

```bash
npx convex dev
```

## Start application

```bash
bun run dev
```
## Start application in production

```bash
bun run build && bun run start
```

Palamar Dev is a [open source project](https://github.com/aleksanderpalamar/palamar-dev) and is hosted on [Vercel](https://vercel.com/).
