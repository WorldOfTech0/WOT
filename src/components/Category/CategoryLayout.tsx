import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CATEGORIES } from '../../data/categories/categories';
import SEO from '../SEO/SEO';

interface CategoryLayoutProps {
  categoryId: string;
}

const CategoryLayout = ({ categoryId }: CategoryLayoutProps) => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const category = CATEGORIES.find((c) => c.id === categoryId);

  if (!category) return null;

  const categoryTitle = t(category.navKey);
  const categoryDescription = t(category.subtitleKey);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://worldoftech.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryTitle,
        item: `https://worldoftech.dev/${categoryId}`,
      },
    ],
  };

  return (
    <Box minH="calc(100vh - 120px)" py={8}>
      <SEO
        title={categoryTitle}
        description={categoryDescription}
        canonicalUrl={`/${categoryId}`}
        schema={breadcrumbSchema}
      />
      <Container maxW="container.xl">
        <VStack align="start" gap={12}>
          <Flex
            w="full"
            direction={{ base: 'column', lg: 'row' }}
            align={{ base: 'start', lg: 'flex-end' }}
            justify="space-between"
            gap={6}
          >
            <VStack align="start" gap={4}>
              <Heading size="2xl" color="onSurface">
                {t(category.navKey)}
              </Heading>
              <Text color="onSurfaceVariant" fontSize="lg" maxW="2xl">
                {t(category.subtitleKey)}
              </Text>
            </VStack>

            <HStack
              bg="surfaceContainer/40"
              p={1}
              borderRadius="xl"
              border="1px"
              borderColor="outline"
              backdropFilter="blur(8px)"
            >
              {[
                { mode: 'grid', icon: 'grid_view' },
                { mode: 'list', icon: 'view_list' },
              ].map((item) => (
                <Box
                  key={item.mode}
                  as="button"
                  onClick={() => setViewMode(item.mode as 'grid' | 'list')}
                  p={2}
                  borderRadius="lg"
                  bg={viewMode === item.mode ? 'primary' : 'transparent'}
                  color={
                    viewMode === item.mode ? 'onPrimary' : 'onSurfaceVariant'
                  }
                  transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{
                    bg:
                      viewMode === item.mode
                        ? 'primary'
                        : 'surfaceContainerHigh',
                    color: viewMode === item.mode ? 'onPrimary' : 'onSurface',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '20px' }}
                  >
                    {item.icon}
                  </span>
                </Box>
              ))}
            </HStack>
          </Flex>

          <SimpleGrid
            columns={viewMode === 'grid' ? { base: 1, md: 2 } : 1}
            gap={viewMode === 'grid' ? 2 : 1}
            w="full"
          >
            {category.subcategories.map((sub) => (
              <Link
                key={sub.id}
                to={sub.path}
                style={{ textDecoration: 'none' }}
              >
                <Box
                  bg="surfaceContainer/40"
                  backdropFilter="blur(24px)"
                  borderWidth="1px"
                  borderColor="outline"
                  p={viewMode === 'grid' ? 2 : 1}
                  borderRadius={viewMode === 'grid' ? '2xl' : 'xl'}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{
                    bg: 'surfaceContainer/60',
                    transform:
                      viewMode === 'grid'
                        ? 'translateY(-4px)'
                        : 'translateX(4px)',
                    borderColor: 'primary',
                  }}
                >
                  <Flex
                    direction={viewMode === 'grid' ? 'row' : 'row'}
                    align={viewMode === 'grid' ? 'center' : 'center'}
                    gap={viewMode === 'grid' ? 4 : 5}
                    h={viewMode === 'grid' ? 16 : 10}
                  >
                    <Box
                      as="span"
                      className="material-symbols-outlined"
                      fontSize={viewMode === 'grid' ? '32px' : '24px'}
                      color="primary"
                      bg="primary/10"
                      p={viewMode === 'grid' ? 3 : 2}
                      borderRadius="xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {sub.icon}
                    </Box>
                    <VStack
                      align="start"
                      gap={viewMode === 'grid' ? 2 : 0}
                      flex={1}
                    >
                      <Heading
                        size={viewMode === 'grid' ? 'md' : 'sm'}
                        color="onSurface"
                      >
                        {t(sub.titleKey)}
                      </Heading>
                      <Text
                        color="onSurfaceVariant"
                        fontSize={viewMode === 'grid' ? 'md' : 'sm'}
                        lineClamp={viewMode === 'grid' ? 2 : 1}
                      >
                        {t(sub.titleKey.replace('.title', '.desc'))}
                      </Text>
                    </VStack>
                    {viewMode === 'list' && (
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '18px', opacity: 0.4 }}
                      >
                        chevron_right
                      </span>
                    )}
                  </Flex>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default CategoryLayout;
