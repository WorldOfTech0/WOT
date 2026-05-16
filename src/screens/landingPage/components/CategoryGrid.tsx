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

  return (
    <MotionGridItem
      layout="position"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 0.9,
        transition: { duration: 0.2 } 
      }}
      colSpan={isList ? 1 : (isFeatured ? { base: 1, md: 2 } : 1)}
      rowSpan={isList ? 1 : (isFeatured ? { base: 1, md: 2 } : 1)}
      whileHover={{ y: isList ? 0 : -8, scale: 1.01 }}
      transition={{ 
        layout: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
        opacity: { duration: 0.4, delay: index * 0.04 },
        scale: { duration: 0.4, delay: index * 0.04 }
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
          borderRadius={isList ? '2xl' : '3xl'}
          borderWidth="1px"
          borderColor="outline"
          overflow="hidden"
          p={isList ? { base: 4, md: 6 } : (isFeatured ? { base: 8, md: 12 } : 8)}
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
            top={isList ? '0' : '-20%'}
            left={isList ? '0' : 'auto'}
            right={isList ? 'auto' : '-10%'}
            w={isList ? '100px' : '60%'}
            h={isList ? '100%' : '60%'}
            bgGradient={
              isList
                ? 'linear(to-r, primaryAlpha.100, transparent)'
                : 'radial(primaryAlpha.200, transparent 70%)'
            }
            filter="blur(60px)"
            opacity={0}
            _groupHover={{ opacity: 1 }}
            transition="opacity 0.6s ease"
          />

          <Flex
            direction={isList ? { base: 'column', md: 'row' } : 'column'}
            align={isList ? { base: 'stretch', md: 'center' } : 'stretch'}
            justify="space-between"
            h="full"
            position="relative"
            zIndex={1}
            gap={isList ? { base: 4, md: 8 } : 0}
          >
            <Flex
              direction={isList ? { base: 'column', sm: 'row' } : 'column'}
              align={isList ? { base: 'flex-start', sm: 'center' } : 'stretch'}
              gap={isList ? { base: 4, md: 8 } : 0}
              flex={1}
            >
              <Flex align="center" gap={4} mb={isList ? 0 : 8}>
                <Flex
                  align="center"
                  justify="center"
                  flexShrink={0}
                  w={isList ? 12 : (isFeatured ? 14 : 10)}
                  h={isList ? 12 : (isFeatured ? 14 : 10)}
                  borderRadius={isList ? 'xl' : (isFeatured ? '2xl' : 'xl')}
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
                    style={{ fontSize: isList ? '24px' : (isFeatured ? '28px' : '20px') }}
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
                    {number} {'// '} {count} {' RESOURCES'}
                  </Text>
                </Box>
              </Flex>

              <Box flex={1} mt={isList ? 0 : 0}>
                <Heading
                  as="h3"
                  fontSize={isList ? 'lg' : (isFeatured ? { base: '2xl', md: '3xl' } : '2xl')}
                  fontFamily="heading"
                  fontWeight="black"
                  lineHeight="shorter"
                  letterSpacing="tight"
                  color="onSurface"
                  mb={isList ? 1 : 6}
                  transition="all 0.3s ease"
                  _groupHover={{ color: 'primary' }}
                >
                  {title}
                </Heading>

                <Text
                  fontFamily="body"
                  fontSize={isList ? 'sm' : (isFeatured ? 'lg' : 'sm')}
                  color="onSurfaceVariant"
                  maxW={isFeatured ? 'lg' : 'full'}
                  lineHeight={isList ? 'shorter' : 'tall'}
                  opacity={0.8}
                  lineClamp={isList ? 1 : undefined}
                >
                  {description}
                </Text>
              </Box>
            </Flex>

            <Flex 
              align="center" 
              justify="space-between" 
              mt={isList ? 2 : 12}
              minW={isList ? { base: 'full', md: '200px' } : 'auto'}
            >
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
                w={isList ? 10 : 12}
                h={isList ? 10 : 12}
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
                  transform: isList ? 'translateX(4px)' : 'rotate(45deg)',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: isList ? '20px' : '24px' }}
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

const SectionToggle = ({ sections, activeSection, setActiveSection }: any) => {
  return (
    <HStack
      bg="surfaceContainer/40"
      backdropFilter="blur(24px)"
      p={1.5}
      borderRadius="2xl"
      borderWidth="1px"
      borderColor="outline"
      gap={1}
      maxW="full"
      overflowX="auto"
      css={{
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      {sections.map((section: any) => {
        const isActive = activeSection === section.id;
        return (
          <Box key={section.id} position="relative">
            <Button
              onClick={() => setActiveSection(section.id as any)}
              variant="ghost"
              size="sm"
              height="36px"
              px={6}
              borderRadius="xl"
              fontSize="xs"
              fontFamily="mono"
              fontWeight="bold"
              letterSpacing="widest"
              textTransform="uppercase"
              position="relative"
              zIndex={1}
              transition="all 0.3s ease"
              color={isActive ? 'onPrimary' : 'onSurfaceVariant'}
              bg="transparent"
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
    </HStack>
  );
};

const ViewModeToggle = ({ viewMode, setViewMode }: any) => {
  return (
    <HStack
      position="absolute"
      right={0}
      bg="surfaceContainer/40"
      backdropFilter="blur(24px)"
      p={1}
      borderRadius="xl"
      borderWidth="1px"
      borderColor="outline"
      gap={1}
      display={{ base: 'none', md: 'flex' }}
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
            bg: viewMode === mode.id ? 'primaryAlpha.300' : 'surfaceContainer/60',
            color: viewMode === mode.id ? 'primary' : 'onSurface',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
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
      direction="row"
      align="center"
      justify="center"
      mb={16}
      position="relative"
      w="full"
    >
      <SectionToggle
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
    </Flex>
  );
};

const CategoryGrid = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<'all' | 'library' | 'tools'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCategories = CATEGORIES.filter((category) => {
    if (activeSection === 'all') return true;
    if (activeSection === 'library') return category.section === 'information_library';
    if (activeSection === 'tools') return category.section === 'information_tools';
    return true;
  });

  const sections = [
    { id: 'all', label: t('LandingPage.Categories.sections.all') },
    { id: 'library', label: t('LandingPage.Categories.sections.library') },
    { id: 'tools', label: t('LandingPage.Categories.sections.tools') },
  ];

  return (
    <Box as="section" pb={32} px={{ base: 4, md: 12 }}>
      <FilterBar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <Grid
        templateColumns={viewMode === 'grid' ? { base: '1fr', md: 'repeat(4, 1fr)' } : '1fr'}
        gap={6}
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
