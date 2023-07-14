import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import NextNProgress from 'nextjs-progressbar'

import { FipeSearchProvider } from '@/context/FipeSearchContext'
import createEmotionCache from '@/utils/createEmotionCache'
import Header from '@/components/Header'

import { GlobalStyle } from '@/styles/global'
import { theme } from '@/styles/themes/default'
import { Container } from '@/styles/pages/app'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <FipeSearchProvider initialCarList={props.pageProps}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          <Container>
            <Header />
            <NextNProgress color={theme.palette.primary.main} showOnShallow />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </FipeSearchProvider>
    </CacheProvider>
  )
}
