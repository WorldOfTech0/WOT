import PrivacyPolicy from '../PrivacyPolicy';
import { renderWithRouter } from '@testUtils';

describe('PrivacyPolicy', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<PrivacyPolicy />);
    expect(container).toMatchSnapshot();
  });
});
