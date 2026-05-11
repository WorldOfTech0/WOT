import {
  VStack,
  Heading,
  Input,
  Text,
  Box,
  Flex,
  Button,
  Collapsible,
} from '@chakra-ui/react';
import { fuse } from '@data';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { appStore, ModalID } from '@uiStore';

const BackgroundAnimation = () => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={0}
      overflow="hidden"
      pointerEvents="none"
    >
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          borderRadius: 'full',
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)',
          borderRadius: 'full',
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.03) 0%, transparent 70%)',
          borderRadius: 'full',
          filter: 'blur(100px)',
        }}
      />
    </Box>
  );
};

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearchText] = useState<string>('');
  const [list, setList] = useState<any[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const result = fuse.search(search);
      setList(result.map((item) => item.item));
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  useEffect(() => {
    setIsOpen(list.length > 0);
  }, [list.length, search]);

  return (
    <Box
      as="section"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      pt={24}
      pb={16}
      px={{ base: 4, md: 12 }}
      overflow="hidden"
    >
      <BackgroundAnimation />

      {/* Version Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Flex
          align="center"
          gap={2}
          bg="surfaceContainerHigh/50"
          backdropFilter="blur(8px)"
          borderWidth={1}
          borderColor="outline"
          borderRadius="full"
          px={4}
          py={1.5}
          mb={8}
          position="relative"
          zIndex={1}
        >
          <Box position="relative">
            <Box w={1.5} h={1.5} borderRadius="full" bg="primary" />
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '100%',
                backgroundColor: 'var(--colors-primary)',
              }}
            />
          </Box>
          <Text
            fontSize="xs"
            fontFamily="mono"
            color="primary"
            textTransform="uppercase"
            letterSpacing="0.2em"
            fontWeight="black"
          >
            {t('LandingPage.Hero.version')}
          </Text>
        </Flex>
      </motion.div>

      {/* Main Heading */}
      <VStack gap={6} position="relative" zIndex={1} maxW="4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: '5xl', md: '8xl' }}
            fontFamily="heading"
            fontWeight="black"
            letterSpacing="tighter"
            lineHeight="1"
            color="onSurface"
          >
            {t('LandingPage.Hero.headingMain')} <br />
            <Text as="span" color="primary" fontSize="8xl" opacity={0.7}>
              {t('LandingPage.Hero.headingAccent')}
            </Text>
          </Heading>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Text
            color="onSurfaceVariant"
            fontFamily="body"
            fontSize={{ base: 'lg', md: '2xl' }}
            maxW="2xl"
            lineHeight="1.4"
            fontWeight="medium"
          >
            {t('LandingPage.Hero.subtext')}
          </Text>
        </motion.div>
      </VStack>

      {/* Search Bar Container */}
      <Box position="relative" w="full" maxW="2xl" mt={12} zIndex={1}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Flex align="center" gap={4} mb={3} ml={4}>
            <Box w={1} h={1} borderRadius="full" bg="primary" />
            <Text
              fontFamily="mono"
              fontSize="xs"
              fontWeight="black"
              color="primary"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              {t('LandingPage.Categories.techStack')}
            </Text>
          </Flex>

          <Box
            position="absolute"
            inset={-1}
            bgGradient="to-r"
            gradientFrom="primary"
            gradientTo="secondary"
            opacity={0.15}
            borderRadius="32px"
            filter="blur(25px)"
          />
          <Flex
            position="relative"
            align="center"
            bg="surfaceContainerHigh/70"
            backdropFilter="blur(20px)"
            borderWidth={1}
            borderColor="outline"
            borderRadius="full"
            p={1.5}
            transition="all 0.3s"
            _focusWithin={{
              borderColor: 'primary',
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.25)',
              transform: 'translateY(-2px)',
            }}
          >
            <Box pl={5} pr={3} color="primary">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '24px' }}
              >
                search
              </span>
            </Box>
            <Input
              placeholder={t('LandingPage.Hero.searchPlaceholder')}
              w="full"
              bg="transparent"
              border="none"
              outline="none"
              color="onSurface"
              fontFamily="mono"
              fontSize="md"
              py={4}
              value={search}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  appStore.getState().Modal.openModal(ModalID.SEARCH, { searchQuery: search });
                }
              }}
              _placeholder={{ color: 'onSurfaceVariant', opacity: 0.5 }}
            />
            <Button
              bg="primary"
              color="onPrimary"
              px={10}
              h="52px"
              borderRadius="full"
              fontFamily="mono"
              fontSize="sm"
              fontWeight="black"
              letterSpacing="widest"
              _hover={{
                bg: 'primaryContainer',
                transform: 'scale(1.02)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
              }}
              _active={{ transform: 'scale(0.98)' }}
              transition="all 0.2s"
              onClick={() => appStore.getState().Modal.openModal(ModalID.SEARCH, { searchQuery: search })}
            >
              {t('Common.execute')}
            </Button>
          </Flex>

          {/* Search Results Dropdown */}
          <Collapsible.Root
            open={isOpen}
            style={{
              width: '100%',
              position: 'absolute',
              top: '100%',
              marginTop: '1.5rem',
              zIndex: 10,
            }}
          >
            <Collapsible.Content>
              <VStack
                w="full"
                bg="surfaceContainerHigh/95"
                backdropFilter="blur(20px)"
                borderWidth={1}
                borderColor="outline"
                borderRadius="2xl"
                py={3}
                maxH="45vh"
                overflowY="auto"
                align="stretch"
                boxShadow="dark-lg"
              >
                {list.map((item) => (
                  <Link key={item.title} to={item.path}>
                    <Box
                      px={6}
                      py={4}
                      _hover={{
                        bg: 'rgba(139, 92, 246, 0.1)',
                        color: 'primary',
                      }}
                      transition="all 0.2s"
                    >
                      <Text
                        color="inherit"
                        textAlign="left"
                        fontSize="md"
                        fontWeight="bold"
                      >
                        {item.title}
                      </Text>
                    </Box>
                  </Link>
                ))}
              </VStack>
            </Collapsible.Content>
          </Collapsible.Root>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
