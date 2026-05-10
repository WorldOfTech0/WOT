import { render } from '@testing-library/react';

import { IconDay, IconWorldOfTech, IconNight } from '../IconsAssets';

describe('Icons', () => {
  it('should render IconDay icon', () => {
    const { container } = render(<IconDay />);
    expect(container).toMatchSnapshot();
  });

  it('should render IconWorldOfTech icon', () => {
    const { container } = render(<IconWorldOfTech />);
    expect(container).toMatchSnapshot();
  });

  it('should render IconNight icon', () => {
    const { container } = render(<IconNight />);
    expect(container).toMatchSnapshot();
  });
});
