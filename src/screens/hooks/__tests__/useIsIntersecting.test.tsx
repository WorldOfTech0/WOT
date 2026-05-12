import { renderHook } from '@testing-library/react';
import useIsIntersecting from '../useIsIntersecting';

describe('useIsIntersecting', () => {
  let observe: jest.Mock;
  let disconnect: jest.Mock;

  beforeEach(() => {
    observe = jest.fn();
    disconnect = jest.fn();
    (window as any).IntersectionObserver = jest.fn(() => ({
      observe,
      disconnect,
    }));
  });

  it('should observe the element on mount', () => {
    const ref = { current: document.createElement('div') };
    renderHook(() => useIsIntersecting(ref as any));
    expect(observe).toHaveBeenCalledWith(ref.current);
  });

  it('should disconnect on unmount', () => {
    const ref = { current: document.createElement('div') };
    const { unmount } = renderHook(() => useIsIntersecting(ref as any));
    unmount();
    expect(disconnect).toHaveBeenCalled();
  });
});
