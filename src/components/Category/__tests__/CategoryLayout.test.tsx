import CategoryLayout from '../CategoryLayout';
import { renderWithRouter } from '@testUtils';

describe('CategoryLayout', () => {
  it('should render correctly for media category', () => {
    const { container } = renderWithRouter(<CategoryLayout categoryId="media" />);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly for tools category', () => {
    const { container } = renderWithRouter(<CategoryLayout categoryId="tools" />);
    expect(container).toMatchSnapshot();
  });

  it('should return null for non-existent category', () => {
    const { container } = renderWithRouter(<CategoryLayout categoryId="invalid" />);
    expect(container.firstChild).toBeNull();
  });
});
