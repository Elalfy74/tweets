import { Button, Group, Paper, Title } from '@mantine/core';
import { Tweet } from '@prisma/client';
import Link from 'next/link';

export const SingleTweet = ({ tweet }: { tweet: Tweet }) => {
  return (
    <Paper withBorder shadow='md' p={30} mt={20} radius='md'>
      <Group position='apart'>
        <Title order={2} mr='md' truncate>
          {tweet.title}
        </Title>

        <Button component={Link} href={`/tweets/${tweet.id}`} size='md'>
          View
        </Button>
      </Group>
    </Paper>
  );
};
