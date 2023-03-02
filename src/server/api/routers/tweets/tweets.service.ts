import { prisma } from '@/server/db';

import { type CreateTweetSchema } from './schemas';

export class TweetsService {
  create(createTweetSchema: CreateTweetSchema) {
    return prisma.tweet.create({
      data: createTweetSchema,
    });
  }

  findOne(id: string) {
    return prisma.tweet.findUnique({
      where: {
        id,
      },
      include: {
        comments: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });
  }

  findAll() {
    return prisma.tweet.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // update(id: string) {
  //   prisma.tweet.update({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  remove(id: string) {
    return prisma.tweet.delete({
      where: {
        id,
      },
    });
  }
}
