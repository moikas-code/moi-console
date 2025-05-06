# Bun-based MCP Server

This is a minimal Model Context Protocol (MCP) server using Bun, TypeScript, and the `@modelcontextprotocol/sdk` package. It demonstrates:

- StdioServerTransport for local testing
- A basic example tool (`add`) that adds two numbers
- Dynamic tool loading from a (mocked) PostgreSQL database
- Strict TypeScript and ESLint configuration

## Setup

1. Install [Bun](https://bun.sh/).
2. Install dependencies:

```sh
bun install
```

## Usage

Start the server:

```sh
bun run src/index.ts
```

The server will listen for MCP requests via stdio.

## Tool Loading

The function `load_tools_from_db` simulates loading tool definitions and handlers from a PostgreSQL database. Replace this with real database logic as needed.

## Example Tool

The `add` tool takes two numbers (`a` and `b`) and returns their sum as `result`.

## Linting

```sh
bun run lint
```

## Type Checking

```sh
bun run tsc
```

## File Structure

- `src/index.ts`: Main server entry point
- `tsconfig.json`: TypeScript configuration
- `.eslintrc.json`: ESLint configuration
- `package.json`: Project metadata and scripts 