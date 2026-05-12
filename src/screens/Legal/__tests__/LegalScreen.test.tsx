import LegalScreen from '../LegalScreen';
import { renderWithRouter } from '@testUtils';

describe('LegalScreen', () => {
  it('should render Privacy correctly', () => {
    const { container } = renderWithRouter(<LegalScreen translationKey="Privacy" />);
    expect(container).toMatchSnapshot();
  });

  it('should render Terms correctly', () => {
    const { container } = renderWithRouter(<LegalScreen translationKey="Terms" />);
    expect(container).toMatchSnapshot();
  });
});
