import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { UiStoreState } from './types';
import { createModalSlice, createNavigationSlice } from '../slice';

export const uiStore = create<UiStoreState>()(
  immer((...api) => ({
    Modal: createModalSlice(...api),
    Navigation: createNavigationSlice(...api),
  })),
);
