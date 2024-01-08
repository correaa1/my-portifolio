import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'gray.800', // ou qualquer cor que você deseje
                color: 'white',
            },

        },
    },
});

export default theme;
