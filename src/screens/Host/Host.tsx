import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useMemo } from 'react';

import { CopyrightFooter, TopNavBar, SideNavBar } from '@components';
import { ModalProvider } from '@providers';

const Host = () => {
  const location = useLocation();

  const isSubcategoryRoute = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    return segments.length >= 2;
  }, [location.pathname]);

  return (
    <ModalProvider>
      <Box minH="100vh" bg="bg" color="fg">
        <TopNavBar />
        <SideNavBar />
        <Box
          as="main"
          ml={{
            base: 0,
            md: isSubcategoryRoute ? 16 : 64,
            lg: isSubcategoryRoute ? 80 : 64,
          }}
          minH="calc(100vh - 64px)"
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Outlet />
        </Box>
        <CopyrightFooter />
      </Box>
    </ModalProvider>
  );
};

export default Host;
