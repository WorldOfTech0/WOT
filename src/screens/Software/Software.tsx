import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LuBinary, LuCpu, LuLayers, LuWebhook } from 'react-icons/lu';

const Software = () => {
  const { t } = useTranslation();

  const features = [
    { icon: LuBinary, title: 'Systems Engineering', desc: 'Developing high-performance core systems and low-level optimizations.' },
    { icon: LuCpu, title: 'Embedded Systems', desc: 'Hardware-software co-design for specialized computing environments.' },
    { icon: LuLayers, title: 'Full-Stack Development', desc: 'Building scalable, responsive, and data-driven web applications.' },
    { icon: LuWebhook, title: 'API Ecosystems', desc: 'Designing robust and developer-friendly integration interfaces.' },
  ];

  return (
    <Box minH="calc(100vh - 120px)" py={12}>
      <Container maxW="container.xl">
        <VStack align="start" spacing={12}>
          <VStack align="start" spacing={4}>
            <Heading size="2xl" variant="gradient">
              {t('Navigation.items.software')}
            </Heading>
            <Text color="onSurfaceVariant" fontSize="lg" maxW="2xl">
              Innovative software engineering solutions and robust development frameworks for the modern age.
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

export default Software;

