import { render } from '@testing-library/react';
import RouterProvider from '../RouterProvider';

describe('RouterProvider', () => {
  it('should render router provider correctly', async () => {
    const { container } = render(<RouterProvider />);

    expect(container).toMatchSnapshot();
  });

  it('should render router provider correctly', async () => {
    const { container } = render(<RouterProvider />);

    expect(container).toMatchSnapshot();
  });
});
