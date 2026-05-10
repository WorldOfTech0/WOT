import { IconButton, useColorMode } from '@chakra-ui/react';

import { HourcodingIcon, IconHc } from '@assets';

import { ICON_SIZE_STYLE } from './constants';
import { COMMON_ICON_STYLE } from './constants';

const ThemeIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      {...COMMON_ICON_STYLE}
      icon={
        colorMode === 'dark' ? (
          <HourcodingIcon
            color={'yellow'}
            icon={IconHc.DAY}
            {...ICON_SIZE_STYLE}
          />
        ) : (
          <HourcodingIcon icon={IconHc.NIGHT} {...ICON_SIZE_STYLE} />
        )
      }
      _hover={{ bg: 'green.900' }}
      aria-label={'instagram-icon'}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeIcon;
