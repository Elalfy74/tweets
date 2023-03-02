import {
  Box,
  Button,
  Container,
  createStyles,
  rem,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    maxWidth: '100%',
    height: 'auto',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    maxWidth: '100%',
    height: 'auto',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

export default function NotFoundImage() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Container className={classes.root}>
        <SimpleGrid
          spacing={80}
          cols={2}
          breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
        >
          <Image
            src='/404.svg'
            alt='404'
            width={600}
            height={600}
            className={classes.mobileImage}
          />
          <Box>
            <Title className={classes.title}>Something is not right...</Title>
            <Text color='dimmed' size='lg'>
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you
              think this is an error contact support.
            </Text>
            <Button
              component={Link}
              href={'/tweets'}
              variant='outline'
              size='md'
              mt='xl'
              className={classes.control}
            >
              Get back to home page
            </Button>
          </Box>
          <Image
            src='/404.svg'
            alt='404'
            width={600}
            height={600}
            className={classes.desktopImage}
          />
        </SimpleGrid>
      </Container>
    </>
  );
}
