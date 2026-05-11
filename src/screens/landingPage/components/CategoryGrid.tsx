import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionGridItem = motion(GridItem);

const CategoryCard = ({
  title,
  description,
  icon,
  isFeatured,
  number,
  to,
}: any) => {
  const { t } = useTranslation();

  return (
    <MotionGridItem
      colSpan={isFeatured ? { base: 1, md: 2 } : 1}
      rowSpan={isFeatured ? { base: 1, md: 2 } : 1}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link
        to={to}
        style={{ textDecoration: 'none', display: 'block', height: '100%' }}
      >
        <Box
          display="block"
          h="full"
          position="relative"
          bg="surfaceContainer/40"
          backdropFilter="blur(24px)"
          borderRadius="3xl"
          borderWidth="1px"
          borderColor="outline"
          overflow="hidden"
          p={isFeatured ? { base: 8, md: 12 } : 8}
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          role="group"
          _hover={{
            bg: 'surfaceContainer/60',
            borderColor: 'primary',
            boxShadow:
              '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(139, 92, 246, 0.1)',
          }}
        >
          {/* Glow effect */}
          <Box
            position="absolute"
            top="-20%"
            right="-10%"
            w="60%"
            h="60%"
            bgGradient="radial(primaryAlpha.200, transparent 70%)"
            filter="blur(60px)"
            opacity={0}
            _groupHover={{ opacity: 1 }}
            transition="opacity 0.6s ease"
          />

          <Flex
            direction="column"
            justify="space-between"
            h="full"
            position="relative"
            zIndex={1}
          >
            <Box>
              <Flex align="center" gap={4} mb={8}>
                <Flex
                  align="center"
                  justify="center"
                  w={isFeatured ? 14 : 10}
                  h={isFeatured ? 14 : 10}
                  borderRadius={isFeatured ? '2xl' : 'xl'}
                  bg="primary/10"
                  borderWidth="1px"
                  borderColor="primary/20"
                  color="primary"
                  transition="all 0.3s ease"
                  _groupHover={{
                    bg: 'primary',
                    color: 'white',
                    transform: 'scale(1.1)',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: isFeatured ? '28px' : '20px' }}
                  >
                    {icon}
                  </span>
                </Flex>
                <Box>
                  <Text
                    fontSize="10px"
                    fontFamily="mono"
                    fontWeight="black"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                    color="primary"
                    mb={0.5}
                  >
                    {isFeatured
                      ? t('LandingPage.Categories.featured')
                      : t('LandingPage.Categories.techStack')}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="onSurfaceVariant"
                    fontFamily="mono"
                  >
                    {number} {'// SELECT'}
                  </Text>
                </Box>
              </Flex>

              <Heading
                as="h3"
                fontSize={isFeatured ? { base: '2xl', md: '3xl' } : '2xl'}
                fontFamily="heading"
                fontWeight="black"
                lineHeight="shorter"
                letterSpacing="tight"
                color="onSurface"
                mb={6}
                transition="all 0.3s ease"
                _groupHover={{ color: 'primary' }}
              >
                {title}
              </Heading>

              <Text
                fontFamily="body"
                fontSize={isFeatured ? 'lg' : 'sm'}
                color="onSurfaceVariant"
                maxW={isFeatured ? 'lg' : 'full'}
                lineHeight="tall"
                opacity={0.8}
              >
                {description}
              </Text>
            </Box>

            <Flex align="center" justify="space-between" mt={12}>
              <HStack gap={2}>
                <Box w={2} h={2} borderRadius="full" bg="primary" />
                <Text
                  fontSize="xs"
                  fontFamily="mono"
                  color="primary"
                  fontWeight="black"
                  letterSpacing="widest"
                >
                  {t('LandingPage.Categories.suffix')}
                </Text>
              </HStack>

              <Flex
                align="center"
                justify="center"
                w={12}
                h={12}
                borderRadius="full"
                borderWidth="1px"
                borderColor="outline"
                bg="surfaceContainer/20"
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                color="onSurface"
                _groupHover={{
                  bg: 'primary',
                  borderColor: 'primary',
                  color: 'white',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '24px' }}
                >
                  arrow_forward
                </span>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </MotionGridItem>
  );
};

const CategoryGrid = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" pb={32} px={{ base: 4, md: 12 }}>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
        gap={6}
        autoRows="minmax(min-content, max-content)"
      >
        <CategoryCard
          title={t('LandingPage.Categories.items.infrastructure.title')}
          description={t(
            'LandingPage.Categories.items.infrastructure.description',
          )}
          icon="terminal"
          isFeatured={true}
          number="01"
          to="/infrastructure"
        />
        <CategoryCard
          title={t('LandingPage.Categories.items.software.title')}
          description={t('LandingPage.Categories.items.software.description')}
          icon="integration_instructions"
          number="02"
          to="/software"
        />
        <CategoryCard
          title={t('LandingPage.Categories.items.security.title')}
          description={t('LandingPage.Categories.items.security.description')}
          icon="shield"
          number="03"
          to="/security"
        />
        <CategoryCard
          title={t('LandingPage.Categories.items.learning.title')}
          description={t('LandingPage.Categories.items.learning.description')}
          icon="school"
          isFeatured={true}
          number="04"
          to="/learning"
        />
        <CategoryCard
          title={t('LandingPage.Categories.items.resources.title')}
          description={t('LandingPage.Categories.items.resources.description')}
          icon="folder_zip"
          number="05"
          to="/resources"
        />
        <CategoryCard
          title={t('LandingPage.Categories.items.tools.title')}
          description={t('LandingPage.Categories.items.tools.description')}
          icon="build"
          number="06"
          to="/tools"
        />
      </Grid>
    </Box>
  );
};

export default CategoryGrid;
