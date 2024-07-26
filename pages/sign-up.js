import { SignUp } from '@clerk/clerk-react';
import Head from 'next/head';

export default function SignUpPage() {
  return (
    <div>
      <Head>
        <title>Sign Up | Shop and Send Manitoba</title>
      </Head>
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}
