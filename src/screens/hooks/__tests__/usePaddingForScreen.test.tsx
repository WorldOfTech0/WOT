import { renderHook } from '@testing-library/react';
import usePaddingForScreen from '../usePaddingForScreen';
import { useIsLandingPage } from '@routes';

jest.mock('@routes', () => ({
  useIsLandingPage: jest.fn(),
}));

describe('usePaddingForScreen', () => {
  it('should return full padding for landing page', () => {
    (useIsLandingPage as jest.Mock).mockReturnValue(true);
    const { result } = renderHook(() => usePaddingForScreen());
    expect(result.current).toHaveProperty('2xl');
  });

  it('should return minimal padding for non-landing page', () => {
    (useIsLandingPage as jest.Mock).mockReturnValue(false);
    const { result } = renderHook(() => usePaddingForScreen());
    expect(result.current).not.toHaveProperty('2xl');
    expect(result.current.base).toBe(3);
  });
});
