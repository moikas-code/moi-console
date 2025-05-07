import React from 'react';
import { SignInButton } from '@clerk/nextjs';

export function SignedOutView() {
  return (
    <div className="flex flex-col items-center gap-4 min-h-screen justify-center bg-base-100">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-base-content tracking-tight">
          Welcome to <span className="text-primary">MOI Console</span>
        </h1>
        <p className="text-lg md:text-xl text-base-content/70">
          Manage your organizations, projects, and configurations with ease. Secure, fast, and
          modern.
        </p>
      </div>
      <SignInButton mode="modal">
        <button className="btn btn-primary text-lg">
          Sign in to Get Started
        </button>
      </SignInButton>
      <span className="text-sm text-base-content/50">
        No account? Sign up in seconds.
      </span>
    </div>
  );
} 