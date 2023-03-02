import { Center, Stack, Title } from '@mantine/core';
import { Comment } from '@prisma/client';

import { SingleComment } from './single-comment';

export const CommentsList = ({ comments }: { comments: Comment[] }) => {
  if (comments.length === 0) {
    return (
      <Center>
        <Title order={3} mt={50} mb={5}>
          No Comments
        </Title>
      </Center>
    );
  }
  return (
    <>
      <Title order={3} mt={50} mb={5}>
        Comments
      </Title>
      <Stack spacing='md'>
        {comments.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))}
      </Stack>
    </>
  );
};
