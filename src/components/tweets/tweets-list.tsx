import { Stack } from '@mantine/core';
import { type Tweet } from '@prisma/client';

import { SingleTweet } from './single-tweet';

export const TweetsList = ({ tweets }: { tweets: Tweet[] }) => {
  return (
    <Stack spacing='md'>
      {tweets.map((tweet) => (
        <SingleTweet key={tweet.id} tweet={tweet} />
      ))}
    </Stack>
  );
};
