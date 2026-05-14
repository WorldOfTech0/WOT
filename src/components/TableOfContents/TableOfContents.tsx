import { Box, VStack, Text, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface Heading {
  level: number;
  text: string;
  id: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -80% 0%' },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // TopNavBar height + some padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const activeIndex = headings.findIndex((h) => h.id === activeId);

  if (headings.length === 0) return null;

  return (
    <Box
      as="nav"
      aria-label="Table of contents"
      position="sticky"
      top="100px"
      maxH="calc(100vh - 120px)"
      overflowY="auto"
      w="72"
      display={{ base: 'none', xl: 'block' }}
      pr={4}
      css={{
        '&::-webkit-scrollbar': { width: '4px' },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '2px',
        },
      }}
    >
      <Text
        fontSize="xs"
        fontWeight="black"
        color="primary"
        textTransform="uppercase"
        letterSpacing="0.2em"
        mb={6}
        opacity={0.8}
        pl={4}
      >
        On This Page
      </Text>

      <Box position="relative" pl={4}>
        {/* Vertical Track */}
        <Box
          position="absolute"
          left="0"
          top="0"
          bottom="0"
          w="1px"
          bg="outline"
          opacity={0.2}
        />

        {/* Active Indicator */}
        {activeIndex !== -1 && (
          <Box
            position="absolute"
            left="-1px"
            w="2px"
            h="6"
            bg="primary"
            borderRadius="full"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            transform={`translateY(${activeIndex * 32}px)`}
            boxShadow="0 0 10px var(--chakra-colors-primary)"
          />
        )}

        <VStack align="stretch" gap={2}>
          {headings.map((heading, index) => (
            <Box
              key={heading.id}
              h="6"
              display="flex"
              alignItems="center"
              pl={(heading.level - 1) * 3}
            >
              <Link
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                fontSize="sm"
                lineHeight="shorter"
                color={activeId === heading.id ? 'primary' : 'onSurfaceVariant'}
                fontWeight={activeId === heading.id ? 'semibold' : 'medium'}
                _hover={{
                  color: 'primary',
                  textDecoration: 'none',
                  transform: 'translateX(4px)',
                }}
                display="block"
                w="full"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                transition="all 0.2s ease"
              >
                {heading.text}
              </Link>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default TableOfContents;
