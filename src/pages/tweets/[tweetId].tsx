import { Center, Container, Loader, Paper, Text, Title } from '@mantine/core';
import Head from 'next/head';

import { CommentsList, CreateComment } from '@/components/comments';
import { useTweet } from '@/hooks';

const TweetView = () => {
  const { isLoading, tweet, tweetId } = useTweet();

  if (isLoading) {
    return (
      <Center mt='xl'>
        <Loader size='lg' />
      </Center>
    );
  }

  if (!tweet) return;

  return (
    <>
      <Head>
        <title>{tweet.title}</title>
      </Head>
      <Container size={700} my={40}>
        <Paper withBorder shadow='xs' p={30} mb={40}>
          <Title order={1} mb={10}>
            {tweet?.title}
          </Title>
          <Text size={20}>{tweet?.body}</Text>
        </Paper>

        <CreateComment tweetId={tweetId} />
        <CommentsList comments={tweet.comments} />
      </Container>
    </>
  );
};

export default TweetView;
