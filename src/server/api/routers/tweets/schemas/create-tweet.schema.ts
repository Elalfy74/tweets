import { z } from 'zod';

export const createTweetSchema = z.object({
  title: z.string().min(3).max(255),
  body: z.string().min(3).max(255),
});

export type CreateTweetSchema = z.infer<typeof createTweetSchema>;
