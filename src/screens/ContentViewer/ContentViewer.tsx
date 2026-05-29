import { useParams, Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Text,
  VStack,
  Container,
  HStack,
  Spinner,
  Center,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';
import { CATEGORIES } from '../../data/categories/categories';
import {
  MdPreview,
  SubcategorySideBar,
  TableOfContents,
  SEO,
} from '@components';
import { appStore } from '@appStore';
import { useShallow } from 'zustand/react/shallow';

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

const getCleanDescription = (markdown: string, fallback: string) => {
  if (!markdown) return fallback;
  // Remove markdown headers, bold, links, code blocks
  const clean = markdown
    .replace(/#{1,6}\s+/g, '') // remove headers
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // remove links keep text
    .replace(/`{1,3}[^`]*`{1,3}/g, '') // remove code snippets
    .replace(/[*_~`\-+]/g, '') // remove markdown characters
    .replace(/\s+/g, ' ') // normalize spacing
    .trim();

  if (clean.length > 155) {
    return clean.slice(0, 152) + '...';
  }
  return clean || fallback;
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
          // Dynamic import for markdown files based on section
          let module;
          if (categoryId === 'awesome-library') {
            module = await import(`../../docs/${subcategory.docName}.md`);
          } else if (category?.section === 'information_library') {
            module = await import(
              `../../docs/information_library/${categoryId}/${subcategory.docName}.md`
            );
          } else if (category?.section === 'information_tools') {
            module = await import(
              `../../docs/information_tools/${categoryId}/${subcategory.docName}.md`
            );
          } else if (category?.section === 'more') {
            module = await import(
              `../../docs/more/${categoryId}/${subcategory.docName}.md`
            );
          }
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
  }, [subcategory, t, category?.section, categoryId]);

  const headings = useMemo(() => extractHeadings(mdContent), [mdContent]);

  const location = useLocation();
  const toggleFavorite = appStore((state) => state.Favorite.toggleFavorite);
  const isFavorited = appStore(
    useShallow((state) =>
      state.Favorite.favorites.some((f) => f.id === subcategoryId),
    ),
  );

  const handleToggleFavorite = () => {
    if (subcategory && categoryId) {
      toggleFavorite({
        id: subcategoryId!,
        categoryId: categoryId!,
        titleKey: subcategory.titleKey,
        path: location.pathname,
      });
    }
  };

  const articleTitle = subcategory ? t(subcategory.titleKey) : '';
  const articleDescription = useMemo(() => {
    return getCleanDescription(
      mdContent,
      articleTitle || 'Technology directory article',
    );
  }, [mdContent, articleTitle]);

  const seoSchemas = useMemo(() => {
    if (!category || !subcategory) return undefined;

    const categoryTitle = t(category.navKey);
    const subcategoryTitle = t(subcategory.titleKey);

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
        {
          '@type': 'ListItem',
          position: 3,
          name: subcategoryTitle,
          item: `https://worldoftech.dev${subcategory.path}`,
        },
      ],
    };

    const techArticleSchema = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: subcategoryTitle,
      description: articleDescription,
      url: `https://worldoftech.dev${subcategory.path}`,
      inLanguage: 'en',
    };

    return [breadcrumbSchema, techArticleSchema];
  }, [category, subcategory, categoryId, articleDescription, t]);

  return (
    <Box minH="calc(100vh - 120px)" py={8}>
      {subcategory && (
        <SEO
          title={articleTitle}
          description={articleDescription}
          canonicalUrl={subcategory.path}
          schema={seoSchemas}
        />
      )}
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
              w="full"
              justify="space-between"
            >
              <HStack gap={2}>
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
                <Text
                  color="primary"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  {subcategory ? t(subcategory.titleKey) : subcategoryId}
                </Text>
              </HStack>

              <IconButton
                aria-label={
                  isFavorited
                    ? t('Common.removeFromFavorites')
                    : t('Common.addToFavorites')
                }
                variant="ghost"
                size="sm"
                color={isFavorited ? 'primary' : 'onSurfaceVariant'}
                _hover={{
                  color: isFavorited ? 'primary' : 'onSurface',
                  bg: 'surfaceContainer',
                }}
                onClick={handleToggleFavorite}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '20px',
                    fontVariationSettings: isFavorited
                      ? '"FILL" 1'
                      : '"FILL" 0',
                  }}
                >
                  star
                </span>
              </IconButton>
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
                  <Text
                    color="onSurfaceVariant"
                    fontFamily="mono"
                    fontSize="sm"
                  >
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
                    <b>
                      {subcategory ? t(subcategory.titleKey) : subcategoryId}
                    </b>{' '}
                    is currently in synchronization. Our engineers are
                    finalizing the integration of industrial-grade resources,
                    architectural patterns, and performance-optimized
                    frameworks.
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
