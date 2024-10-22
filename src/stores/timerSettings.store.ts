import { create } from 'zustand';

type State = {
  minutes: number;
  hasInterval: boolean;
  hasBreak: boolean;
  interval_rounds: number;
};

type Action = {
  increment: () => void;
  decrement: () => void;
  setHasInterval: (value: boolean) => void;
  setHasBreak: (value: boolean) => void;
  incrementIntervalRound: () => void;
};

// This is a store that manages the timer settings in the main app page.
export const useTimerSettingsStore = create<State & Action>((set) => ({
  minutes: 5,
  hasInterval: false,
  hasBreak: false,
  interval_rounds: 0,
  increment: () => set((state) => ({ minutes: state.minutes + 5 })),
  decrement: () =>
    set((state) => ({
      minutes: state.minutes - 5 < 5 ? 5 : state.minutes - 5,
    })),
  setHasInterval: (value) => set({ hasInterval: value }),
  setHasBreak: (value) => set({ hasBreak: value }),
  incrementIntervalRound: () =>
    set((state) => ({ interval_rounds: state.interval_rounds + 1 })),
}));
