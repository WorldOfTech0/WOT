import { render } from '@testing-library/react';

import TitleBoxContainer from '../TitleBoxContainer';

const title = 'Test Title';
const icon = 'test-icon';
const props = {
  title,
  icon,
  children: 'Test Children',
};

describe('TitleBoxContainer', () => {
  it('should set the document title', () => {
    // Act
    const { container } = render(<TitleBoxContainer {...props} />);

    expect(container).toMatchSnapshot();
  });
});
