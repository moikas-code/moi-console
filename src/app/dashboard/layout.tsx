import React from 'react';
import sidebar_component from '../../components/sidebar';
import RequireSignedIn from '../../components/require_signed_in';
import { UserButton } from '@clerk/nextjs';

export default function dashboard_layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireSignedIn>
      <div className="flex min-h-screen">
        {sidebar_component()}
        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-end p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <UserButton afterSignOutUrl="/" />
          </header>
          <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
        </div>
      </div>
    </RequireSignedIn>
  );
} 