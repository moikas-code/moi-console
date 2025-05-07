# MOI Console

A web-based console inspired by AWS and Google Cloud, built with Next.js, TypeScript, Tailwind CSS, DaisyUI, and Clerk for authentication and organization management.

## Tech Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS
- DaisyUI
- Clerk (authentication & organization management)
- ESLint & Prettier (code quality)

## Folder Structure
```
src/
  app/           # App Router pages and layouts
  components/    # Reusable UI components (e.g., sidebar)
  lib/           # Utility functions
```

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up Clerk:
   - Create a Clerk project at [Clerk.dev](https://clerk.dev)
   - Add your Clerk keys to `.env.local` as per Clerk docs
3. Run the development server:
   ```bash
   npm run dev
   ```

## Development
- All code uses `snake_case` for identifiers.
- Lint and format code with:
  ```bash
  npm run lint
  npm run format
  ```
- Add new UI components to `src/components/`.
- Add utilities to `src/lib/`.

## License
MIT

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# moi-console GraphQL API

## Overview

This project now uses Apollo GraphQL for all API operations. The previous ElysiaJS REST API has been fully removed. All new development should use the GraphQL endpoint at `/api/graphql`.

## Getting Started

1. **Install dependencies:**
   ```sh
   bun install
   ```
2. **Run the development server:**
   ```sh
   bun run dev
   ```
3. **Access the GraphQL endpoint:**
   - URL: `http://localhost:3000/api/graphql`
   - Use tools like [Apollo Studio Explorer](https://studio.apollographql.com/) or [GraphiQL](https://github.com/graphql/graphiql) to interact.

## Example Queries & Mutations

### Query all tools
```graphql
query {
  tools {
    id
    name
    description
    created_at
    calls {
      id
      input
      output
    }
  }
}
```

### Create a tool
```graphql
mutation {
  create_tool(name: "Example Tool", description: "A demo tool") {
    id
    name
    description
    created_at
  }
}
```

### Create a call
```graphql
mutation {
  create_call(tool_id: 1, input: "input data", output: "output data") {
    id
    tool_id
    input
    output
    created_at
  }
}
```

## Migration Notes
- The ElysiaJS REST API has been fully removed. All business logic has been migrated to GraphQL.
- API key authentication is currently mocked; implement real auth as needed.
- All identifiers use snake_case for consistency.

## Testing
- Add unit and integration tests for resolvers and schema as needed.

## Contributing
- Follow snake_case naming.
- Document all new queries/mutations.
- Use best practices for security and performance.
