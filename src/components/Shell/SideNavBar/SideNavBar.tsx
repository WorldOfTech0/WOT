import { Flex, Box, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CATEGORIES } from '@data/categories';
import { useMemo, useState } from 'react';

const SideNavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isLibraryExpanded, setIsLibraryExpanded] = useState(true);
  const [isToolsExpanded, setIsToolsExpanded] = useState(true);
  const [isMoreExpanded, setIsMoreExpanded] = useState(true);

  const libraryCategories = CATEGORIES.filter(
    (c) => c.section === 'information_library',
  );
  const toolCategories = CATEGORIES.filter(
    (c) => c.section === 'information_tools',
  );
  const moreCategories = CATEGORIES.filter((c) => c.section === 'more');

  const isSubcategoryRoute = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    return segments.length >= 2;
  }, [location.pathname]);

  const renderNavItems = (
    categories: typeof CATEGORIES,
    startNumber: number,
  ) => {
    return categories.map((category, index) => {
      const label = t(category.navKey);
      const icon = category.icon;
      const path = category.path;
      const isActive =
        path === '/'
          ? location.pathname === '/'
          : location.pathname.startsWith(path);

      return (
        <Box key={label} px={isSubcategoryRoute ? 1 : 4}>
          <NavLink
            to={path}
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <Flex
              direction={isSubcategoryRoute ? 'column' : 'row'}
              align="center"
              gap={isSubcategoryRoute ? 1 : 3}
              bg={
                isActive
                  ? 'rgba(var(--chakra-colors-primary-rgb), 0.15)'
                  : 'transparent'
              }
              color={isActive ? 'primary' : 'onSurfaceVariant'}
              px={isSubcategoryRoute ? 1 : 4}
              py={isSubcategoryRoute ? 1 : 1.5}
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
                  fontSize: '20px',
                  color: isActive ? 'primary' : 'inherit',
                  fontVariationSettings: isActive ? "'FILL' 1" : undefined,
                  transition: 'all 0.3s ease',
                }}
              >
                {icon}
              </span>
              {!isSubcategoryRoute && (
                <Text
                  fontFamily="mono"
                  fontSize="xs"
                  fontWeight={isActive ? 'black' : 'bold'}
                  letterSpacing="0.02em"
                  lineClamp={1}
                  w="full"
                  textAlign="left"
                >
                  {label}
                </Text>
              )}
              {isSubcategoryRoute && (
                <Text
                  fontFamily="mono"
                  fontSize="8px"
                  fontWeight={isActive ? 'black' : 'bold'}
                  letterSpacing="0.01em"
                  lineClamp={3}
                  w="full"
                  textAlign="center"
                >
                  {label}
                </Text>
              )}
            </Flex>
          </NavLink>
        </Box>
      );
    });
  };

  const NavSectionHeader = ({
    title,
    isCollapsible = false,
    isExpanded = true,
    onToggle,
  }: {
    title: string;
    isCollapsible?: boolean;
    isExpanded?: boolean;
    onToggle?: () => void;
  }) => (
    <Box
      px={6}
      mb={2}
      mt={4}
      cursor={isCollapsible ? 'pointer' : 'default'}
      onClick={onToggle}
      transition="all 0.2s ease"
      _hover={isCollapsible ? { opacity: 1, transform: 'translateX(2px)' } : {}}
    >
      <Flex align="center" justify="space-between">
        <Text
          fontFamily="mono"
          fontSize="10px"
          fontWeight="black"
          color="primary"
          textTransform="uppercase"
          letterSpacing="0.2em"
          opacity={0.8}
        >
          {title}
        </Text>
        {isCollapsible && (
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '16px',
              color: 'var(--chakra-colors-primary)',
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            expand_more
          </span>
        )}
      </Flex>
      <Box h="1px" w="full" bg="primary/10" mt={1} />
    </Box>
  );

  return (
    <Flex
      as="nav"
      direction="column"
      gap={0.5}
      pt={8}
      pb={32}
      h="100vh"
      w={isSubcategoryRoute ? '20' : '64'}
      position="fixed"
      left={0}
      top={12}
      bg="bg"
      backdropFilter="blur(16px)"
      borderRightWidth={1}
      borderColor="outline"
      zIndex={40}
      display={{ base: 'none', md: 'flex' }}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      alignItems={isSubcategoryRoute ? 'center' : 'stretch'}
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': { width: '4px' },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': {
          background: 'var(--chakra-colors-outline)',
          borderRadius: '24px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'var(--chakra-colors-primary)',
        },
      }}
    >
      {!isSubcategoryRoute && (
        <Box px={6} mb={2} transition="opacity 0.2s ease" opacity={1}>
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

      <Flex direction="column" gap={1} w="full">
        {!isSubcategoryRoute && (
          <NavSectionHeader
            title="Information Library"
            isCollapsible
            isExpanded={isLibraryExpanded}
            onToggle={() => setIsLibraryExpanded(!isLibraryExpanded)}
          />
        )}
        <Box
          overflow="hidden"
          maxH={isLibraryExpanded ? '2000px' : '0px'}
          transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
          opacity={isLibraryExpanded ? 1 : 0}
        >
          {renderNavItems(libraryCategories, 1)}
        </Box>

        {!isSubcategoryRoute && (
          <NavSectionHeader
            title="Information Tools"
            isCollapsible
            isExpanded={isToolsExpanded}
            onToggle={() => setIsToolsExpanded(!isToolsExpanded)}
          />
        )}
        <Box
          overflow="hidden"
          maxH={isToolsExpanded ? '2000px' : '0px'}
          transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
          opacity={isToolsExpanded ? 1 : 0}
        >
          {renderNavItems(toolCategories, libraryCategories.length + 1)}
        </Box>

        {!isSubcategoryRoute && (
          <NavSectionHeader
            title="More"
            isCollapsible
            isExpanded={isMoreExpanded}
            onToggle={() => setIsMoreExpanded(!isMoreExpanded)}
          />
        )}
        <Box
          overflow="hidden"
          maxH={isMoreExpanded ? '500px' : '0px'}
          transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
          opacity={isMoreExpanded ? 1 : 0}
        >
          {renderNavItems(
            moreCategories,
            libraryCategories.length + toolCategories.length + 1,
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default SideNavBar;
