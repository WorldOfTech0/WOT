import { Flex, Box, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CATEGORIES } from '@data/categories';
import { useMemo } from 'react';

const SideNavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = CATEGORIES.map((category) => ({
    label: t(category.navKey),
    icon: category.icon,
    path: category.path,
  }));

  const isSubcategoryRoute = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    return segments.length >= 2;
  }, [location.pathname]);

  return (
    <Flex
      as="nav"
      direction="column"
      gap={1}
      pt={8}
      h="100vh"
      w={isSubcategoryRoute ? '16' : '64'}
      position="fixed"
      left={0}
      top={16}
      bg="bg"
      backdropFilter="blur(16px)"
      borderRightWidth={1}
      borderColor="outline"
      zIndex={40}
      display={{ base: 'none', md: 'flex' }}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      alignItems={isSubcategoryRoute ? 'center' : 'stretch'}
    >
      {!isSubcategoryRoute && (
        <Box px={6} mb={8} transition="opacity 0.2s ease" opacity={1}>
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
      )}

      <Flex direction="column" gap={2} w="full">
        {navItems.map((item) => {
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path);

          return (
            <Box key={item.label} px={isSubcategoryRoute ? 1 : 4}>
              <NavLink
                to={item.path}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <Flex
                  direction={isSubcategoryRoute ? 'column' : 'row'}
                  align="center"
                  gap={isSubcategoryRoute ? 1 : 3}
                  bg={isActive ? 'rgba(var(--chakra-colors-primary-rgb), 0.15)' : 'transparent'}
                  color={isActive ? 'primary' : 'onSurfaceVariant'}
                  px={isSubcategoryRoute ? 1 : 4}
                  py={isSubcategoryRoute ? 2 : 3.5}
                  borderRadius="xl"
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  position="relative"
                  overflow="hidden"
                  textAlign="center"
                  _hover={{
                    bg: isActive
                      ? 'rgba(var(--chakra-colors-primary-rgb), 0.2)'
                      : 'surfaceContainerHigh',
                    color: 'onSurface',
                    transform: isSubcategoryRoute
                      ? 'scale(1.05)'
                      : 'translateX(4px)',
                  }}
                >
                  {isActive && !isSubcategoryRoute && (
                    <Box
                      position="absolute"
                      left={0}
                      top="0"
                      bottom="0"
                      width="4px"
                      bg="primary"
                      boxShadow="0 0 15px var(--chakra-colors-primary)"
                    />
                  )}
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: isSubcategoryRoute ? '20px' : '20px',
                      color: isActive ? 'primary' : 'inherit',
                      fontVariationSettings: isActive ? "'FILL' 1" : undefined,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.icon}
                  </span>
                  <Text
                    fontFamily="mono"
                    fontSize={isSubcategoryRoute ? '8px' : 'xs'}
                    fontWeight={isActive ? 'black' : 'bold'}
                    letterSpacing="0.02em"
                    lineClamp={1}
                    w="full"
                    textAlign="center"
                  >
                    {item.label}
                  </Text>
                </Flex>
              </NavLink>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default SideNavBar;
