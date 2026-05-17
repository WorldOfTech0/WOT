import CategoryScreen from '../CategoryScreen';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@components';
import { HelmetProvider } from 'react-helmet-async';

describe('CategoryScreen', () => {
  const renderWithParams = (categoryId: string) => {
    return render(
      <HelmetProvider>
        <ChakraProvider value={system}>
          <MemoryRouter initialEntries={[`/${categoryId}`]}>
            <Routes>
              <Route path="/:categoryId" element={<CategoryScreen />} />
            </Routes>
          </MemoryRouter>
        </ChakraProvider>
      </HelmetProvider>,
    );
  };

  it('should render correctly for media category', () => {
    const { container } = renderWithParams('media');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly for tools category', () => {
    const { container } = renderWithParams('tools');
    expect(container).toMatchSnapshot();
  });

  it('should render nothing for invalid category', () => {
    const { container } = renderWithParams('invalid');
    expect(container.firstChild).toBeNull();
  });
});
