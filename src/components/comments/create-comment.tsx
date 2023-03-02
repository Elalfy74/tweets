import {
  Box,
  Button,
  Loader,
  Paper,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { z } from 'zod';

import { api } from '@/utils/api';

const schema = z.object({
  body: z
    .string()
    .min(3, { message: 'Comment should have at least 3 letters' }),
});

export const CreateComment = ({ tweetId }: { tweetId: string }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      body: '',
    },
  });

  const { mutate, isLoading } = api.comments.create.useMutation({
    onSuccess: () => {
      form.reset();
      queryClient.invalidateQueries([
        ['tweets', 'findOne'],
        { input: { id: tweetId }, type: 'query' },
      ]);
    },
  });

  return (
    <>
      <Title
        order={3}
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        New Comment
      </Title>

      <Paper
        component='form'
        onSubmit={form.onSubmit((values) =>
          mutate({
            ...values,
            tweetId,
          })
        )}
        withBorder
        shadow='md'
        p={30}
        mt={10}
        radius='md'
      >
        <Textarea
          minRows={6}
          maxRows={6}
          withAsterisk
          {...form.getInputProps('body')}
        />

        <Box ta='right'>
          <Button type='submit' mt='xl' size='lg'>
            {isLoading ? <Loader variant='dots' color='white' /> : 'Comment'}
          </Button>
        </Box>
      </Paper>
    </>
  );
};
