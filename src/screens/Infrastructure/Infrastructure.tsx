import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LuServer, LuDatabase, LuNetwork, LuCloud } from 'react-icons/lu';

const Infrastructure = () => {
  const { t } = useTranslation();

  const features = [
    { icon: LuServer, title: 'Server Management', desc: 'Enterprise-grade server orchestration and monitoring.' },
    { icon: LuDatabase, title: 'Data Infrastructure', desc: 'Scalable data lakes and real-time processing pipelines.' },
    { icon: LuNetwork, title: 'Network Architecture', desc: 'High-availability low-latency global network design.' },
    { icon: LuCloud, title: 'Cloud Operations', desc: 'Multi-cloud strategy and automated resource provisioning.' },
  ];

  return (
    <Box minH="calc(100vh - 120px)" py={12}>
      <Container maxW="container.xl">
        <VStack align="start" spacing={12}>
          <VStack align="start" spacing={4}>
            <Heading size="2xl" variant="gradient">
              {t('Navigation.items.infrastructure')}
            </Heading>
            <Text color="onSurfaceVariant" fontSize="lg" maxW="2xl">
              Foundational architecture powering modern technological ecosystems with stability and scale.
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

export default Infrastructure;

