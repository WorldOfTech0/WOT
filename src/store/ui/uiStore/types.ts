import { StateCreator } from 'zustand';
import { ModalStateSlice, NavigationSlice } from '../slice';

export interface UiStoreState {
  Modal: ModalStateSlice;
  Navigation: NavigationSlice;
}

export type UiStoreSlice<T> = StateCreator<
  UiStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
