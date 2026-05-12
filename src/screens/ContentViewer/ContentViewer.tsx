import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Text, VStack, Container, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { CATEGORIES } from '../../data/categories/categories';

const ContentViewer = () => {
  const { category: categoryId, subcategory: subcategoryId } = useParams();
  const { t } = useTranslation();

  const category = CATEGORIES.find(c => c.id === categoryId);
  const subcategory = category?.subcategories.find(s => s.id === subcategoryId);

  return (
    <Box minH="calc(100vh - 120px)" py={8}>
      <Container maxW="container.xl">
        <VStack align="start" gap={8}>
          <HStack gap={2} fontSize="xs" color="onSurfaceVariant" fontFamily="mono">
            <RouterLink to="/">
              <Text _hover={{ color: 'primary' }} cursor="pointer">SYSTEM</Text>
            </RouterLink>
            <Text>/</Text>
            {category && (
              <>
                <RouterLink to={category.path}>
                  <Text _hover={{ color: 'primary' }} cursor="pointer" textTransform="uppercase">
                    {t(category.navKey)}
                  </Text>
                </RouterLink>
                <Text>/</Text>
              </>
            )}
            <Text color="primary" textTransform="uppercase" fontWeight="bold">
              {subcategory ? t(subcategory.titleKey) : subcategoryId}
            </Text>
          </HStack>

          <VStack align="start" gap={4} w="full">
            <Heading
              size="3xl"
              color="onSurface"
              fontWeight="black"
              letterSpacing="tighter"
              bgGradient="linear(to-r, onSurface, onSurfaceVariant)"
              bgClip="text"
            >
              {subcategory ? t(subcategory.titleKey) : subcategoryId?.replace(/-/g, ' ')}
            </Heading>
            <Text color="onSurfaceVariant" fontSize="xl" maxW="3xl">
              {subcategory ? t(`${subcategory.titleKey}.desc`) : `Deep dive into the ${subcategoryId} ecosystem.`}
            </Text>
          </VStack>

          <Box
            w="full"
            p={12}
            borderRadius="4xl"
            bg="rgba(255, 255, 255, 0.01)"
            backdropFilter="blur(32px)"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.05)"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              bgGradient: 'linear(to-r, transparent, primary, transparent)',
              opacity: 0.5,
            }}
          >
            <VStack align="start" gap={6}>
              <Text color="onSurface" fontSize="md" lineHeight="tall">
                The curated directory for <b>{subcategory ? t(subcategory.titleKey) : subcategoryId}</b> is currently in synchronization. 
                Our engineers are finalizing the integration of industrial-grade resources, 
                architectural patterns, and performance-optimized frameworks.
              </Text>
              
              <Box 
                px={4} 
                py={2} 
                borderRadius="full" 
                bg="surfaceContainerHigh" 
                borderWidth="1px" 
                borderColor="outline"
              >
                <Text fontSize="xs" fontFamily="mono" color="primary" fontWeight="bold">
                  STATUS: SYNCHRONIZING_CONTENT
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContentViewer;
