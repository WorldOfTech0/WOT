import { VStack, HStack, Box, Text, Input, Flex } from '@chakra-ui/react';
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { searchItems, fuseOptions } from '@data';
import Fuse from 'fuse.js';
import { appStore, modalDataSelector, useShallow } from '@uiStore';

const SearchModal = () => {
  const { modalData, resetModalState } = appStore(
    useShallow(modalDataSelector),
  );
  const navigate = useNavigate();
  const [search, setSearchText] = useState<string>(
    modalData?.searchQuery || '',
  );
  const [list, setList] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = useMemo(() => {
    try {
      const translatedItems = searchItems.map((item) => ({
        ...item,
        title: t(item.titleKey),
        description: item.descriptionKey ? t(item.descriptionKey) : '',
      }));
      return new Fuse(translatedItems, fuseOptions);
    } catch (error) {
      return null;
    }
  }, [t]);

  const performSearch = useCallback(
    (query: string) => {
      if (!fuse || query.trim().length < 2) {
        setList([]);
        setSelectedIndex(-1);
        return;
      }

      try {
        const result = fuse.search(query);
        const items = result.map((item) => item.item);
        setList(items);
        setSelectedIndex(items.length > 0 ? 0 : -1);
      } catch (error) {
        setList([]);
      }
    },
    [fuse],
  );

  useEffect(() => {
    if (modalData?.searchQuery) {
      setSearchText(modalData.searchQuery);
      performSearch(modalData.searchQuery);
    }
  }, [modalData?.searchQuery, performSearch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Only search if query has changed and it's not the initial modalData query
      if (search !== modalData?.searchQuery) {
        performSearch(search);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, modalData?.searchQuery, performSearch]);

  useEffect(() => {
    // Focus input on mount
    const timer = setTimeout(() => inputRef.current?.focus(), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    resetModalState();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < list.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && list[selectedIndex]) {
        const item = list[selectedIndex];
        handleClose();
        navigate(item.path);
      }
    } else if (e.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <VStack gap={0} w="full" bg="bg" borderRadius="xl" overflow="hidden">
      <Flex
        w="full"
        px={4}
        py={4}
        align="center"
        borderBottomWidth={1}
        borderColor="outline"
      >
        <Box color="primary" mr={3}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '24px' }}
          >
            search
          </span>
        </Box>
        <Input
          ref={inputRef}
          placeholder={t('LandingPage.Hero.searchPlaceholder')}
          border="none"
          outline="none"
          _focus={{ boxShadow: 'none' }}
          fontSize="lg"
          value={search}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
          color="onSurface"
          _placeholder={{ color: 'onSurfaceVariant', opacity: 0.5 }}
        />
        <HStack gap={2}>
          <Box
            px={2}
            py={0.5}
            borderRadius="md"
            borderWidth={1}
            borderColor="outline"
            bg="surfaceContainer"
          >
            <Text fontSize="xs" color="onSurfaceVariant" fontWeight="bold">
              ESC
            </Text>
          </Box>
        </HStack>
      </Flex>

      <Box w="full" maxH="60vh" overflowY="auto" p={2}>
        {list.length > 0 ? (
          <VStack gap={1} align="stretch">
            {list.map((item, index) => (
              <Link key={item.id} to={item.path} onClick={handleClose}>
                <Flex
                  px={4}
                  py={3}
                  borderRadius="lg"
                  bg={
                    index === selectedIndex
                      ? 'surfaceContainerHigh'
                      : 'transparent'
                  }
                  _hover={{
                    bg: 'surfaceContainerHigh',
                    transform: 'translateX(4px)',
                  }}
                  transition="all 0.2s"
                  align="center"
                  gap={4}
                >
                  <Box
                    p={2}
                    borderRadius="md"
                    bg="primaryAlpha.200"
                    color="primary"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '20px' }}
                    >
                      {item.icon || 'description'}
                    </span>
                  </Box>
                  <VStack align="start" gap={0}>
                    <Text color="onSurface" fontWeight="bold" fontSize="md">
                      {t(item.titleKey)}
                    </Text>
                    {item.descriptionKey && (
                      <Text
                        color="onSurfaceVariant"
                        fontSize="xs"
                        lineClamp={1}
                      >
                        {t(item.descriptionKey)}
                      </Text>
                    )}
                  </VStack>
                </Flex>
              </Link>
            ))}
          </VStack>
        ) : search.trim().length >= 2 ? (
          <Flex
            direction="column"
            align="center"
            justify="center"
            py={12}
            gap={4}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '48px', opacity: 0.2 }}
            >
              search_off
            </span>
            <Text color="onSurfaceVariant" fontSize="md">
              {t('Common.noResultsFound')}
            </Text>
          </Flex>
        ) : (
          <Flex
            direction="column"
            align="center"
            justify="center"
            py={12}
            gap={2}
          >
            <Text color="onSurfaceVariant" fontSize="sm" fontWeight="medium">
              {t('Common.searchHint') ||
                'Type at least 2 characters to search...'}
            </Text>
          </Flex>
        )}
      </Box>

      <Flex
        w="full"
        px={4}
        py={3}
        bg="surfaceContainer"
        borderTopWidth={1}
        borderColor="outline"
        justify="flex-end"
      >
        <HStack gap={4} color="onSurfaceVariant" fontSize="xs">
          <HStack gap={1}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '14px' }}
            >
              keyboard_return
            </span>
            <Text>{t('Common.toSelect') || 'to select'}</Text>
          </HStack>
          <HStack gap={1}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '14px' }}
            >
              swap_vert
            </span>
            <Text>{t('Common.toNavigate') || 'to navigate'}</Text>
          </HStack>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default SearchModal;
