import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { CopyrightFooter, TopNavBar, SideNavBar } from '@components';
import { ModalProvider } from '@providers';

const Host = () => {
  return (
    <ModalProvider>
      <Box minH="100vh" bg="bg" color="fg">
        <TopNavBar />
        <SideNavBar />
        <Box as="main" ml={{ base: 0, md: 64 }} minH="calc(100vh - 64px)">
          <Outlet />
        </Box>
        <CopyrightFooter />
      </Box>
    </ModalProvider>
  );
};

export default Host;
