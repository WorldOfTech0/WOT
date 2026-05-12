import { render } from '@testing-library/react';
import App from '../App';

// Mock RouterProvider to avoid rendering the full app routes which might be slow or have side effects
jest.mock('@providers', () => ({
  LocalizationProvider: ({ children }: any) => <>{children}</>,
  ThemeProvider: ({ children }: any) => <>{children}</>,
  RouterProvider: () => <div data-testid="router-provider">App Rendered</div>,
}));

describe('App', () => {
  it('should render without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});
