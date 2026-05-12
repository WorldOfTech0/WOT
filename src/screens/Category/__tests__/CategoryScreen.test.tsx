import CategoryScreen from '../CategoryScreen';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@components';

describe('CategoryScreen', () => {
  const renderWithParams = (categoryId: string) => {
    return render(
      <ChakraProvider value={system}>
        <MemoryRouter initialEntries={[`/${categoryId}`]}>
          <Routes>
            <Route path="/:categoryId" element={<CategoryScreen />} />
          </Routes>
        </MemoryRouter>
      </ChakraProvider>
    );
  };

  it('should render correctly for software category', () => {
    const { container } = renderWithParams('software');
    expect(container).toMatchSnapshot();
  });

  it('should render correctly for infrastructure category', () => {
    const { container } = renderWithParams('infrastructure');
    expect(container).toMatchSnapshot();
  });

  it('should render nothing for invalid category', () => {
    const { container } = renderWithParams('invalid');
    expect(container.firstChild).toBeNull();
  });
});
