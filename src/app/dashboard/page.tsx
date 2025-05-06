'use client';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useState } from 'react';

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

interface Tool {
  id: number;
  name: string;
  description?: string;
  created_at: string;
}

interface User {
  id: number;
  email: string;
  name: string;
}

export default function DashboardPage() {
  const { data, loading, error } = useQuery(TOOLS_QUERY);
  const users_query = useQuery(USERS_QUERY);
  const [create_user] = useMutation(CREATE_USER_MUTATION, {
    refetchQueries: [{ query: USERS_QUERY }],
  });
  const [user_email, set_user_email] = useState('');
  const [user_name, set_user_name] = useState('');

  const handle_create_user = async (e: React.FormEvent) => {
    e.preventDefault();
    await create_user({ variables: { email: user_email, name: user_name } });
    set_user_email('');
    set_user_name('');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h2>Tools</h2>
      <ul>
        {data.tools.map((tool: Tool) => (
          <li key={tool.id}>
            <strong>{tool.name}</strong> - {tool.description} (Created: {tool.created_at})
          </li>
        ))}
      </ul>
      <h2>Users</h2>
      {users_query.loading && <div>Loading users...</div>}
      {users_query.error && <div>Error loading users: {users_query.error.message}</div>}
      <ul>
        {users_query.data && users_query.data.users.map((user: User) => (
          <li key={user.id}>
            {user.email} - {user.name}
          </li>
        ))}
      </ul>
      <h2>Create User</h2>
      <form onSubmit={handle_create_user}>
        <input
          type="email"
          placeholder="Email"
          value={user_email}
          onChange={e => set_user_email(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={user_name}
          onChange={e => set_user_name(e.target.value)}
          required
        />
        <button type="submit">Create User</button>
      </form>
    </>
  );
} 