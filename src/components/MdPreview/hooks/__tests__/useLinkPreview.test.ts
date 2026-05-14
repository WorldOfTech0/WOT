import { renderHook, act } from '@testing-library/react';
import { useLinkPreview } from '../useLinkPreview';

describe('useLinkPreview', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useLinkPreview());
    expect(result.current.preview).toEqual({
      visible: false,
      url: '',
      x: 0,
      y: 0,
    });
  });

  it('should show preview after delay on mouse enter', () => {
    const { result } = renderHook(() => useLinkPreview());
    const event = { clientX: 100, clientY: 200 } as any;

    act(() => {
      result.current.handleMouseEnter('https://google.com', event);
    });

    // Should not be visible immediately
    expect(result.current.preview.visible).toBe(false);

    // Fast-forward 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.preview).toEqual({
      visible: true,
      url: 'https://google.com',
      x: 100,
      y: 200,
    });
  });

  it('should not show preview if mouse leaves before delay', () => {
    const { result } = renderHook(() => useLinkPreview());
    const event = { clientX: 100, clientY: 200 } as any;

    act(() => {
      result.current.handleMouseEnter('https://google.com', event);
    });

    act(() => {
      jest.advanceTimersByTime(500);
      result.current.handleMouseLeave();
    });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current.preview.visible).toBe(false);
  });
});
