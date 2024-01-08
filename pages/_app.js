// _app.js
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <Global
                styles={css`
        `}
            />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
