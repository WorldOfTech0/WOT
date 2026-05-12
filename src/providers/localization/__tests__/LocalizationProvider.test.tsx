import { render } from '@testing-library/react';
import LocalizationProvider from '../LocalizationProvider';

describe('LocalizationProvider', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <LocalizationProvider>
        <div>Test Child</div>
      </LocalizationProvider>,
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });
});
