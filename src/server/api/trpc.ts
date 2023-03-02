import { initTRPC } from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import SuperJSON from 'superjson';

// import { prisma } from '@/server/db';

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  return {
    req,
    res,
    // prisma,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: SuperJSON,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
