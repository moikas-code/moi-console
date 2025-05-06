// mcp-server/index.ts
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
  name: 'moi-console',
  version: '0.0.1',
});

// Example tool
server.tool('add', { a: z.number(), b: z.number() }, async ({ a, b }) => ({
  content: [{ type: 'text', text: String(a + b) }],
}));

// Mock database loader
async function loadToolsFromDB() {
  // Simulate DB fetch
  return [{ name: 'add', schema: { a: z.number(), b: z.number() } }];
}

async function startServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log('MCP Server running');
}

startServer();
