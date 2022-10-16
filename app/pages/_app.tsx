import React from 'react';

import Head from 'next/head';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';

import theme from '../src/styles/theme';
import { wrapper } from '../store/store';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(MyApp);
