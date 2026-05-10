import {
  VStack,
  Stack,
  Heading,
  Input,
  Text,
  Collapse,
  useDisclosure,
  CloseButton,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { fuse } from '@data';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [search, setSearchText] = useState<string>('');
  const [list, setList] = useState<any[]>([]);

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
    if (list.length > 0) {
      onOpen();
    } else {
      onClose();
    }
  }, [list.length, onClose, onOpen, search]);

  return (
    <Stack
      paddingTop={10}
      alignItems={'center'}
      width={'100%'}
      bg={'green.800'}
      rowGap={2}
      py={5}
      height={'fit-content'}
      zIndex={1}
    >
      <Heading
        textAlign={'center'}
        size={{ base: 'md', md: 'lg' }}
        color={'white'}
        filter={'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.75))'}
      >
        {t('LandingPage.heroText')}
      </Heading>
      <Text
        textAlign={'center'}
        fontSize={{ base: 'medium', md: 'large' }}
        textColor={'neutral.100'}
      >
        {t('LandingPage.subHeroText')}
      </Text>
      <InputGroup
        width={{ base: '80%', md: '50%' }}
        borderColor={'green.800'}
        borderRadius={'full'}
        color={'green.800'}
      >
        <Input
          bg={'white'}
          borderRadius={'full'}
          paddingStart={{ base: 3, md: 5 }}
          value={search}
          _active={{
            borderColor: 'green.800',
          }}
          _focus={{
            borderColor: 'green.800',
          }}
          placeholder={t('LandingPage.searchPlaceholder')}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <InputRightAddon
          _hover={{
            cursor: 'pointer',
          }}
          onClick={() => {
            setSearchText('');
          }}
          bg={'white'}
          borderEndRadius={'full'}
        >
          <CloseButton size={'md'} color={'green'} />
        </InputRightAddon>
      </InputGroup>
      <Collapse
        style={{
          width: '50%',
        }}
        in={isOpen}
        animateOpacity
        transition={{
          exit: {
            duration: 0.5,
            animation: 'easeInOut',
          },
          enter: {
            duration: 0.5,
            animation: 'easeInOut',
          },
        }}
      >
        <VStack
          width={'100%'}
          zIndex={10}
          py={2}
          height={'40vh'}
          bg={'white'}
          borderRadius={10}
          boxShadow={'md'}
          overflow={'auto'}
        >
          {list.map((item) => (
            <Text
              width={'100%'}
              fontSize={{ base: 'medium', md: 'large' }}
              key={item.title}
              textColor={'green.800'}
              as={Link}
              paddingX={5}
              to={item.path}
              _hover={{
                bg: 'green.100',
                borderRadius: 5,
              }}
              textAlign={'left'}
            >
              {item.title}
            </Text>
          ))}
        </VStack>
      </Collapse>
    </Stack>
  );
};

export default HeroSection;
