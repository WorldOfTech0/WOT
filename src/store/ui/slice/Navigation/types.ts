export interface NavigationState {
  isSidebarOpen: boolean;
}

export interface NavigationAction {
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
}

export type NavigationSlice = NavigationState & NavigationAction;
