import { Box } from '@chakra-ui/react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import markdownStyle from './css/Markdown.module.css';
import { MdPreviewProps } from './types';
import { useTheme } from 'next-themes';
import { useRef, useEffect, useState } from 'react';
import { useLinkPreview } from './hooks/useLinkPreview';
import LinkPreview from './LinkPreview';

const MdPreview = ({ mdString }: MdPreviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { preview, handleMouseEnter, handleMouseLeave } = useLinkPreview();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseOver = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (anchor?.href) {
        // Ensure link opens in new tab
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        handleMouseEnter(anchor.href, e);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (anchor) {
        handleMouseLeave();
      }
    };

    container.addEventListener('mouseover', onMouseOver);
    container.addEventListener('mouseout', onMouseOut);

    return () => {
      container.removeEventListener('mouseover', onMouseOver);
      container.removeEventListener('mouseout', onMouseOut);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <Box
      ref={containerRef}
      width="full"
      data-color-mode={mounted ? resolvedTheme : 'dark'}
    >
      <MarkdownPreview
        className={markdownStyle.markdown}
        source={mdString}
        style={{ backgroundColor: 'transparent' }}
      />
      {preview.visible && (
        <LinkPreview url={preview.url} x={preview.x} y={preview.y} />
      )}
    </Box>
  );
};

export default MdPreview;
