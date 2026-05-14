import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories/categories';

interface CategoryLayoutProps {
  categoryId: string;
}

const CategoryLayout = ({ categoryId }: CategoryLayoutProps) => {
  const { t } = useTranslation();
  const category = CATEGORIES.find((c) => c.id === categoryId);

  if (!category) return null;

  return (
    <Box minH="calc(100vh - 120px)" py={12}>
      <Container maxW="container.xl">
        <VStack align="start" gap={12}>
          <VStack align="start" gap={4}>
            <Heading size="2xl" color="onSurface">
              {t(category.navKey)}
            </Heading>
            <Text color="onSurfaceVariant" fontSize="lg" maxW="2xl">
              {t(category.subtitleKey)}
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
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
                  p={8}
                  borderRadius="2xl"
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{
                    bg: "surfaceContainer/60",
                    transform: 'translateY(-4px)',
                    borderColor: 'primary',
                  }}
                >
                  <VStack align="start" gap={4}>
                    <Box
                      as="span"
                      className="material-symbols-outlined"
                      fontSize="32px"
                      color="primary"
                    >
                      {sub.icon}
                    </Box>
                    <Heading size="md" color="onSurface">
                      {t(sub.titleKey)}
                    </Heading>
                    <Text color="onSurfaceVariant">
                      {t(`${sub.titleKey}.desc`)}
                    </Text>
                  </VStack>
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
