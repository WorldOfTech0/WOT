import { IconButton } from '@chakra-ui/react';
import { useTheme } from 'next-themes';

import { WorldOfTechIcon, IconHc } from '@assets';

import { ICON_SIZE_STYLE } from './constants';
import { COMMON_ICON_STYLE } from './constants';

const ThemeIcon = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggleColorMode = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <IconButton
      {...COMMON_ICON_STYLE}
      _hover={{ bg: 'surfaceContainer' }}
      aria-label={'toggle-color-mode'}
      onClick={toggleColorMode}
    >
      {isDark ? (
        <WorldOfTechIcon
          color={'primary'}
          icon={IconHc.DAY}
          {...ICON_SIZE_STYLE}
        />
      ) : (
        <WorldOfTechIcon color={'primary'} icon={IconHc.NIGHT} {...ICON_SIZE_STYLE} />
      )}
    </IconButton>
  );
};

export default ThemeIcon;
