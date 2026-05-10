import { render } from '@testing-library/react';

import { IconDay, IconHourcoding, IconNight } from '../IconsAssets';

describe('Icons', () => {
  it('should render IconDay icon', () => {
    const { container } = render(<IconDay />);
    expect(container).toMatchSnapshot();
  });

  it('should render IconHourcoding icon', () => {
    const { container } = render(<IconHourcoding />);
    expect(container).toMatchSnapshot();
  });

  it('should render IconNight icon', () => {
    const { container } = render(<IconNight />);
    expect(container).toMatchSnapshot();
  });
});
