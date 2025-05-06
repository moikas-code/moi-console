import { PrismaClient } from '@prisma/client';
const prisma_client = new PrismaClient();

interface CreateToolArgs {
  name: string;
  description?: string;
}

interface CreateCallArgs {
  tool_id: number;
  input: string;
  output?: string;
}

interface ToolParent {
  id: number;
}

interface CallParent {
  tool_id: number;
}

export const resolvers = {
  Query: {
    tools: async () => {
      try {
        return await prisma_client.tool.findMany();
      } catch (error) {
        console.error('Error in Query.tools:', error);
        throw error;
      }
    },
    calls: async () => {
      try {
        return await prisma_client.call.findMany();
      } catch (error) {
        console.error('Error in Query.calls:', error);
        throw error;
      }
    },
  },
  Mutation: {
    create_tool: async (_: unknown, args: CreateToolArgs, context: { user_id?: string }) => {
      try {
        if (!context.user_id) throw new Error('Unauthorized');
        return await prisma_client.tool.create({
          data: {
            name: args.name,
            description: args.description ?? '',
          },
        });
      } catch (error) {
        console.error('Error in Mutation.create_tool:', error);
        throw error;
      }
    },
    create_call: async (_: unknown, args: CreateCallArgs, context: { user_id?: string }) => {
      try {
        if (!context.user_id) throw new Error('Unauthorized');
        return await prisma_client.call.create({
          data: {
            tool_id: args.tool_id,
            input: args.input,
            output: args.output ?? '',
          },
        });
      } catch (error) {
        console.error('Error in Mutation.create_call:', error);
        throw error;
      }
    },
    create_user: async (_: unknown, args: { email: string; name: string }, context: { user_id?: string }) => {
      try {
        if (!context.user_id) throw new Error('Unauthorized');
        return await prisma_client.user.create({
          data: {
            email: args.email,
            name: args.name,
          },
        });
      } catch (error) {
        console.error('Error in Mutation.create_user:', error);
        throw error;
      }
    },
  },
  Tool: {
    calls: (parent: ToolParent) =>
      prisma_client.call.findMany({ where: { tool_id: parent.id } }),
  },
  Call: {
    tool: (parent: CallParent) =>
      prisma_client.tool.findUnique({ where: { id: parent.tool_id } }),
  },
}; 