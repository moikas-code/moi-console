'use client';

import React, { useState } from 'react';
import Sidebar_Component from '../../../components/sidebar';

import { UserButton, useUser } from '@clerk/nextjs';
import { useQuery, gql, useMutation } from '@apollo/client';

const TOOLS_QUERY = gql`
  query {
    tools {
      id
      name
      description
      created_at
    }
  }
`;

const USERS_QUERY = gql`
  query {
    users {
      id
      email
      name
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($email: String!, $name: String!) {
    create_user(email: $email, name: $name) {
      id
      email
      name
    }
  }
`;

interface tool {
  id: number;
  name: string;
  description?: string;
  created_at: string;
}

interface user_type {
  id: number;
  email: string;
  name: string;
}

export default function Dashboard() {
  const { data, loading, error } = useQuery(TOOLS_QUERY);
  const users_query = useQuery(USERS_QUERY);
  const [create_user] = useMutation(CREATE_USER_MUTATION, {
    refetchQueries: [{ query: USERS_QUERY }],
  });
  const [user_email, set_user_email] = useState('');
  const [user_name, set_user_name] = useState('');
  const [show_welcome, set_show_welcome] = useState(true);
  const { user, isLoaded } = useUser();

  const handle_create_user = async (e: React.FormEvent) => {
    e.preventDefault();
    await create_user({ variables: { email: user_email, name: user_name } });
    set_user_email('');
    set_user_name('');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  let username = 'User';
  if (isLoaded && user) {
    username = user.username || user.firstName || user.primaryEmailAddress?.emailAddress || 'User';
  }

  return (
    
    <div className="flex flex-row min-h-screen w-full bg-base-100">
      <Sidebar_Component />
      <div className="flex-1 flex flex-col w-full">
        <header className="flex items-center justify-end p-4 border-b border-base-300 bg-base-100">
          <UserButton afterSignOutUrl="/" />
        </header>
        <div className="flex-1 p-6 bg-base-200 w-full">
          {show_welcome && (
            <div className="flex items-center justify-between bg-primary/10 border border-primary rounded p-4 mb-6">
              <span className="text-2xl font-bold text-base-content">
                Welcome, {username}!
              </span>
              <button
                className="ml-4 px-3 py-1 rounded btn btn-secondary"
                onClick={() => set_show_welcome(false)}
                aria-label="Dismiss welcome message"
              >
                Dismiss
              </button>
            </div>
          )}
          <h2 className="text-lg font-bold text-base-content mb-2">Tools</h2>
          <ul className="space-y-2">
            {data.tools.map((tool: tool) => (
              <li key={tool.id} className="bg-base-100 rounded p-2 border border-base-300">
                <strong>{tool.name}</strong> - {tool.description} (Created: {tool.created_at})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
