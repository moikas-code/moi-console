import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Dashboard from './views/dashboard';
import { SignedOutView } from './views/signed_out_view';

export default function landing_page() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <SignedOut>
        <div className="max-w-xl w-full text-center space-y-8  p-6">
          <SignedOutView />
        </div>
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </div>
  );
}
