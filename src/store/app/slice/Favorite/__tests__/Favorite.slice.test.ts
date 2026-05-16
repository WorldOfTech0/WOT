import { appStore } from '@appStore';
import { act, renderHook } from '@testing-library/react';

describe('Favorite slice', () => {
  const favoriteItem = {
    id: 'test-id',
    categoryId: 'test-category',
    titleKey: 'test-title',
    path: '/test/path',
  };

  it('should add a favorite item', () => {
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Favorite.addFavorite(favoriteItem);
    });

    expect(result.current.Favorite.favorites).toContainEqual(favoriteItem);
    expect(result.current.Favorite.isFavorited('test-id')).toBe(true);
  });

  it('should remove a favorite item', () => {
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Favorite.addFavorite(favoriteItem);
    });

    expect(result.current.Favorite.favorites).toContainEqual(favoriteItem);

    act(() => {
      result.current.Favorite.removeFavorite('test-id');
    });

    expect(result.current.Favorite.favorites).not.toContainEqual(favoriteItem);
    expect(result.current.Favorite.isFavorited('test-id')).toBe(false);
  });

  it('should toggle a favorite item', () => {
    const { result } = renderHook(() => appStore());

    // Toggle on
    act(() => {
      result.current.Favorite.toggleFavorite(favoriteItem);
    });
    expect(result.current.Favorite.isFavorited('test-id')).toBe(true);

    // Toggle off
    act(() => {
      result.current.Favorite.toggleFavorite(favoriteItem);
    });
    expect(result.current.Favorite.isFavorited('test-id')).toBe(false);
  });
});
