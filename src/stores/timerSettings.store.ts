import { create } from 'zustand';

type State = {
  minutes: number;
  hasInterval: boolean;
  hasBreak: boolean;
};

type Action = {
  increment: () => void;
  decrement: () => void;
  setHasInterval: (value: boolean) => void;
  setHasBreak: (value: boolean) => void;
};

// This is a store that manages the timer settings in the main app page.
export const useTimerSettingsStore = create<State & Action>((set) => ({
  minutes: 5,
  hasInterval: false,
  hasBreak: false,
  increment: () => set((state) => ({ minutes: state.minutes + 5 })),
  decrement: () =>
    set((state) => ({
      minutes: state.minutes - 5 < 5 ? 5 : state.minutes - 5,
    })),
  setHasInterval: (value) => set({ hasInterval: value }),
  setHasBreak: (value) => set({ hasBreak: value }),
}));
