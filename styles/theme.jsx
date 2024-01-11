import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily:'Montserrat, sans-serif',
                bg: 'gray.800',
                color: 'white',
            },

        },
    },
});

export default theme;
