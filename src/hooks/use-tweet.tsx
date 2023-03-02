import { Tweet } from '@prisma/client';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { api } from '@/utils/api';

export const useTweet = () => {
  const router = useRouter();
  const tweetId = router.query.tweetId as string;
  const queryClient = useQueryClient();

  const { data: tweet, isLoading } = api.tweets.findOne.useQuery(
    {
      id: tweetId,
    },
    {
      enabled: !!tweetId,
      initialData: () => {
        const tweets = queryClient.getQueryData([
          ['tweets', 'findAll'],
          { type: 'query' },
        ]) as Tweet[] | undefined;

        if (!tweets) return;

        const tweet = tweets.find((tweet) => tweet.id === tweetId);
        if (!tweet) return;

        return { ...tweet, comments: [] };
      },
    }
  );

  if (tweet === null) {
    router.replace('/404');
  }

  return {
    isLoading,
    tweet,
    tweetId,
  };
};
