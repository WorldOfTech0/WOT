import ContentViewer from '../ContentViewer';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@components';

describe('ContentViewer', () => {
  const renderWithParams = (categoryId: string, subcategoryId: string) => {
    return render(
      <ChakraProvider value={system}>
        <MemoryRouter initialEntries={[`/${categoryId}/${subcategoryId}`]}>
          <Routes>
            <Route path="/:category/:subcategory" element={<ContentViewer />} />
          </Routes>
        </MemoryRouter>
      </ChakraProvider>
    );
  };

  it('should render correctly for react subcategory', () => {
    const { container } = renderWithParams('software', 'react');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly for nodejs subcategory', () => {
    const { container } = renderWithParams('software', 'nodejs');
    expect(container).toMatchSnapshot();
  });

  it('should render placeholder for unknown subcategory', () => {
    const { getAllByText } = renderWithParams('software', 'unknown-tech');
    expect(getAllByText(/unknown-tech/i).length).toBeGreaterThan(0);
  });
});
