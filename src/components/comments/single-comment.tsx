import { Paper, Text } from '@mantine/core';
import { Comment } from '@prisma/client';

export const SingleComment = ({ comment }: { comment: Comment }) => {
  return (
    <Paper withBorder shadow='xs' p={30}>
      <Text>{comment.body}</Text>
    </Paper>
  );
};
