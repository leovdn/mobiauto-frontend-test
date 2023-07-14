import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@/utils/createEmotionCache'

import { GlobalStyle } from '@/styles/global'
import { theme } from '@/styles/themes/default'
import { FipeSearchProvider } from '@/context/FipeSearchContext'
import { Container, Header } from '@/styles/pages/app'

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
            <Header>Front-End Teste - Consulta Tabela Fipe</Header>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </FipeSearchProvider>
    </CacheProvider>
  )
}
