import ClerkWrapper from '../config/clerk';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkWrapper>
      <Component {...pageProps} />
    </ClerkWrapper>
  );
}

export default MyApp;
