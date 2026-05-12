import CopyrightFooter from '../CopyrightFooter';
import { renderWithRouter } from '@testUtils';

describe('CopyrightFooter', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<CopyrightFooter />);
    expect(container).toMatchSnapshot();
  });
});
