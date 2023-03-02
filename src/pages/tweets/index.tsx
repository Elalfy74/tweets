import { Button, Container, Skeleton, Stack, Title } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';

import { TweetsList } from '@/components/tweets';
import { api } from '@/utils/api';

const LoadingSkeletons = () => {
  const arr = new Array(4).fill('');

  return (
    <Stack spacing='lg' mt='lg'>
      {arr.map((item, i) => (
        <Skeleton key={i} visible height={150} radius='md' />
      ))}
    </Stack>
  );
};

export default function Tweets() {
  const { data: tweets, isLoading } = api.tweets.findAll.useQuery();

  const Content = () => {
    if (isLoading || !tweets) {
      return <LoadingSkeletons />;
    }

    if (tweets.length === 0) {
      return (
        <Stack align='center' spacing='xl'>
          <Title>No Tweets Yet!</Title>
          <Button
            variant='outline'
            size='lg'
            component={Link}
            href='/create-tweet'
          >
            Create Tweet
          </Button>
        </Stack>
      );
    }

    return <TweetsList tweets={tweets} />;
  };

  return (
    <>
      <Head>
        <title>All Tweets</title>
      </Head>
      <Container size={700} my={40}>
        <Content />
      </Container>
    </>
  );
}
