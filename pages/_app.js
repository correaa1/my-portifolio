// _app.js
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

const theme = extendTheme({
    fonts: {
        body: 'Poppins, sans-serif',
        heading: 'Poppins, sans-serif',
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            {/* Adicione estilos globais, se necessário */}
            <Global
                styles={css`
          /* Adicione estilos globais aqui se necessário */
        `}
            />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;