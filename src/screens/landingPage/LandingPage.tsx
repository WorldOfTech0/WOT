import { Box } from '@chakra-ui/react';
import { HeroSection, CategoryGrid } from './components';
import { SEO } from '@components';

const LandingPage = () => {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WorldOfTech',
    url: 'https://worldoftech.dev',
    description:
      'The premium curated directory for tech resources, documentation, guides, and tools.',
  };

  return (
    <Box
      display="flex"
      flexDir="column"
      rowGap={10}
      overflowX="hidden"
      maxW="80vw"
      mx="auto"
    >
      <SEO schema={websiteSchema} />
      <HeroSection />
      <CategoryGrid />
    </Box>
  );
};

export default LandingPage;
