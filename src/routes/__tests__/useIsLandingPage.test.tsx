import { renderHook } from '@testing-library/react';
import useIsLandingPage from '../useIsLandingPage';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('useIsLandingPage', () => {
  it('should return true for landing page path', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/' });
    const { result } = renderHook(() => useIsLandingPage());
    expect(result.current).toBe(true);
  });

  it('should return true for privacy policy path', () => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/privacy-policy' });
    const { result } = renderHook(() => useIsLandingPage());
    expect(result.current).toBe(true);
  });

  it('should return false for category path', () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: '/category/software',
    });
    const { result } = renderHook(() => useIsLandingPage());
    expect(result.current).toBe(false);
  });
});
