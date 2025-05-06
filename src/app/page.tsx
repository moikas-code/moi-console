import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

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
          <div className="flex flex-col items-center gap-4">
            <SignInButton mode="modal">
              <button className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors text-lg">
                Sign in to Get Started
              </button>
            </SignInButton>
            <span className="text-sm text-gray-500 dark:text-gray-400">No account? Sign up in seconds.</span>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex flex-col items-center gap-4">
            <span className="text-lg text-gray-800 dark:text-gray-200 font-medium">You are signed in. Go to your dashboard.</span>
            <a href="/dashboard" className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors text-lg">
              Go to Dashboard
            </a>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
