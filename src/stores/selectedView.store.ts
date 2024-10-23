import { create } from 'zustand';

type State = {
  selectedView:
    | '/timer'
    | '/timer/digital'
    | '/timer/visual'
    | '/timer/levelUp';
};

type Action = {
  setSelectedView: (view: State['selectedView']) => void;
};

// This is the store for the selected view in the app, so that the user always comes back to the last view they were on after the break timer is done
export const useSelectedViewStore = create<State & Action>((set) => ({
  selectedView: '/timer',
  setSelectedView: (view) => set({ selectedView: view }),
}));
