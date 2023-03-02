import { Container } from '@mantine/core';

import { MainHeader } from './header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};
