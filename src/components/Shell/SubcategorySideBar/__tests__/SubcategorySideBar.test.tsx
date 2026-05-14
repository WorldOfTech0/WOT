import { screen } from '@testing-library/react';
import SubcategorySideBar from '../SubcategorySideBar';
import { renderWithRouter } from '../../../../testUtils/renderUtils';

const mockCategory = {
  id: 'software',
  navKey: 'Navigation.software',
  path: '/software',
  subcategories: [
    { id: 'react', titleKey: 'Software.react.title', path: '/software/react', icon: 'code', docName: 'react' },
    { id: 'nodejs', titleKey: 'Software.nodejs.title', path: '/software/nodejs', icon: 'terminal', docName: 'nodejs' },
  ],
};

describe('SubcategorySideBar', () => {
  it('should render category title and subcategories', () => {
    renderWithRouter(
      <SubcategorySideBar category={mockCategory as any} currentSubcategoryId="react" />
    );
    
    // Check if category title (navKey) is rendered - i18next mock returns the key
    expect(screen.getByText('Navigation.software')).toBeInTheDocument();
    
    // Check if subcategories are rendered
    expect(screen.getByText('Software.react.title')).toBeInTheDocument();
    expect(screen.getByText('Software.nodejs.title')).toBeInTheDocument();
  });

  it('should highlight the active subcategory', () => {
    renderWithRouter(
      <SubcategorySideBar category={mockCategory as any} currentSubcategoryId="react" />
    );
    
    // Find the active element. In our implementation, it has a specific background color logic.
    // Since we are using Chakra UI, we can check for the text weight or other indicators.
    const activeText = screen.getByText('Software.react.title');
    expect(activeText).toHaveStyle('font-weight: var(--chakra-font-weights-bold)');
  });
});
