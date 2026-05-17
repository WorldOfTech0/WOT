import { Box } from '@chakra-ui/react';
import { HeroSection, CategoryGrid } from './components';

const LandingPage = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      rowGap={10}
      overflowX="hidden"
      maxW="80vw"
      mx="auto"
    >
      <HeroSection />
      <CategoryGrid />
    </Box>
  );
};

export default LandingPage;
