import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({


    styles: {

        global: {
            body: {
                fontFamily:'Montserrat, sans-serif',
                bg:'#131325',
                color: 'white',
            },

        },
    },
});

export default theme;
