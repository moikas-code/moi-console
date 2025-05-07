import ClientClerkProvider from '@/components/client_clerk_provider';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MOI Console',
  description: 'Web-based console for organizations and projects',
};

export default function root_layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientClerkProvider>
      <html lang="en" data-theme="black">
        <body className="min-h-screen bg-base-100 text-base-content font-mono">
          <main className="min-h-screen bg-base-100">{children}</main>
        </body>
      </html>
    </ClientClerkProvider>
  );
}
