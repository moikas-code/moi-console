import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import ClientClerkProvider from './index';

// Mock ClerkProvider and ApolloProvider to avoid context errors in test environment
jest.mock('@clerk/nextjs', () => ({ ClerkProvider: ({ children }: React.PropsWithChildren<object>) => <div data-testid="clerk-provider">{children}</div> }));
jest.mock('@apollo/client', () => ({ ApolloProvider: ({ children }: React.PropsWithChildren<object>) => <div data-testid="apollo-provider">{children}</div> }));


describe('ClientClerkProvider', () => {
  it('renders children inside providers', () => {
    const { getByText, getByTestId } = render(
      <ClientClerkProvider>
        <span>Test Child</span>
      </ClientClerkProvider>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
    expect(getByTestId('clerk-provider')).toBeInTheDocument();
    expect(getByTestId('apollo-provider')).toBeInTheDocument();
  });
}); 