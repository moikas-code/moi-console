import React from 'react';

export function SignedInView() {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-lg text-gray-800 dark:text-gray-200 font-medium">You are signed in. Go to your dashboard.</span>
      <a href="/dashboard" className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors text-lg">
        Go to Dashboard
      </a>
    </div>
  );
} 