import { render, screen } from '@testing-library/react';
import LazyProvider from '../LazyProvider';
import { Text } from '@chakra-ui/react';

describe('LazyProvider', () => {
  it('should render correctly', () => {
    const { container } = render(
      <LazyProvider>
        <Text>Test</Text>
      </LazyProvider>,
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText('Test')).toBeDefined();
  });
});
