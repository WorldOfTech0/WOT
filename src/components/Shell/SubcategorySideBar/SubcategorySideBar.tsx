import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Category } from '@data/categories/types';

interface SubcategorySideBarProps {
  category: Category;
  currentSubcategoryId: string;
}

const SubcategorySideBar = ({
  category,
  currentSubcategoryId,
}: SubcategorySideBarProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      as="aside"
      direction="column"
      pt={8}
      h="100vh"
      w="64"
      position="fixed"
      left="16" // Positioned right of the main 16-width sidebar
      top={12}
      bg="surfaceContainer/40"
      backdropFilter="blur(24px)"
      borderRightWidth={1}
      borderColor="outline"
      zIndex={35}
      display={{ base: 'none', lg: 'flex' }}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <Box px={6} mb={4}>
        <Text
          fontFamily="mono"
          fontSize="2xs"
          color="primary"
          textTransform="uppercase"
          letterSpacing="0.2em"
          mb={1}
          fontWeight="black"
        >
          {t(category.navKey)}
        </Text>
        <Text
          fontFamily="body"
          fontSize="xs"
          color="onSurfaceVariant"
          fontWeight="medium"
          lineClamp={1}
        >
          {t('Navigation.subHeader')}
        </Text>
      </Box>

      <VStack
        align="stretch"
        gap={0}
        px={3}
        pb={24}
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': { width: '4px' },
          '&::-webkit-scrollbar-track': { background: 'transparent' },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(var(--chakra-colors-primary-rgb), 0.2)',
            borderRadius: '2px',
          },
        }}
      >
        {category.subcategories.map((sub) => {
          const isActive = sub.id === currentSubcategoryId;

          return (
            <NavLink
              key={sub.id}
              to={sub.path}
              style={{ textDecoration: 'none' }}
            >
              <Flex
                align="center"
                gap={2}
                bg={
                  isActive
                    ? 'rgba(var(--chakra-colors-primary-rgb), 0.1)'
                    : 'transparent'
                }
                color={isActive ? 'primary' : 'onSurfaceVariant'}
                px={4}
                py={2}
                borderRadius="lg"
                transition="all 0.2s ease"
                _hover={{
                  bg: isActive
                    ? 'rgba(var(--chakra-colors-primary-rgb), 0.15)'
                    : 'surfaceContainerHigh/40',
                  color: 'onSurface',
                  transform: 'translateX(4px)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '18px',
                    opacity: isActive ? 1 : 0.7,
                  }}
                >
                  {sub.icon}
                </span>
                <Text
                  fontSize="sm"
                  fontWeight={isActive ? 'bold' : 'medium'}
                  lineClamp={2}
                >
                  {t(sub.titleKey)}
                </Text>
              </Flex>
            </NavLink>
          );
        })}
      </VStack>
    </Flex>
  );
};

export default SubcategorySideBar;
