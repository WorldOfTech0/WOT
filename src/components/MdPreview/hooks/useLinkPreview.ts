import { useState, useCallback, useRef } from 'react';

export interface PreviewState {
  visible: boolean;
  url: string;
  x: number;
  y: number;
}

const HOVER_DELAY_MS = 1000;

export const useLinkPreview = () => {
  const [preview, setPreview] = useState<PreviewState>({
    visible: false,
    url: '',
    x: 0,
    y: 0,
  });

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentUrlRef = useRef<string>('');

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(
    (url: string, event: MouseEvent) => {
      // Skip non-http links
      if (!url.startsWith('http')) return;

      clearTimer();
      currentUrlRef.current = url;

      const x = event.clientX;
      const y = event.clientY;

      timerRef.current = setTimeout(() => {
        if (currentUrlRef.current === url) {
          setPreview({ visible: true, url, x, y });
        }
      }, HOVER_DELAY_MS);
    },
    [clearTimer],
  );

  const handleMouseLeave = useCallback(() => {
    clearTimer();
    currentUrlRef.current = '';
    setPreview((prev) => ({ ...prev, visible: false }));
  }, [clearTimer]);

  return { preview, handleMouseEnter, handleMouseLeave };
};
