import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.css'; // Adjust this if you have global styles

// Import custom theme if it exists
import theme from '../theme'; // Adjust the path if necessary

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
