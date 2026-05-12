import CategoryLayout from '../CategoryLayout';
import { renderWithRouter } from '@testUtils';

describe('CategoryLayout', () => {
  it('should render correctly for software category', () => {
    const { container } = renderWithRouter(<CategoryLayout categoryId="software" />);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly for infrastructure category', () => {
    const { container } = renderWithRouter(<CategoryLayout categoryId="infrastructure" />);
    expect(container).toMatchSnapshot();
  });

  it('should return null for non-existent category', () => {
    const { container } = renderWithRouter(<CategoryLayout categoryId="invalid" />);
    expect(container.firstChild).toBeNull();
  });
});
