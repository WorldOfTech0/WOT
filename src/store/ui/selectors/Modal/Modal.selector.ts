import { UiStoreState } from '@uiStore';

const modalSelector = (state: UiStoreState) => ({
  openModal: state.Modal.openModal,
});

const modalDataSelector = (state: UiStoreState) => ({
  openState: state.Modal.modalOpenState,
  modalID: state.Modal.modalID,
  onModalClose: state.Modal.modalData?.onModalClose,
  modalData: state.Modal.modalData,
  resetModalState: state.Modal.resetModalState,
});

export { modalSelector, modalDataSelector };
