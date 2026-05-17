import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LegalSection {
  title: string;
  content: string;
}

interface LegalScreenProps {
  translationKey: 'Privacy' | 'Terms';
}

const LegalScreen = ({ translationKey }: LegalScreenProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [translationKey]);

  const sections = t(`Legal.${translationKey}.sections`, {
    returnObjects: true,
  }) as LegalSection[];

  return (
    <Box minH="calc(100vh - 120px)" py={24}>
      <Container maxW="container.lg">
        <VStack align="start" gap={16}>
          <VStack align="start" gap={6} maxW="3xl">
            <Heading
              size="4xl"
              color="onSurface"
              letterSpacing="tighter"
              fontWeight="black"
            >
              {t(`Legal.${translationKey}.title`)}
            </Heading>
            <Box
              px={3}
              py={1}
              borderRadius="full"
              bg="surfaceContainerHigh"
              borderWidth="1px"
              borderColor="outline"
            >
              <Text
                color="onSurfaceVariant"
                fontSize="xs"
                fontFamily="mono"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                {t(`Legal.${translationKey}.lastUpdated`)}
              </Text>
            </Box>
            <Text
              color="onSurface"
              fontSize="lg"
              lineHeight="1.8"
              opacity={0.9}
            >
              {t(`Legal.${translationKey}.introduction`)}
            </Text>
          </VStack>

          <VStack align="start" gap={10} w="full">
            {sections.map((section, i) => (
              <Box
                key={i}
                w="full"
                p={{ base: 8, md: 12 }}
                bg="surface"
                borderWidth="1px"
                borderColor="outline"
                borderRadius="3xl"
                position="relative"
                overflow="hidden"
                boxShadow="sm"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="6px"
                  h="full"
                  bg="primary"
                  opacity={0.8}
                />
                <Heading
                  size="lg"
                  color="onSurface"
                  mb={6}
                  fontFamily="heading"
                  fontWeight="bold"
                  letterSpacing="tight"
                >
                  {section.title}
                </Heading>
                <Text
                  color="onSurfaceVariant"
                  fontSize="md"
                  lineHeight="1.8"
                  textAlign="left"
                >
                  {section.content}
                </Text>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default LegalScreen;
