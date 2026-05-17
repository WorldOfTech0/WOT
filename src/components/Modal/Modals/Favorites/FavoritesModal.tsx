import { VStack, Box, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { appStore as uiAppStore } from '@uiStore';
import { appStore, AppStoreState } from '@appStore';
import { useShallow } from 'zustand/react/shallow';

const FavoritesModal = () => {
  const { t } = useTranslation();
  const resetModalState = uiAppStore((state) => state.Modal.resetModalState);
  const favorites = appStore(
    useShallow((state: AppStoreState) => state.Favorite.favorites),
  );
  const removeFavorite = appStore(
    (state: AppStoreState) => state.Favorite.removeFavorite,
  );

  const handleClose = () => {
    resetModalState();
  };

  return (
    <VStack gap={0} w="full" bg="bg" borderRadius="xl" overflow="hidden">
      <Flex
        w="full"
        px={6}
        py={4}
        align="center"
        borderBottomWidth={1}
        borderColor="outline"
        bg="surfaceContainer"
      >
        <Box color="primary" mr={3}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '24px' }}
          >
            star
          </span>
        </Box>
        <Text fontSize="lg" fontWeight="bold" color="onSurface">
          {t('Common.favorites')}
        </Text>
        <Flex flex={1} justify="flex-end">
          <Box
            px={2}
            py={0.5}
            borderRadius="md"
            borderWidth={1}
            borderColor="outline"
            bg="surfaceContainer"
            cursor="pointer"
            onClick={handleClose}
          >
            <Text fontSize="xs" color="onSurfaceVariant" fontWeight="bold">
              ESC
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Box w="full" maxH="60vh" overflowY="auto" p={2}>
        {favorites.length > 0 ? (
          <VStack gap={1} align="stretch">
            {favorites.map((item) => (
              <Flex
                key={item.id}
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
                position="relative"
                role="group"
              >
                <Link
                  to={item.path}
                  onClick={handleClose}
                  style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    gap: '16px',
                  }}
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
                      description
                    </span>
                  </Box>
                  <VStack align="start" gap={0}>
                    <Text color="onSurface" fontWeight="bold" fontSize="md">
                      {t(item.titleKey)}
                    </Text>
                    <Text color="onSurfaceVariant" fontSize="xs">
                      {item.path
                        .split('/')
                        .filter(Boolean)
                        .join(' / ')
                        .toUpperCase()}
                    </Text>
                  </VStack>
                </Link>
                <Box
                  as="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    removeFavorite(item.id);
                  }}
                  p={2}
                  borderRadius="full"
                  color="onSurfaceVariant"
                  _hover={{ color: 'error', bg: 'errorAlpha.100' }}
                  opacity={0}
                  _groupHover={{ opacity: 1 }}
                  transition="opacity 0.2s"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '20px' }}
                  >
                    delete
                  </span>
                </Box>
              </Flex>
            ))}
          </VStack>
        ) : (
          <Flex
            direction="column"
            align="center"
            justify="center"
            py={12}
            px={6}
            gap={4}
            textAlign="center"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '48px', opacity: 0.2 }}
            >
              star_outline
            </span>
            <Text color="onSurfaceVariant" fontSize="md">
              {t('Common.noFavorites')}
            </Text>
          </Flex>
        )}
      </Box>
    </VStack>
  );
};

export default FavoritesModal;
