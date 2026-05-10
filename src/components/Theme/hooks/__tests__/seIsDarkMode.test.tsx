import { renderHook } from '@testing-library/react';
import useIsDarkMode from '../useIsDarkMode';

describe('UseIsDarkMode', () => {
  it('should render', () => {
    const { result } = renderHook(() => useIsDarkMode());

    expect(result.current).toBeFalsy();
  });
});
