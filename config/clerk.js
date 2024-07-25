import { ClerkProvider } from '@clerk/clerk-react';
import { useRouter } from 'next/router';

const frontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

function ClerkWrapper({ children }) {
  const { pathname } = useRouter();

  const isPublicPath = pathname.startsWith('/public');

  return (
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => router.push(to)}>
      {isPublicPath ? children : <ProtectedRoute>{children}</ProtectedRoute>}
    </ClerkProvider>
  );
}

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn]);

  return isSignedIn ? children : null;
}

export default ClerkWrapper;
