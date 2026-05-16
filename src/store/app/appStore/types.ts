import { StateCreator } from 'zustand';
import { FavoriteStateSlice } from '../slice/Favorite/types';

export interface AppStoreState {
  Favorite: FavoriteStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
