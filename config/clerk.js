import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { useRouter } from 'next/router';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

function ClerkWrapper({ children }) {
  const router = useRouter();

  return (
    <ClerkProvider publishableKey={publishableKey} navigate={(to) => router.push(to)}>
      {children}
    </ClerkProvider>
  );
}

function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default ClerkWrapper;
