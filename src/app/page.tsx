import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { SignedInView } from './views/signed_in_view';
import { SignedOutView } from './views/signed_out_view';

export default function landing_page() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Welcome to <span className="text-primary">MOI Console</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Manage your organizations, projects, and configurations with ease. Secure, fast, and modern.
          </p>
        </div>
        <SignedOut>
          <SignedOutView />
        </SignedOut>
        <SignedIn>
          <SignedInView />
        </SignedIn>
      </div>
    </div>
  );
}
