import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import ModalProvider from '../ModalProvider';
import { appStore } from '@uiStore';

describe('ModalProvider', () => {
  it('should render correctly', () => {
    const { result } = renderHook(() => appStore());

    result.current.Modal.resetModalState();
    const { container } = render(<ModalProvider>App</ModalProvider>);

    jest.runAllTimersAsync();

    expect(container).toMatchSnapshot();
    expect(screen.getByText('App')).toBeDefined();
  });

  it('should render correctly with children', () => {
    const { result } = renderHook(() => appStore());

    result.current.Modal.resetModalState();
    const { container } = render(
      <ModalProvider>
        <div>App</div>
      </ModalProvider>,
    );

    jest.runAllTimersAsync();

    expect(container).toMatchSnapshot();
    expect(screen.getByText('App')).toBeDefined();
  });
});
