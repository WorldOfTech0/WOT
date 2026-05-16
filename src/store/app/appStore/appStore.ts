import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';
import { AppStoreState } from './types';
import createFavoriteSlice from '../slice/Favorite/Favorite.slice';

export const appStore = create<AppStoreState>()(
  persist(
    immer((...api) => ({
      Favorite: createFavoriteSlice(...api),
    })),
    {
      name: 'appStore',
      storage: createJSONStorage(() => localStorage),
      merge: (persistedState, currentState) =>
        deepMerge(currentState, persistedState as AppStoreState),
    },
  ),
);

/**
 * Function to merge the persisted state with the current state.
 *
 * @param currentState current state
 * @param persistedState persisted state
 * @returns merged state
 */
function deepMerge(
  currentState: AppStoreState,
  persistedState: AppStoreState,
): AppStoreState {
  return {
    ...currentState,
    ...persistedState,
    Favorite: {
      ...currentState.Favorite,
      ...(persistedState?.Favorite || {}),
      favorites: persistedState?.Favorite?.favorites || [],
    },
  };
}
