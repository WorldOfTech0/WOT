import TopNavBar from '../TopNavBar';
import { renderWithRouter } from '@testUtils';

describe('TopNavBar', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<TopNavBar />);
    expect(container).toMatchSnapshot();
  });
});
