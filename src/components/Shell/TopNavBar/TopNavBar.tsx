import { Flex, IconButton, HStack, Text, Link, Box } from '@chakra-ui/react';
import { ThemeIcon } from '../../Theme';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { appStore, ModalID } from '@uiStore';
import { GITHUB_URL } from '@data/constants';
import WorldOfTechIcon from '@assets/icons/IconExport';
import { IconHc } from '@assets/icons/types';

const TopNavBar = () => {
  const { t } = useTranslation();

  return (
    <Flex
      as="header"
      bg="bg/70"
      backdropFilter="blur(24px)"
      borderBottomWidth={1}
      borderColor="outline"
      position="sticky"
      top={0}
      zIndex={50}
      w="full"
      justify="space-between"
      align="center"
      h={16}
      px={{ base: 4, md: 12 }}
      color="onSurface"
    >
      <HStack gap={4}>
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <Text
            fontFamily="heading"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="black"
            letterSpacing="tighter"
            _hover={{ color: 'primary' }}
            transition="color 0.2s ease"
          >
            {t('Common.brandName')}
          </Text>
        </RouterLink>
      </HStack>
      <HStack gap={2} color="onSurfaceVariant">
        <IconButton
          aria-label={t('Common.search')}
          variant="ghost"
          _hover={{ color: 'onSurface', bg: 'surfaceContainer' }}
          onClick={() => appStore.getState().Modal.openModal(ModalID.SEARCH)}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '20px' }}
          >
            search
          </span>
        </IconButton>
        <IconButton
          aria-label={t('Common.favorites')}
          variant="ghost"
          _hover={{ color: 'onSurface', bg: 'surfaceContainer' }}
          onClick={() => appStore.getState().Modal.openModal(ModalID.FAVORITES)}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '20px' }}
          >
            star
          </span>
        </IconButton>
        <ThemeIcon />
        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <IconButton
            aria-label="GitHub"
            variant="ghost"
            _hover={{ color: 'onSurface', bg: 'surfaceContainer' }}
          >
            <Box w="20px" h="20px">
              <WorldOfTechIcon icon={IconHc.GITHUB} />
            </Box>
          </IconButton>
        </Link>
      </HStack>
    </Flex>
  );
};

export default TopNavBar;
