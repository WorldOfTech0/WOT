import { render } from '@testing-library/react';
import ModalProvider from '../ModalProvider';
import { system } from '@components';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

describe('ModalProvider', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <ChakraProvider value={system}>
        <BrowserRouter>
          <ModalProvider>
            <div>Test Child</div>
          </ModalProvider>
        </BrowserRouter>
      </ChakraProvider>,
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });
});
