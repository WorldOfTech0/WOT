import SideNavBar from '../SideNavBar';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@components';

describe('SideNavBar', () => {
  const renderWithRouter = (initialEntries: string[]) => {
    return render(
      <ChakraProvider value={system}>
        <MemoryRouter initialEntries={initialEntries}>
          <SideNavBar />
        </MemoryRouter>
      </ChakraProvider>,
    );
  };

  it('should render correctly in default state', () => {
    const { container } = renderWithRouter(['/']);
    expect(container).toMatchSnapshot();
  });

  it('should render collapsed in subcategory route', () => {
    const { container } = renderWithRouter(['/software/react']);
    expect(container).toMatchSnapshot();
  });
});
