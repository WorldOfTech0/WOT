import { Flex, Box, Text, HStack } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CATEGORIES } from '@data/categories';


const SideNavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = CATEGORIES.map((category) => ({
    label: t(category.navKey),
    icon: category.icon,
    path: category.path,
  }));


  return (
    <Flex
      as="nav"
      direction="column"
      gap={1}
      pt={8}
      h="100vh"
      w="64"
      position="fixed"
      left={0}
      top={16}
      bg="bg"
      backdropFilter="blur(16px)"
      borderRightWidth={1}
      borderColor="outline"
      zIndex={40}
      display={{ base: 'none', md: 'flex' }}
      transition="all 0.3s ease"
    >
      <Box px={6} mb={8}>
        <Text
          fontFamily="mono"
          fontSize="2xs"
          color="primary"
          textTransform="uppercase"
          letterSpacing="0.2em"
          mb={2}
          fontWeight="black"
        >
          {t('Navigation.header')}
        </Text>
        <Box h="1px" w="12" bg="primary" opacity={0.4} mb={2} />
        <Text
          fontFamily="body"
          fontSize="xs"
          color="onSurfaceVariant"
          fontWeight="medium"
        >
          {t('Navigation.subHeader')}
        </Text>
      </Box>

      <Flex direction="column" gap={2}>
        {navItems.map((item) => {
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path);

          return (
            <Box key={item.label} px={4}>
              <NavLink
                to={item.path}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <HStack
                  gap={3}
                  bg={isActive ? 'rgba(139, 92, 246, 0.15)' : 'transparent'}
                  color={isActive ? 'primary' : 'onSurfaceVariant'}
                  px={4}
                  py={3.5}
                  borderRadius="xl"
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    bg: isActive
                      ? 'rgba(139, 92, 246, 0.2)'
                      : 'surfaceContainerHigh',
                    color: 'onSurface',
                    transform: 'translateX(4px)',
                  }}
                >
                  {isActive && (
                    <Box
                      position="absolute"
                      left={0}
                      top="0"
                      bottom="0"
                      width="4px"
                      bg="primary"
                      boxShadow="0 0 15px #8b5cf6"
                    />
                  )}
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '20px',
                      color: isActive ? '#8b5cf6' : 'inherit',
                      fontVariationSettings: isActive ? "'FILL' 1" : undefined,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.icon}
                  </span>
                  <Text
                    fontFamily="mono"
                    fontSize="xs"
                    fontWeight={isActive ? 'black' : 'bold'}
                    letterSpacing="0.02em"
                  >
                    {item.label}
                  </Text>
                </HStack>
              </NavLink>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default SideNavBar;
