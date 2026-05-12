import CategoryGrid from '../CategoryGrid';
import { renderWithRouter } from '@testUtils';

describe('CategoryGrid', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<CategoryGrid />);
    expect(container).toMatchSnapshot();
  });
});
