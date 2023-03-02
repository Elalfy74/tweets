import { prisma } from '@/server/db';

import { type CreateCommentSchema } from './schemas';

export class CommentsService {
  create(createCommentSchema: CreateCommentSchema) {
    return prisma.comment.create({
      data: createCommentSchema,
    });
  }

  // findOne(id: string) {
  //   return prisma.comment.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  // findAll() {
  //   return prisma.comment.findMany({});
  // }

  // update(id: string) {
  //   prisma.comment.update({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  // remove(id: string) {
  //   return prisma.comment.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}
