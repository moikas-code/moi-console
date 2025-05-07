import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Dashboard from './views/dashboard';
import { SignedOutView } from './views/signed_out_view';

export default function landing_page() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-base-100">
      <SignedOut>
        <div className="max-w-xl w-full text-center space-y-8 p-6 bg-base-200 rounded-lg shadow">
          <SignedOutView />
        </div>
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </div>
  );
}
