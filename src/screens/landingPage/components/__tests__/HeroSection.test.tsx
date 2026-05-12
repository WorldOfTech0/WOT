import HeroSection from '../HeroSection';
import { renderWithRouter } from '@testUtils';

describe('HeroSection', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<HeroSection />);
    expect(container).toMatchSnapshot();
  });
});
