import ModalComponent from '../Modal';
import { renderWithRouter } from '@testUtils';
import { ModalID } from '@uiStore';

describe('ModalComponent', () => {
  it('should render correctly when open with SEARCH modal', () => {
    const { container } = renderWithRouter(
      <ModalComponent
        isOpen={true}
        modalID={ModalID.SEARCH}
        onModalClose={jest.fn()}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render nothing when closed', () => {
    const { container } = renderWithRouter(
      <ModalComponent
        isOpen={false}
        modalID={ModalID.SEARCH}
        onModalClose={jest.fn()}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
