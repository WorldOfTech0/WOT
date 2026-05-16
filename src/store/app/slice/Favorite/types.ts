export interface FavoriteItem {
  id: string; // subcategory id
  categoryId: string;
  titleKey: string;
  path: string;
}

export interface FavoriteState {
  favorites: FavoriteItem[];
}

export interface FavoriteActions {
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
  isFavorited: (id: string) => boolean;
  toggleFavorite: (item: FavoriteItem) => void;
}

export type FavoriteStateSlice = FavoriteState & FavoriteActions;
