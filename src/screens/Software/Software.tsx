import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Software = () => {
  const { t } = useTranslation();

  const features = [
    { icon: 'terminal', title: 'Systems Engineering', desc: 'Developing high-performance core systems and low-level optimizations.' },
    { icon: 'memory', title: 'Embedded Systems', desc: 'Hardware-software co-design for specialized computing environments.' },
    { icon: 'layers', title: 'Full-Stack Development', desc: 'Building scalable, responsive, and data-driven web applications.' },
    { icon: 'webhook', title: 'API Ecosystems', desc: 'Designing robust and developer-friendly integration interfaces.' },
  ];

  return (
    <Box minH="calc(100vh - 120px)" py={12}>
      <Container maxW="container.xl">
        <VStack align="start" gap={12}>
          <VStack align="start" gap={4}>
            <Heading size="2xl" color="onSurface">
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

export default Software;

