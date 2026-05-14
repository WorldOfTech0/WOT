import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

interface LinkPreviewProps {
  url: string;
  x: number;
  y: number;
}

const PREVIEW_WIDTH = 340;
const PREVIEW_HEIGHT = 220;
const OFFSET = 16;

const getScreenshotUrl = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const getFavicon = (url: string) => {
  try {
    const { origin } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${origin}&sz=16`;
  } catch {
    return '';
  }
};

const getDomain = (url: string) => {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return url;
  }
};

const LinkPreview = ({ url, x, y }: LinkPreviewProps) => {
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    setImgError(false);
    setImgLoaded(false);
    return () => setMounted(false);
  }, [url]);

  // Calculate position — keep popup inside viewport
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let left = x + OFFSET;
  let top = y + OFFSET;

  if (left + PREVIEW_WIDTH > vw - 16) {
    left = x - PREVIEW_WIDTH - OFFSET;
  }
  if (top + PREVIEW_HEIGHT > vh - 16) {
    top = y - PREVIEW_HEIGHT - OFFSET;
  }

  const popup = (
    <div
      style={{
        position: 'fixed',
        top,
        left,
        width: PREVIEW_WIDTH,
        zIndex: 99999,
        borderRadius: '14px',
        overflow: 'hidden',
        background: 'rgba(15, 10, 25, 0.92)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(192, 132, 252, 0.25)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(192,132,252,0.08)',
        animation: 'linkPreviewFadeIn 0.18s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: 'none',
      }}
    >
      {/* Screenshot */}
      <div
        style={{
          width: '100%',
          height: PREVIEW_HEIGHT,
          position: 'relative',
          background: 'rgba(255,255,255,0.03)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Skeleton shimmer while loading */}
        {!imgLoaded && !imgError && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(192,132,252,0.06) 50%, rgba(255,255,255,0.03) 75%)',
              backgroundSize: '200% 100%',
              animation: 'linkPreviewShimmer 1.4s infinite',
            }}
          />
        )}
        {!imgError ? (
          <img
            key={url}
            src={getScreenshotUrl(url)}
            alt="preview"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: imgLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease',
              display: 'block',
            }}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '12px',
              fontFamily: 'monospace',
            }}
          >
            <span style={{ fontSize: '28px' }}>🌐</span>
            <span>Preview unavailable</span>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 14px',
          borderTop: '1px solid rgba(192, 132, 252, 0.12)',
        }}
      >
        <img
          src={getFavicon(url)}
          alt=""
          width={14}
          height={14}
          style={{ borderRadius: '2px', flexShrink: 0 }}
          onError={e => ((e.target as HTMLImageElement).style.display = 'none')}
        />
        <span
          style={{
            fontSize: '11px',
            color: 'rgba(192,132,252,0.9)',
            fontFamily: 'monospace',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flex: 1,
          }}
        >
          {getDomain(url)}
        </span>
        <span
          style={{
            fontSize: '10px',
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'monospace',
            flexShrink: 0,
          }}
        >
          ↗
        </span>
      </div>

      {/* Keyframe styles injected inline */}
      <style>{`
        @keyframes linkPreviewFadeIn {
          from { opacity: 0; transform: translateY(6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        @keyframes linkPreviewShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );

  if (!mounted) return null;
  return createPortal(popup, document.body);
};

export default LinkPreview;
