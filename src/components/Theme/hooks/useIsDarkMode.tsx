import { useColorMode } from '@chakra-ui/react';

const useIsDarkMode = () => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark';
};

export default useIsDarkMode;
