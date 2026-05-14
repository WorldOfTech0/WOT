import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Text,
  VStack,
  Container,
  HStack,
  Spinner,
  Center,
  Flex,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';
import { CATEGORIES } from '../../data/categories/categories';
import { MdPreview, SubcategorySideBar, TableOfContents } from '@components';

const extractHeadings = (markdown: string) => {
  const lines = markdown.split('\n');
  const headings = [];
  for (const line of lines) {
    // Match #, ##, ### but not code blocks
    const match = line.match(/^(#{1,4})\s+(.*)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      // Simple slugify that matches common markdown-preview behavior
      const id = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
      headings.push({ level, text, id });
    }
  }
  return headings;
};

const ContentViewer = () => {
  const { category: categoryId, subcategory: subcategoryId } = useParams();
  const { t } = useTranslation();
  const [mdContent, setMdContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const category = CATEGORIES.find((c) => c.id === categoryId);
  const subcategory = category?.subcategories.find(
    (s) => s.id === subcategoryId,
  );

  useEffect(() => {
    const loadContent = async () => {
      if (subcategory?.docName) {
        setLoading(true);
        try {
          // Dynamic import for markdown files
          const module = await import(
            `../../docs/tools/${subcategory.docName}.md`
          );
          const rawContent = module.default;

          // If the loader returned a URL instead of content, fetch it
          if (
            typeof rawContent === 'string' &&
            (rawContent.startsWith('data:') ||
              rawContent.startsWith('/') ||
              rawContent.startsWith('http') ||
              rawContent.includes('.md'))
          ) {
            const response = await fetch(rawContent);
            const text = await response.text();
            setMdContent(text);
          } else {
            setMdContent(rawContent || '');
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Failed to load markdown content:', error);
          setMdContent('');
        } finally {
          setLoading(false);
        }
      } else {
        // Fallback to translation key if docName is not provided
        setMdContent(subcategory?.contentKey ? t(subcategory.contentKey) : '');
      }
    };

    loadContent();
  }, [subcategory, t]);

  const headings = useMemo(() => extractHeadings(mdContent), [mdContent]);

  return (
    <Box minH="calc(100vh - 120px)" py={8}>
      {category && subcategoryId && (
        <SubcategorySideBar
          category={category}
          currentSubcategoryId={subcategoryId}
        />
      )}
      <Container maxW="container.xl">
        <Flex w="full" gap={{ base: 0, xl: 12 }} align="start">
          <VStack align="start" gap={2} flex={1}>
            <HStack
              gap={2}
              fontSize="xs"
              color="onSurfaceVariant"
              fontFamily="mono"
            >
              <RouterLink to="/">
                <Text _hover={{ color: 'primary' }} cursor="pointer">
                  SYSTEM
                </Text>
              </RouterLink>
              <Text>/</Text>
              {category && (
                <>
                  <RouterLink to={category.path}>
                    <Text
                      _hover={{ color: 'primary' }}
                      cursor="pointer"
                      textTransform="uppercase"
                    >
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

            <Text
              color="onSurfaceVariant"
              fontSize="xl"
              maxW="3xl"
              marginTop={'2em'}
            >
              {subcategory
                ? t(subcategory.titleKey.replace('.title', '.desc'))
                : `Deep dive into the ${subcategoryId} ecosystem.`}
            </Text>

            {loading ? (
              <Center w="full" py={20}>
                <VStack gap={4}>
                  <Spinner size="xl" color="primary" borderWidth="4px" />
                  <Text color="onSurfaceVariant" fontFamily="mono" fontSize="sm">
                    LOADING_DOCUMENTATION...
                  </Text>
                </VStack>
              </Center>
            ) : mdContent ? (
              <Box w="full">
                <MdPreview mdString={mdContent} />
              </Box>
            ) : (
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
                    The curated directory for{' '}
                    <b>{subcategory ? t(subcategory.titleKey) : subcategoryId}</b>{' '}
                    is currently in synchronization. Our engineers are finalizing
                    the integration of industrial-grade resources, architectural
                    patterns, and performance-optimized frameworks.
                  </Text>

                  <Box
                    px={4}
                    py={2}
                    borderRadius="full"
                    bg="surfaceContainerHigh"
                    borderWidth="1px"
                    borderColor="outline"
                  >
                    <Text
                      fontSize="xs"
                      fontFamily="mono"
                      color="primary"
                      fontWeight="bold"
                    >
                      STATUS: SYNCHRONIZING_CONTENT
                    </Text>
                  </Box>
                </VStack>
              </Box>
            )}
          </VStack>
          <TableOfContents headings={headings} />
        </Flex>
      </Container>
    </Box>
  );
};

export default ContentViewer;
