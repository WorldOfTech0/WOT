import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LuBookOpen, LuGraduationCap, LuCode2, LuLightbulb } from 'react-icons/lu';

const Learning = () => {
  const { t } = useTranslation();

  const features = [
    { icon: LuBookOpen, title: 'Knowledge Base', desc: 'Curated technical documentation and deep-dive articles on modern tech.' },
    { icon: LuGraduationCap, title: 'Certification Paths', desc: 'Guided learning journeys designed to master specific technology domains.' },
    { icon: LuCode2, title: 'Interactive Labs', desc: 'Hands-on coding environments to practice and validate your technical skills.' },
    { icon: LuLightbulb, title: 'Innovation Insights', desc: 'Thought leadership and trend analysis from industry experts.' },
  ];

  return (
    <Box minH="calc(100vh - 120px)" py={12}>
      <Container maxW="container.xl">
        <VStack align="start" spacing={12}>
          <VStack align="start" spacing={4}>
            <Heading size="2xl" variant="gradient">
              {t('Navigation.items.learning')}
            </Heading>
            <Text color="onSurfaceVariant" fontSize="lg" maxW="2xl">
              Comprehensive educational resources designed to accelerate technical growth and innovation.
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

export default Learning;

