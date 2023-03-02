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
import { useRouter } from 'next/router';
import { z } from 'zod';

import { api } from '@/utils/api';

const schema = z.object({
  title: z.string().min(3, { message: 'Title should have at least 3 letters' }),
  body: z.string().min(3, { message: 'Body should have at least 3 letters' }),
});

export function CreateTweet() {
  const router = useRouter();

  const { mutate, isLoading } = api.tweets.create.useMutation({
    onSuccess: () => {
      router.push('/tweets');
    },
  });

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      title: '',
      body: '',
    },
  });

  return (
    <>
      <Title
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        New Tweet
      </Title>

      <Paper
        component='form'
        onSubmit={form.onSubmit((values) => mutate(values))}
        withBorder
        shadow='md'
        p={30}
        mt={20}
        radius='md'
      >
        <TextInput
          label='Title'
          withAsterisk
          {...form.getInputProps('title')}
        />

        <Textarea
          label='Body'
          minRows={6}
          maxRows={6}
          withAsterisk
          {...form.getInputProps('body')}
        />

        <Box ta='right'>
          <Button type='submit' mt='xl' size='lg'>
            {isLoading ? <Loader variant='dots' color='white' /> : 'Tweet'}
          </Button>
        </Box>
      </Paper>
    </>
  );
}
