import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { CopyrightFooter, TopNavBar, SideNavBar } from '@components';

const Host = () => {
  return (
    <Box minH="100vh" bg="black" color="white">
      <TopNavBar />
      <SideNavBar />
      <Box as="main" ml={{ base: 0, md: 64 }} minH="calc(100vh - 64px)">
        <Outlet />
      </Box>
      <CopyrightFooter />
    </Box>
  );
};

export default Host;
