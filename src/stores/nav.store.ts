import { create } from 'zustand';

type State = {
  isNavOpen: boolean;
};

type Action = {
  toggleNav: () => void;
};

// This is a store that manages the navigation state of the nav component.
export const useNavStore = create<State & Action>((set) => ({
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));
