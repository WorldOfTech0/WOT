import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { ThemeIcon } from '@components';
import { HourcodingIcon, IconHc } from '@assets';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { usePaddingForScreen } from '../../hooks';
import { NAVIGATION_LINKS } from './constants';

const NavigationBar = () => {
  const { t } = useTranslation();
  const padding = usePaddingForScreen();
  const titleKey = useLocation().pathname.split('/').pop();
  const title = titleKey ? t(`NavigationBar.${titleKey}`) : '';
  return (
    <HStack
      paddingX={padding}
      height={12}
      borderBottomWidth={1}
      shadow={'md'}
      justifyContent={'space-between'}
      py={6}
    >
      <HStack
        gap={0.2}
        as={Link}
        to={'https://www.hourcoding.com'}
        _hover={{
          cursor: 'pointer',
        }}
      >
        <Icon
          color={'white'}
          width={'3em'}
          height={'3em'}
          focusable={false}
          borderRadius={'full'}
          bg={'primary'}
          padding={2}
        >
          <HourcodingIcon icon={IconHc.HOURCODING} />
        </Icon>
        <Box display={{ base: 'none', xl: 'flex' }}>
          <Heading size={'md'} textColor={'primary'}>
            {t('Title_1')}
          </Heading>
          <Heading size={'md'}>{t('Title_2')}</Heading>
        </Box>
        {!isEmpty(title) ? (
          <>
            <Divider
              orientation={'vertical'}
              mx={6}
              bg={'primary'}
              width={'1px'}
              height={6}
            />
            <Text>{title} </Text>
          </>
        ) : null}
      </HStack>
      <HStack>
        <HStack
          spacing={{ base: 1, xl: 2 }}
          display={{ base: 'none', xl: 'flex' }}
        >
          {NAVIGATION_LINKS.map(({ name, link, icon }) => (
            <Button
              as={Link}
              to={link}
              p={0}
              variant={'ghost'}
              leftIcon={<HourcodingIcon icon={icon} height={20} width={20} />}
              key={link}
              aria-label={link + '-nav-link'}
            >
              <Text
                p={1}
                fontSize={{ base: 'smaller', md: 'medium' }}
                fontWeight={'bold'}
                textAlign={'center'}
                _hover={{
                  cursor: 'pointer',
                  color: 'primary',
                }}
                transition={'all 0.3s'}
              >
                {name}
              </Text>
            </Button>
          ))}
        </HStack>
        <Box display={{ base: 'flex', md: 'none' }}>
          <Menu placement="bottom">
            <MenuButton>
              <Button
                rightIcon={<HourcodingIcon icon={IconHc.MENU} />}
                variant={'outline'}
                borderColor="primary"
                borderWidth={1}
              >
                Menu
              </Button>
            </MenuButton>
            <MenuList
              zIndex={100}
              borderRadius={10}
              boxShadow={'md'}
              display={{ base: 'flex', md: 'none' }}
              flexDir="column"
            >
              {NAVIGATION_LINKS.map(({ name, link, icon }) => (
                <Button
                  rightIcon={
                    <HourcodingIcon icon={icon} height={20} width={20} />
                  }
                  key={link}
                  aria-label={link + '-nav-link'}
                >
                  <Text
                    p={1}
                    as={Link}
                    to={link}
                    fontSize={{ base: 'smaller', md: 'medium' }}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    _hover={{
                      cursor: 'pointer',
                      color: 'primary',
                    }}
                    transition={'all 0.3s'}
                  >
                    {name}
                  </Text>
                </Button>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <ThemeIcon />
      </HStack>
    </HStack>
  );
};

export default NavigationBar;
