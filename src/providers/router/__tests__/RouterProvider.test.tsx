import { render } from '@testing-library/react';
import RouterProvider from '../RouterProvider';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  RouterProvider: ({ router }: any) => <div data-testid="router-provider">{router && 'Router Passed'}</div>,
}));

describe('RouterProvider', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<RouterProvider />);
    expect(getByTestId('router-provider')).toHaveTextContent('Router Passed');
  });
});
