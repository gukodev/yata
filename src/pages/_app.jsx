import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>YATA</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
