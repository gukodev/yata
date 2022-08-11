import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            50: '#F2F2F2',
            100: '#DBDBDB',
            200: '#C4C4C4',
            300: '#ADADAD',
            400: '#969696',
            500: '#808080',
            600: '#666666',
            700: '#4D4D4D',
            800: '#333333',
            900: '#1A1A1A',
        },
        purple: {
            50: '#F2E6FE',
            100: '#DBBAFD',
            200: '#C48DFC',
            300: '#AD60FA',
            400: '#9634F9',
            500: '#7F07F8',
            600: '#6606C6',
            700: '#4C0495',
            800: '#330363',
            900: '#190132',
        },
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    fonts: {
        body: '"Poppins", sans-serif',
        heading: '"Poppins", sans-serif',
    },
    components: {
        Text: {
            variants: {
                muted: {
                    color: 'gray.500',
                },
            },
        },
    },
    styles: {
        global: (props) => ({
            body: {
                background: 'gray.900',
            },
            '::selection': {
                background: 'purple.300',
                color: 'white',
            },
        }),
    },
})
