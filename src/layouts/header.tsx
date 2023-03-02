import {
  Anchor,
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  rem,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  {
    label: 'Home',
    link: '/tweets',
  },
  {
    label: 'Create Tweet',
    link: '/create-tweet',
  },
];
const HEADER_HEIGHT = rem(84);

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,
    borderBottom: 0,
  },

  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: -theme.spacing.sm,
  },

  mainLink: {
    textTransform: 'uppercase',
    fontSize: rem(16),
    padding: `${rem(10)} ${theme.spacing.md}`,
    fontWeight: 700,
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, opacity 100ms ease',
    opacity: 0.9,
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,
    '&:hover': {
      opacity: 1,
    },
  },

  mainLinkActive: {
    color: theme.white,
    opacity: 1,
    borderBottomColor:
      theme.colorScheme === 'dark'
        ? theme.white
        : theme.colors[theme.primaryColor][5],
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background!,
      0.1
    ),
  },
}));

export function MainHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const router = useRouter();

  const mainItems = links.map((item, index) => (
    <Anchor
      component={Link}
      href={item.link}
      key={item.label}
      className={cx(classes.mainLink, {
        [classes.mainLinkActive]: router.pathname === item.link,
      })}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Header
      height={HEADER_HEIGHT}
      mb={{
        xs: 60,
        lg: 120,
      }}
      className={classes.header}
    >
      <Container className={classes.inner}>
        <Title size={34}>
          <Anchor component={Link} href='/'>
            Tweets
          </Anchor>
        </Title>

        <div className={classes.links}>
          <Group spacing={0} position='right' className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size='sm'
          color='#fff'
        />
      </Container>
    </Header>
  );
}
