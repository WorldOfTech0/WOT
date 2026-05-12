import ThemeIcon from '../ThemeIcon';
import { renderWithProviders } from '@testUtils';

jest.mock('next-themes', () => ({
  useTheme: () => ({
    resolvedTheme: 'dark',
    setTheme: jest.fn(),
  }),
}));

describe('ThemeIcon', () => {
  it('should render correctly', () => {
    const { container } = renderWithProviders(<ThemeIcon />);
    expect(container).toMatchSnapshot();
  });
});
