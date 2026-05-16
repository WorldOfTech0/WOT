import { AppStoreSlice } from '../../appStore/types';
import { FavoriteState, FavoriteStateSlice } from './types';

const initialState: FavoriteState = {
  favorites: [],
};

const createFavoriteSlice: AppStoreSlice<FavoriteStateSlice> = (set, get) => ({
  ...initialState,
  addFavorite: (item) => {
    set((state) => {
      if (!state.Favorite.favorites.find((f) => f.id === item.id)) {
        state.Favorite.favorites.push(item);
      }
    });
  },
  removeFavorite: (id) => {
    set((state) => {
      state.Favorite.favorites = state.Favorite.favorites.filter(
        (f) => f.id !== id,
      );
    });
  },
  isFavorited: (id) => {
    return !!get().Favorite.favorites.find((f) => f.id === id);
  },
  toggleFavorite: (item) => {
    const isFav = get().Favorite.isFavorited(item.id);
    if (isFav) {
      get().Favorite.removeFavorite(item.id);
    } else {
      get().Favorite.addFavorite(item);
    }
  },
});

export default createFavoriteSlice;
