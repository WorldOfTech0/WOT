import { screen } from '@testing-library/react';
import TableOfContents from '../TableOfContents';
import { renderWithRouter } from '../../../testUtils/renderUtils';

const headings = [
  { level: 1, text: 'Heading 1', id: 'heading-1' },
  { level: 2, text: 'Heading 2', id: 'heading-2' },
];

describe('TableOfContents', () => {
  const renderTOC = (props = { headings }) => {
    return renderWithRouter(<TableOfContents {...props} />);
  };

  it('should render headings', () => {
    renderTOC();
    expect(screen.getByText('Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Heading 2')).toBeInTheDocument();
  });

  it('should return null if no headings', () => {
    const { container } = renderTOC({ headings: [] });
    expect(container.firstChild).toBeNull();
  });

  it('should render links with correct hrefs', () => {
    const { container } = renderTOC();
    const links = container.querySelectorAll('a');
    expect(links[0]).toHaveAttribute('href', '#heading-1');
    expect(links[1]).toHaveAttribute('href', '#heading-2');
  });
});
