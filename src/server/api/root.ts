import { createTRPCRouter } from '@/server/api/trpc';

import { CommentsRouter } from './routers/comments/comments.router';
import { tweetsRouter } from './routers/tweets/tweets.router';

export const appRouter = createTRPCRouter({
  tweets: tweetsRouter,
  comments: CommentsRouter,
});

export type AppRouter = typeof appRouter;
