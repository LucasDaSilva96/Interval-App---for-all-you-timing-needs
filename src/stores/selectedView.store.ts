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

export const useSelectedViewStore = create<State & Action>((set) => ({
  selectedView: '/timer',
  setSelectedView: (view) => set({ selectedView: view }),
}));
