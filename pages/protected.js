// pages/protected.js
import { withAuth } from '@clerk/nextjs';

function ProtectedPage() {
  return <div>This is a protected page!</div>;
}

export default withAuth(ProtectedPage);
