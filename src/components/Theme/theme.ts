import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import colors from './colors';
import {
  breakpoints,
  fontSize,
  fontWeight,
  lineHeight,
  zIndices,
} from './fonts';
import '@fontsource/bungee-shade';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};

const themeData = {
  config: { ...config },
  colors: { ...colors },
  breakpoints: { ...breakpoints },
  fonts: {
    heading: `'Bungee Shade', sans-serif`,
    body: `'Karla Variable', sans-serif`,
  },
  fontSizes: { ...fontSize },
  fontWeights: { ...fontWeight },
  lineHeights: { ...lineHeight },
  zIndices: { ...zIndices },
};

const theme = extendTheme(themeData);

export default theme;
