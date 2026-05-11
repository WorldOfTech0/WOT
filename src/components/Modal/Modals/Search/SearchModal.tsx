import {
  VStack,
  HStack,
  Box,
  Text,
  Input,
  Flex,
} from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fuse } from '@data';
import { appStore, modalDataSelector, useShallow } from '@uiStore';

const SearchModal = () => {
  const { modalData, resetModalState } = appStore(useShallow(modalDataSelector));
  const [search, setSearchText] = useState<string>(modalData?.searchQuery || '');
  const [list, setList] = useState<any[]>([]);
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (modalData?.searchQuery) {
      setSearchText(modalData.searchQuery);
    }
  }, [modalData?.searchQuery]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.trim().length >= 2) {
        const result = fuse.search(search);
        setList(result.map((item) => item.item));
      } else {
        setList([]);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    // Focus input on mount
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const handleClose = () => {
    resetModalState();
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
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
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
            {list.map((item) => (
              <Link key={item.title} to={item.path} onClick={handleClose}>
                <Flex
                  px={4}
                  py={3}
                  borderRadius="lg"
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
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      description
                    </span>
                  </Box>
                  <VStack align="start" gap={0}>
                    <Text color="onSurface" fontWeight="bold" fontSize="md">
                      {item.title}
                    </Text>
                    {item.description && (
                      <Text color="onSurfaceVariant" fontSize="xs" lineClamp={1}>
                        {item.description}
                      </Text>
                    )}
                  </VStack>
                </Flex>
              </Link>
            ))}
          </VStack>
        ) : search.trim().length >= 2 ? (
          <Flex direction="column" align="center" justify="center" py={12} gap={4}>
            <span className="material-symbols-outlined" style={{ fontSize: '48px', opacity: 0.2 }}>
              search_off
            </span>
            <Text color="onSurfaceVariant" fontSize="md">
              {t('Common.noResultsFound')}
            </Text>
          </Flex>
        ) : (
          <Flex direction="column" align="center" justify="center" py={12} gap={2}>
            <Text color="onSurfaceVariant" fontSize="sm" fontWeight="medium">
              {t('Common.searchHint') || 'Type at least 2 characters to search...'}
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
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
              keyboard_return
            </span>
            <Text>{t('Common.toSelect') || 'to select'}</Text>
          </HStack>
          <HStack gap={1}>
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
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
