import TitleBoxContainer from '../TitleBoxContainer';
import { renderWithRouter } from '@testUtils';

describe('TitleBoxContainer', () => {
  it('should render correctly with title', () => {
    const { container } = renderWithRouter(
      <TitleBoxContainer title="Test Title">
        <div>Test Content</div>
      </TitleBoxContainer>,
    );
    expect(container).toMatchSnapshot();
  });
});
