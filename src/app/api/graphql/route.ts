import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';
import { PrismaClient } from '@prisma/client';
import { getAuth } from '@clerk/nextjs/server';

const prisma_client = new PrismaClient();

const apollo_server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});
// console.log(apollo_server);
const handler = startServerAndCreateNextHandler(apollo_server, {
  context: async (req) => {
    try {
      const { userId } = getAuth(req);
      console.log('getAuth result:', { userId });
      return { prisma_client, user_id: userId ?? undefined };
    } catch (error) {
      console.error('Error in context:', (error as Error)?.message || error);
      return { prisma_client, user_id: undefined };
    }
  },
});

export const POST = handler;
export const GET = handler;
