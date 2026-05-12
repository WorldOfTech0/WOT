import { Box, Flex, Text, Link, Stack, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

const CopyrightFooter = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="footer"
      ml={{ base: 0, md: 64 }}
      bg="surface"
      borderTopWidth={1}
      borderColor="outline"
      py={16}
      px={{ base: 4, md: 12 }}
      mt={24}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        gap={12}
      >
        <Box>
          <Link
            href="https://worldoftech.co.in"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: 'none', opacity: 0.8 }}
          >
            <Text
              fontFamily="heading"
              fontSize="2xl"
              fontWeight="black"
              mb={3}
              color="onSurface"
              letterSpacing="tighter"
            >
              {t('Common.brandName')}
            </Text>
          </Link>
          <Text
            fontFamily="body"
            fontSize="sm"
            color="onSurfaceVariant"
            maxW="xs"
            lineHeight="1.6"
          >
            {t('Footer.description')}
          </Text>
        </Box>

        <HStack gap={{ base: 12, md: 20 }} align="flex-start">
          <Stack gap={3}>
            <Text
              fontFamily="mono"
              fontSize="xs"
              fontWeight="black"
              textTransform="uppercase"
              color="outline"
              letterSpacing="widest"
            >
              {t('Footer.sections.connect')}
            </Text>
            <Link
              href="https://worldoftech.co.in"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="sm"
              color="onSurfaceVariant"
              _hover={{ color: 'onSurface', textDecoration: 'none' }}
            >
              {t('Footer.links.website')}
            </Link>
            <Link
              href="#"
              fontSize="sm"
              color="onSurfaceVariant"
              _hover={{ color: 'onSurface', textDecoration: 'none' }}
            >
              {t('Footer.links.github')}
            </Link>
            <Link
              href="#"
              fontSize="sm"
              color="onSurfaceVariant"
              _hover={{ color: 'onSurface', textDecoration: 'none' }}
            >
              {t('Footer.links.twitter')}
            </Link>
          </Stack>
          <Stack gap={3}>
            <Text
              fontFamily="mono"
              fontSize="xs"
              fontWeight="black"
              textTransform="uppercase"
              color="outline"
              letterSpacing="widest"
            >
              {t('Footer.sections.legal')}
            </Text>
            <RouterLink to="/privacy" style={{ textDecoration: 'none' }}>
              <Text
                fontSize="sm"
                color="onSurfaceVariant"
                _hover={{ color: 'onSurface' }}
                transition="color 0.2s"
              >
                {t('Footer.links.privacy')}
              </Text>
            </RouterLink>
            <RouterLink to="/terms" style={{ textDecoration: 'none' }}>
              <Text
                fontSize="sm"
                color="onSurfaceVariant"
                _hover={{ color: 'onSurface' }}
                transition="color 0.2s"
              >
                {t('Footer.links.terms')}
              </Text>
            </RouterLink>
          </Stack>
        </HStack>
      </Flex>

      <Box mt={16} pt={8} borderTopWidth={1} borderColor="surfaceContainer">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={6}
        >
          <Text
            fontSize="10px"
            color="onSurfaceVariant"
            fontFamily="mono"
            letterSpacing="widest"
          >
            {t('Footer.copyright', { year: new Date().getFullYear() })}
          </Text>
          <Text
            fontSize="10px"
            color="onSurfaceVariant"
            fontFamily="mono"
            letterSpacing="widest"
          >
            {t('Footer.tagline')}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default CopyrightFooter;
