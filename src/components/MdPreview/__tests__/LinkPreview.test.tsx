import { screen } from '@testing-library/react';
import LinkPreview from '../LinkPreview';
import { renderWithRouter } from '../../../testUtils/renderUtils';

describe('LinkPreview', () => {
  const renderPreview = (
    props = { url: 'https://example.com', x: 100, y: 100 },
  ) => {
    return renderWithRouter(<LinkPreview {...props} />);
  };

  it('should render the domain', () => {
    renderPreview();
    expect(screen.getByText('example.com')).toBeInTheDocument();
  });

  it('should render initial state correctly', () => {
    const { container } = renderPreview();
    expect(container).toBeTruthy();
  });
});
