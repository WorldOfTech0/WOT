import { renderHook } from '@testing-library/react-hooks';
import { modalDataSelector, modalSelector } from '../Modal.selector';
import { ModalID, ModalOpenState, ModalState, appStore } from '@uiStore';

describe('Modal selector', () => {
  const onModalCloseMock = jest.fn();

  it('should return modal selector state and actions', () => {
    const modal = renderHook(() => appStore(modalSelector)).result.current;

    expect(modal).toMatchSnapshot();
  });

  it('should return modal state with initial value', () => {
    const { result } = renderHook(() => appStore(modalSelector));

    expect(result.current).toMatchSnapshot();
  });

  it('should return modal state on modal data set using openModal', () => {
    const { result: modalResult } = renderHook(() => appStore(modalSelector));
    const { result: dataResult } = renderHook(() =>
      appStore(modalDataSelector),
    );

    modalResult.current.openModal(ModalID.SEARCH, onModalCloseMock);

    expect(dataResult.current).toMatchSnapshot();
  });

  it('should reset and close modal state on modal data set using closeModal', () => {
    const modalData: ModalState = {
      modalID: ModalID.SEARCH,
      modalData: {
        onModalClose: onModalCloseMock,
      },
      modalOpenState: ModalOpenState.OPEN,
    };
    const { result: modalResult } = renderHook(() => appStore(modalSelector));
    const { result: dataResult } = renderHook(() =>
      appStore(modalDataSelector),
    );

    modalResult.current.openModal(ModalID.SEARCH, onModalCloseMock);

    expect(dataResult.current.modalID).toEqual(modalData.modalID);
    expect(dataResult.current.onModalClose).toEqual(
      modalData.modalData?.onModalClose,
    );

    dataResult.current.resetModalState();
    jest.runAllTimers();

    expect(dataResult.current.openState).toEqual(ModalOpenState.CLOSE);
    expect(dataResult.current.modalID).toEqual(ModalID.NONE);
    expect(dataResult.current.onModalClose).toEqual(undefined);
  });
});
