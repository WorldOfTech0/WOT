export enum ModalID {
  NONE = 'none',
  SEARCH = 'search',
  FAVORITES = 'favorites',
}

export type ModalState = {
  modalID: ModalID;
  modalOpenState: ModalOpenState;
  modalData?: ModalData;
};

export type ModalData = {
  onModalClose?: () => void;
  [key: string]: any;
};

export enum ModalOpenState {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export interface ModalStateAction {
  openModal: (id: ModalID, data?: ModalData) => void;
  resetModalState: () => void;
}

export type ModalStateSlice = ModalState & ModalStateAction;
