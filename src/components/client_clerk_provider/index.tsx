"use client";
import { ClerkProvider } from '@clerk/nextjs';
import { ApolloProvider } from '@apollo/client';
import { apollo_client } from '@/lib/apollo_client';
import React from 'react';

interface ClientClerkProviderProps {
  children: React.ReactNode;
}

export default function ClientClerkProvider({ children }: ClientClerkProviderProps) {
  return (
    <ClerkProvider>
      <ApolloProvider client={apollo_client}>
        {children}
      </ApolloProvider>
    </ClerkProvider>
  );
} 