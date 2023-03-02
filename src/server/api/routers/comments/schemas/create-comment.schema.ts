import { z } from 'zod';

export const createCommentSchema = z.object({
  tweetId: z.string().min(3).max(255),
  body: z.string().min(3).max(255),
});

export type CreateCommentSchema = z.infer<typeof createCommentSchema>;
