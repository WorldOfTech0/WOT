import { render } from '@testing-library/react';
import LoadingComponent from '../LoadingComponent';

describe('Loading Component', () => {
  it('should render correctly', () => {
    const { container } = render(<LoadingComponent />);

    expect(container).toMatchSnapshot();
  });
});
