import React from 'react';
import { SignInButton } from '@clerk/nextjs';

export function SignedOutView() {
  return (
    <div className="flex flex-col items-center gap-4">
      <SignInButton mode="modal">
        <button className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors text-lg">
          Sign in to Get Started
        </button>
      </SignInButton>
      <span className="text-sm text-gray-500 dark:text-gray-400">No account? Sign up in seconds.</span>
    </div>
  );
} 