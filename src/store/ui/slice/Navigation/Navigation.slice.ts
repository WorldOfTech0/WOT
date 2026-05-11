import { UiStoreSlice } from '@uiStore';
import { NavigationSlice } from './types';

const createNavigationSlice: UiStoreSlice<NavigationSlice> = (set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => {
    set((state) => {
      state.Navigation.isSidebarOpen = !state.Navigation.isSidebarOpen;
    });
  },
  setSidebarOpen: (isOpen: boolean) => {
    set((state) => {
      state.Navigation.isSidebarOpen = isOpen;
    });
  },
});

export default createNavigationSlice;
