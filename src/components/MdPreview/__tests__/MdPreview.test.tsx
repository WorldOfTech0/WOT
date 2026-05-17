import { screen, fireEvent } from '@testing-library/react';
import MdPreview from '../MdPreview';
import { renderWithRouter } from '../../../testUtils/renderUtils';

describe('MdPreview', () => {
  it('should render empty MdPreview', () => {
    const { container } = renderWithRouter(<MdPreview mdString={''} />);
    expect(container).toBeTruthy();
  });

  it('should render MdPreview with content', () => {
    renderWithRouter(<MdPreview mdString={'# Test Content'} />);
    expect(screen.getByTestId('markdown-preview')).toBeInTheDocument();
    expect(screen.getByText('# Test Content')).toBeInTheDocument();
  });

  it('should add target="_blank" to links on mouse over', () => {
    const { container } = renderWithRouter(
      <MdPreview mdString={'[Link](https://google.com)'} />,
    );

    // We need to simulate the markdown-preview rendering a link
    // Since it's mocked, we have to manually add a link to the container for testing the effect
    const box = container.firstChild as HTMLElement;
    const link = document.createElement('a');
    link.href = 'https://google.com';
    box.appendChild(link);

    fireEvent.mouseOver(link);
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener noreferrer');
  });
});
