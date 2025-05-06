"use client";
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import React from 'react';

interface RequireSignedInProps {
  children: React.ReactNode;
}

export default function require_signed_in({ children }: RequireSignedInProps) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/" />
      </SignedOut>
    </>
  );
} 