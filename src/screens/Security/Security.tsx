import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LuShieldCheck, LuLock, LuEye, LuKey } from 'react-icons/lu';

const Security = () => {
  const { t } = useTranslation();

  const features = [
    { icon: LuShieldCheck, title: 'Threat Intelligence', desc: 'Proactive monitoring and real-time mitigation of emerging digital threats.' },
    { icon: LuLock, title: 'Identity & Access', desc: 'Zero-trust architecture ensuring secure and audited access control.' },
    { icon: LuEye, title: 'Privacy Engineering', desc: 'Data protection by design and compliance with global standards.' },
    { icon: LuKey, title: 'Cryptographic Services', desc: 'Advanced encryption and lifecycle management for critical secrets.' },
  ];

  return (
    <Box minH="calc(100vh - 120px)" py={12}>
      <Container maxW="container.xl">
        <VStack align="start" spacing={12}>
          <VStack align="start" spacing={4}>
            <Heading size="2xl" variant="gradient">
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
                variant="glass"
                p={8}
                borderRadius="2xl"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{ transform: 'translateY(-4px)', borderColor: 'violet.alpha.40' }}
              >
                <VStack align="start" spacing={4}>
                  <Icon as={feature.icon} boxSize={8} color="violet.400" />
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

