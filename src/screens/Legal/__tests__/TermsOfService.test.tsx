import TermsOfService from '../TermsOfService';
import { renderWithRouter } from '@testUtils';

describe('TermsOfService', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<TermsOfService />);
    expect(container).toMatchSnapshot();
  });
});
