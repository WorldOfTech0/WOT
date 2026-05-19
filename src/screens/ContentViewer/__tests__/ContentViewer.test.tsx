import ContentViewer from '../ContentViewer';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@components';
import { HelmetProvider } from 'react-helmet-async';

describe('ContentViewer', () => {
  const renderWithParams = (categoryId: string, subcategoryId: string) => {
    return render(
      <HelmetProvider>
        <ChakraProvider value={system}>
          <MemoryRouter initialEntries={[`/${categoryId}/${subcategoryId}`]}>
            <Routes>
              <Route
                path="/:category/:subcategory"
                element={<ContentViewer />}
              />
            </Routes>
          </MemoryRouter>
        </ChakraProvider>
      </HelmetProvider>,
    );
  };

  it('should render correctly for streaming subcategory', () => {
    const { container } = renderWithParams('media', 'streaming');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly for dev_tools subcategory', () => {
    const { container } = renderWithParams('tools', 'dev_tools');
    expect(container).toMatchSnapshot();
  });

  it('should render placeholder for unknown subcategory', () => {
    const { getAllByText } = renderWithParams('tools', 'unknown-tech');
    expect(getAllByText(/unknown-tech/i).length).toBeGreaterThan(0);
  });
});
