import { Container } from '@mantine/core';
import Head from 'next/head';

import { CreateTweet } from '@/components/tweets';

export default function CreateTweetPage() {
  return (
    <>
      <Head>
        <title>Create Tweet</title>
        <meta name='description' content='Create Tweet' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container size={700} my={40}>
        <CreateTweet />
      </Container>
    </>
  );
}
