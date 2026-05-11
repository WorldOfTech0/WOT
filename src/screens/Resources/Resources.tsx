import { Heading, Text, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Resources = () => {
  const { t } = useTranslation();
  return (
    <Flex direction="column" align="center" justify="center" minH="60vh" p={10}>
      <Heading color="primary" mb={4}>{t('Navigation.items.resources')}</Heading>
      <Text color="onSurfaceVariant">{t('Navigation.subHeader')}</Text>
    </Flex>
  );
};

export default Resources;
