import { render } from '@testing-library/react';
import ThemeProvider from '../ThemeProvider';

describe('ThemeProvider', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Test Child</div>
      </ThemeProvider>,
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });
});
