import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Security = () => {
  const { t } = useTranslation();

  const features = [
    { icon: 'verified_user', title: 'Threat Intelligence', desc: 'Proactive monitoring and real-time mitigation of emerging digital threats.' },
    { icon: 'lock', title: 'Identity & Access', desc: 'Zero-trust architecture ensuring secure and audited access control.' },
    { icon: 'visibility', title: 'Privacy Engineering', desc: 'Data protection by design and compliance with global standards.' },
    { icon: 'key', title: 'Cryptographic Services', desc: 'Advanced encryption and lifecycle management for critical secrets.' },
  ];

  return (
    <Box minH="calc(100vh - 120px)" py={12}>
      <Container maxW="container.xl">
        <VStack align="start" gap={12}>
          <VStack align="start" gap={4}>
            <Heading size="2xl" color="onSurface">
              {t('Navigation.items.security')}
            </Heading>
            <Text color="onSurfaceVariant" fontSize="lg" maxW="2xl">
              Advanced security frameworks and defensive protocols protecting the digital frontier.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {features.map((feature, i) => (
              <Box
                key={i}
                bg="rgba(255, 255, 255, 0.02)"
                backdropFilter="blur(24px)"
                borderWidth="1px"
                borderColor="rgba(255, 255, 255, 0.08)"
                p={8}
                borderRadius="2xl"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{ bg: 'rgba(255, 255, 255, 0.04)', transform: 'translateY(-4px)', borderColor: 'violet.alpha.40' }}
              >
                <VStack align="start" gap={4}>
                  <Box as="span" className="material-symbols-outlined" fontSize="32px" color="violet.400">
                    {feature.icon}
                  </Box>
                  <Heading size="md" color="onSurface">{feature.title}</Heading>
                  <Text color="onSurfaceVariant">{feature.desc}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Security;

