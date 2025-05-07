import React from 'react';
import { SignInButton } from '@clerk/nextjs';

export function SignedOutView() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Welcome to <span className="text-primary">MOI Console</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Manage your organizations, projects, and configurations with ease. Secure, fast, and
          modern.
        </p>
      </div>
      <SignInButton mode="modal">
        <button className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors text-lg">
          Sign in to Get Started
        </button>
      </SignInButton>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        No account? Sign up in seconds.
      </span>
    </div>
  );
} 