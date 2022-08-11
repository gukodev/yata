import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { StorageContextProvider } from '../contexts/StorageContext'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
    return (
        <StorageContextProvider>
            <ChakraProvider theme={theme}>
                <Head>
                    <title>YATA</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <link
                        rel='icon'
                        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>'
                    ></link>
                </Head>
                <Component {...pageProps} />
            </ChakraProvider>
        </StorageContextProvider>
    )
}

export default MyApp
