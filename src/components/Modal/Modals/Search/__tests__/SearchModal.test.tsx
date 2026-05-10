import { render } from '@testing-library/react';
import SearchModal from '../SearchModal';

describe('Search modal', () => {
  it('Should render correctly', () => {
    const { container } = render(<SearchModal />);

    expect(container).toMatchSnapshot();
  });
});
