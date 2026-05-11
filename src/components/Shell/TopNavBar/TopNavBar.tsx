import { Flex, IconButton, HStack, Text } from '@chakra-ui/react';
import { ThemeIcon } from '../../Theme';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
        <Link to="/" style={{ textDecoration: 'none' }}>
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
        </Link>
      </HStack>
      <HStack gap={2} color="onSurfaceVariant">
        <IconButton
          aria-label={t('Common.search')}
          variant="ghost"
          _hover={{ color: 'onSurface', bg: 'surfaceContainer' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
        </IconButton>
        <ThemeIcon />
        <IconButton
          aria-label={t('Common.code')}
          variant="ghost"
          _hover={{ color: 'onSurface', bg: 'surfaceContainer' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>code</span>
        </IconButton>
      </HStack>
    </Flex>
  );
};

export default TopNavBar;
