import { render } from '@testing-library/react';
import LazyProvider from '../LazyProvider';
import { system } from '@components';
import { ChakraProvider } from '@chakra-ui/react';

describe('LazyProvider', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <ChakraProvider value={system}>
        <LazyProvider>
          <div>Test Child</div>
        </LazyProvider>
      </ChakraProvider>,
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });
});
