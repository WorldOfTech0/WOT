import FavoritesModal from '../FavoritesModal';
import { renderWithRouter } from '@testUtils';
import { appStore } from '@appStore';
import { act } from '@testing-library/react';

describe('FavoritesModal', () => {
  it('should render empty state correctly', () => {
    const { getByText } = renderWithRouter(<FavoritesModal />);
    expect(getByText('Your Favorites')).toBeInTheDocument();
    expect(getByText('No favorites yet. Start marking resources to see them here!')).toBeInTheDocument();
  });

  it('should render favorites list correctly', () => {
    const favoriteItem = {
      id: 'test-id',
      categoryId: 'test-category',
      titleKey: 'test-title',
      path: '/test/path',
    };

    act(() => {
      appStore.getState().Favorite.addFavorite(favoriteItem);
    });

    const { getByText } = renderWithRouter(<FavoritesModal />);
    expect(getByText('test-title')).toBeInTheDocument();
  });
});
