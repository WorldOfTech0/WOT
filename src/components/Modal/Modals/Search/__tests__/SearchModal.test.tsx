import SearchModal from '../SearchModal';
import { renderWithRouter } from '@testUtils';

describe('SearchModal', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<SearchModal />);
    expect(container).toMatchSnapshot();
  });
});
