import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

// import { idParamSchema } from '@/server/utils';
import { CommentsService } from './comments.service';
import { createCommentSchema } from './schemas';

const commentsService = new CommentsService();

export const CommentsRouter = createTRPCRouter({
  create: publicProcedure
    .input(createCommentSchema)
    .mutation(({ input }) => commentsService.create(input)),

  // findAll: publicProcedure.query(() => commentsService.findAll()),

  // findOne: publicProcedure
  //   .input(idParamSchema)
  //   .query(({ input }) => commentsService.findOne(input.id)),
});
