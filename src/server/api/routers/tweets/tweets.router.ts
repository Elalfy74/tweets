import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { idParamSchema } from '@/server/utils';

import { createTweetSchema } from './schemas';
import { TweetsService } from './tweets.service';

const tweetsService = new TweetsService();

export const tweetsRouter = createTRPCRouter({
  create: publicProcedure
    .input(createTweetSchema)
    .mutation(({ input }) => tweetsService.create(input)),

  findAll: publicProcedure.query(() => tweetsService.findAll()),

  findOne: publicProcedure
    .input(idParamSchema)
    .query(({ input }) => tweetsService.findOne(input.id)),
});
