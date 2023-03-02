import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { MainLayout } from '@/layouts';
import { api } from '@/utils/api';

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Tweets</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          primaryColor: 'teal',
          components: {
            Anchor: {
              styles: (theme) => ({
                root: {
                  color: theme.white,
                  ':hover': {
                    textDecoration: 'none',
                  },
                },
              }),
            },
          },
        }}
      >
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </>
  );
}

export default api.withTRPC(App);
