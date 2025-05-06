import { resolvers } from '../resolvers';
import { PrismaClient } from '@prisma/client';
const prisma_client = new PrismaClient();

describe('GraphQL Resolvers', () => {
  beforeAll(async () => {
    // Optionally seed test data
  });

  afterAll(async () => {
    await prisma_client.$disconnect();
  });

  it('should fetch all tools', async () => {
    const tools = await resolvers.Query.tools();
    expect(Array.isArray(tools)).toBe(true);
  });

  it('should create a tool', async () => {
    const tool = await resolvers.Mutation.create_tool({}, { name: 'test_tool', description: 'desc' }, { user_id: 'test_user' });
    expect(tool).toHaveProperty('id');
    expect(tool.name).toBe('test_tool');
  });

  it('should create a call', async () => {
    const tool = await resolvers.Mutation.create_tool({}, { name: 'call_tool', description: 'desc' }, { user_id: 'test_user' });
    const call = await resolvers.Mutation.create_call({}, { tool_id: tool.id, input: 'input', output: 'output' }, { user_id: 'test_user' });
    expect(call).toHaveProperty('id');
    expect(call.tool_id).toBe(tool.id);
  });

  it('should create a user', async () => {
    const user = await resolvers.Mutation.create_user({}, { email: 'test@example.com', name: 'Test User' }, { user_id: 'test_user' });
    expect(user).toHaveProperty('id');
    expect(user.email).toBe('test@example.com');
    expect(user.name).toBe('Test User');
  });
}); 