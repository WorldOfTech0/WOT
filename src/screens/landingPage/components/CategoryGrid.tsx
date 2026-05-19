import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  Heading,
  HStack,
  Button,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CATEGORIES } from '@data/categories';

const MotionGridItem = motion(GridItem);

const CategoryCard = ({
  title,
  description,
  icon,
  isFeatured,
  number,
  to,
  count,
  index,
  viewMode,
}: any) => {
  const { t } = useTranslation();
  const isList = viewMode === 'list';

  if (isList) {
    return (
      <MotionGridItem
        layout="position"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{
          opacity: 0,
          scale: 0.9,
          transition: { duration: 0.2 },
        }}
        colSpan={1}
        rowSpan={1}
        whileHover={{ y: -2, scale: 1.005 }}
        transition={{
          layout: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
          opacity: { duration: 0.4, delay: index * 0.04 },
          scale: { duration: 0.4, delay: index * 0.04 },
        }}
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
            borderRadius="xl"
            borderWidth="1px"
            borderColor="outline"
            overflow="hidden"
            p={{ base: 3, md: 4 }}
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            role="group"
            _hover={{
              bg: 'surfaceContainer/60',
              borderColor: 'primary',
              boxShadow:
                '0 12px 24px rgba(0,0,0,0.3), 0 0 16px rgba(139, 92, 246, 0.08)',
            }}
          >
            {/* Glow effect */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="120px"
              h="100%"
              bgGradient="linear(to-r, primaryAlpha.100, transparent)"
              filter="blur(30px)"
              opacity={0}
              _groupHover={{ opacity: 1 }}
              transition="opacity 0.6s ease"
            />

            <Flex
              align="center"
              justify="space-between"
              h="full"
              position="relative"
              zIndex={1}
              gap={{ base: 3, md: 4 }}
            >
              {/* Left group: Icon + Text */}
              <Flex align="center" gap={{ base: 3, md: 4 }} flex={1} minW={0}>
                {/* Icon */}
                <Flex
                  align="center"
                  justify="center"
                  flexShrink={0}
                  w={{ base: 10, md: 12 }}
                  h={{ base: 10, md: 12 }}
                  borderRadius="xl"
                  bg="primary/10"
                  borderWidth="1px"
                  borderColor="primary/20"
                  color="primary"
                  transition="all 0.3s ease"
                  _groupHover={{
                    bg: 'primary',
                    color: 'white',
                    transform: 'scale(1.05)',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '20px',
                    }}
                  >
                    {icon}
                  </span>
                </Flex>

                {/* Title & Info */}
                <Box flex={1} minW={0}>
                  <Text
                    fontSize="9px"
                    color="onSurfaceVariant"
                    fontFamily="mono"
                    whiteSpace="nowrap"
                    opacity={0.8}
                    mb={0.5}
                  >
                    {number} {' // '} {count}{' '}
                    {t('LandingPage.Categories.suffix', {
                      defaultValue: 'RESOURCES',
                    })}
                  </Text>

                  <Heading
                    as="h3"
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontFamily="heading"
                    fontWeight="black"
                    lineHeight="shorter"
                    letterSpacing="tight"
                    color="onSurface"
                    transition="all 0.3s ease"
                    _groupHover={{ color: 'primary' }}
                    mb={1}
                  >
                    {title}
                  </Heading>

                  <Text
                    fontFamily="body"
                    fontSize={{ base: 'xs', md: 'sm' }}
                    color="onSurfaceVariant"
                    lineHeight="shorter"
                    opacity={0.7}
                    lineClamp={1}
                    mt={0.5}
                  >
                    {description}
                  </Text>
                </Box>
              </Flex>

              {/* Right group: Suffix & Arrow */}
              <HStack gap={4} flexShrink={0}>
                <HStack gap={2} display={{ base: 'none', md: 'flex' }}>
                  <Box w={1.5} h={1.5} borderRadius="full" bg="primary" />
                  <Text
                    fontSize="10px"
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
                  w={{ base: 8, md: 9 }}
                  h={{ base: 8, md: 9 }}
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
                    transform: 'translateX(3px)',
                    boxShadow: '0 0 12px rgba(139, 92, 246, 0.4)',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '16px' }}
                  >
                    arrow_forward
                  </span>
                </Flex>
              </HStack>
            </Flex>
          </Box>
        </Link>
      </MotionGridItem>
    );
  }

  // Grid mode card layout (remains original, robust, and beautiful)
  return (
    <MotionGridItem
      layout="position"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.2 },
      }}
      colSpan={isFeatured ? { base: 2, md: 2 } : 1}
      rowSpan={isFeatured ? { base: 1, md: 2 } : 1}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{
        layout: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
        opacity: { duration: 0.4, delay: index * 0.04 },
        scale: { duration: 0.4, delay: index * 0.04 },
      }}
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
          borderRadius={{ base: '2xl', md: '3xl' }}
          borderWidth="1px"
          borderColor="outline"
          overflow="hidden"
          p={
            isFeatured ? { base: 4, md: 8, lg: 12 } : { base: 3, md: 6, lg: 8 }
          }
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
            <Flex direction="column" align="stretch" flex={1}>
              <Flex
                align="center"
                gap={{ base: 2.5, md: 4 }}
                mb={{ base: 4, md: 6, lg: 8 }}
              >
                <Flex
                  align="center"
                  justify="center"
                  flexShrink={0}
                  w={isFeatured ? { base: 10, md: 14 } : { base: 8, md: 10 }}
                  h={isFeatured ? { base: 10, md: 14 } : { base: 8, md: 10 }}
                  borderRadius={
                    isFeatured
                      ? { base: 'xl', md: '2xl' }
                      : { base: 'lg', md: 'xl' }
                  }
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
                  <Box
                    as="span"
                    className="material-symbols-outlined"
                    fontSize={
                      isFeatured
                        ? { base: '20px', md: '28px' }
                        : { base: '16px', md: '20px' }
                    }
                  >
                    {icon}
                  </Box>
                </Flex>
                <Box>
                  <Text
                    fontSize={{ base: '8px', md: '10px' }}
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
                    fontSize={{ base: '9px', md: 'xs' }}
                    color="onSurfaceVariant"
                    fontFamily="mono"
                  >
                    {number} {'// '} {count} {' RESOURCES'}
                  </Text>
                </Box>
              </Flex>

              <Box flex={1}>
                <Heading
                  as="h3"
                  fontSize={
                    isFeatured
                      ? { base: 'lg', md: '2xl', lg: '3xl' }
                      : { base: 'sm', md: 'md', lg: 'lg' }
                  }
                  fontFamily="heading"
                  fontWeight="black"
                  lineHeight="shorter"
                  letterSpacing="tight"
                  color="onSurface"
                  mb={{ base: 2, md: 4, lg: 6 }}
                  transition="all 0.3s ease"
                  _groupHover={{ color: 'primary' }}
                >
                  {title}
                </Heading>

                <Text
                  fontFamily="body"
                  fontSize={
                    isFeatured
                      ? { base: 'xs', md: 'sm', lg: 'lg' }
                      : { base: 'xs', md: 'sm' }
                  }
                  color="onSurfaceVariant"
                  maxW={isFeatured ? 'lg' : 'full'}
                  lineHeight={{ base: 'short', md: 'tall' }}
                  opacity={0.8}
                  lineClamp={{ base: 3, md: 4 }}
                >
                  {description}
                </Text>
              </Box>
            </Flex>

            <Flex
              align="center"
              justify="space-between"
              mt={{ base: 4, md: 8, lg: 12 }}
            >
              <HStack gap={2}>
                <Box w={1.5} h={1.5} borderRadius="full" bg="primary" />
                <Text
                  fontSize={{ base: '9px', md: 'xs' }}
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
                w={
                  isFeatured
                    ? { base: 8, md: 10, lg: 12 }
                    : { base: 7, md: 9, lg: 10 }
                }
                h={
                  isFeatured
                    ? { base: 8, md: 10, lg: 12 }
                    : { base: 7, md: 9, lg: 10 }
                }
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
                <Box
                  as="span"
                  className="material-symbols-outlined"
                  fontSize={
                    isFeatured
                      ? { base: '16px', md: '20px', lg: '24px' }
                      : { base: '14px', md: '16px', lg: '18px' }
                  }
                >
                  arrow_forward
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </MotionGridItem>
  );
};

const SectionToggle = ({ sections, activeSection, setActiveSection }: any) => {
  return (
    <Flex
      bg={{ base: 'transparent', md: 'surfaceContainer/40' }}
      backdropFilter={{ base: 'none', md: 'blur(24px)' }}
      p={{ base: 0, md: 1.5 }}
      borderRadius={{ base: 'none', md: '2xl' }}
      borderWidth={{ base: '0px', md: '1px' }}
      borderColor="outline"
      gap={{ base: 1.5, md: 1 }}
      maxW="full"
      wrap={{ base: 'wrap', md: 'nowrap' }}
      justify="center"
    >
      {sections.map((section: any) => {
        const isActive = activeSection === section.id;
        return (
          <Box key={section.id} position="relative">
            <Button
              onClick={() => setActiveSection(section.id as any)}
              variant="ghost"
              size="sm"
              height={{ base: '32px', md: '36px' }}
              px={{ base: 2, md: 6 }}
              borderRadius="xl"
              fontSize={{ base: '10px', md: 'xs' }}
              fontFamily="mono"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
              position="relative"
              zIndex={1}
              transition="all 0.3s ease"
              color={isActive ? 'onPrimary' : 'onSurfaceVariant'}
              bg={
                isActive
                  ? 'transparent'
                  : { base: 'surfaceContainer/40', md: 'transparent' }
              }
              borderWidth={isActive ? '0px' : { base: '1px', md: '0px' }}
              borderColor="outline"
              backdropFilter={
                isActive ? 'none' : { base: 'blur(24px)', md: 'none' }
              }
              _hover={{
                color: isActive ? 'onPrimary' : 'onSurface',
                bg: isActive ? 'transparent' : 'surfaceContainer/60',
              }}
              _active={{ bg: 'transparent' }}
            >
              {section.label}
            </Button>
            {isActive && (
              <motion.div
                layoutId="activeTab"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--chakra-colors-primary)',
                  borderRadius: 'var(--chakra-radii-xl)',
                  zIndex: 0,
                  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  mass: 1,
                }}
              />
            )}
          </Box>
        );
      })}
    </Flex>
  );
};

const ViewModeToggle = ({ viewMode, setViewMode }: any) => {
  return (
    <HStack
      bg="surfaceContainer/40"
      backdropFilter="blur(24px)"
      p={1}
      borderRadius="xl"
      borderWidth="1px"
      borderColor="outline"
      gap={1}
      display="flex"
    >
      {[
        { id: 'grid', icon: 'grid_view' },
        { id: 'list', icon: 'view_list' },
      ].map((mode) => (
        <Button
          key={mode.id}
          onClick={() => setViewMode(mode.id as any)}
          variant="ghost"
          size="sm"
          w="36px"
          h="36px"
          p={0}
          borderRadius="lg"
          bg={viewMode === mode.id ? 'primaryAlpha.200' : 'transparent'}
          color={viewMode === mode.id ? 'primary' : 'onSurfaceVariant'}
          _hover={{
            bg:
              viewMode === mode.id ? 'primaryAlpha.300' : 'surfaceContainer/60',
            color: viewMode === mode.id ? 'primary' : 'onSurface',
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '20px' }}
          >
            {mode.icon}
          </span>
        </Button>
      ))}
    </HStack>
  );
};

const FilterBar = ({
  sections,
  activeSection,
  setActiveSection,
  viewMode,
  setViewMode,
}: any) => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      gap={4}
      mb={16}
      position="relative"
      w="full"
    >
      <SectionToggle
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Box position={{ base: 'static', md: 'absolute' }} right={{ md: 0 }}>
        <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
      </Box>
    </Flex>
  );
};

const CategoryGrid = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<
    'all' | 'library' | 'tools'
  >('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCategories = CATEGORIES.filter((category) => {
    if (activeSection === 'all') return true;
    if (activeSection === 'library')
      return (
        category.section === 'information_library' ||
        category.section === 'more'
      );
    if (activeSection === 'tools')
      return category.section === 'information_tools';
    return true;
  });

  const sections = [
    { id: 'library', label: t('LandingPage.Categories.sections.library') },
    { id: 'tools', label: t('LandingPage.Categories.sections.tools') },
    { id: 'all', label: t('LandingPage.Categories.sections.all') },
  ];

  return (
    <Box as="section" pb={32} px={{ base: 2, md: 12 }}>
      <FilterBar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <Grid
        templateColumns={
          viewMode === 'grid'
            ? {
                base: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              }
            : '1fr'
        }
        gap={{ base: 2, md: 6 }}
        autoRows="minmax(min-content, max-content)"
      >
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category, index) => (
            <CategoryCard
              key={category.id}
              index={index}
              viewMode={viewMode}
              title={t(category.titleKey)}
              description={t(category.subtitleKey)}
              icon={category.icon}
              isFeatured={category.isFeatured}
              number={(index + 1).toString().padStart(2, '0')}
              to={category.path}
              count={category.subcategories.length}
            />
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  );
};

export default CategoryGrid;
