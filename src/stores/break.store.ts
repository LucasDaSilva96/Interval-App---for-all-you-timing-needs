import { create } from 'zustand';
import Timer from 'easytimer.js';
import { displayDigitalTime } from '../services/displayDigitalTime';

// Initialize the timer
const timer = new Timer();

interface TimerBreakState {
  time: string;
  startValue: number;
  minutesLeft: number;
  secondsLeft: number;
  isRunning: boolean;
  isDone: boolean;
  startBreakTimer: () => void;
  stopTimer: () => void;
  setIsDone: (value: boolean) => void;
}

// This is the store for the break timer
export const useBreakStore = create<TimerBreakState>((set) => ({
  time: '05:00',
  startValue: 5,
  isRunning: false,
  minutesLeft: 0,
  secondsLeft: 0,
  isDone: false,
  // Start a 5 minute break timer
  startBreakTimer: () => {
    set({ startValue: 5, isRunning: true, isDone: false });
    timer.start({
      countdown: true,
      startValues: { minutes: 5, seconds: 0 },
    });
    timer.addEventListener('secondsUpdated', () => {
      set({
        time: displayDigitalTime(
          timer.getTimeValues().minutes,
          timer.getTimeValues().seconds
        ),
        minutesLeft: timer.getTimeValues().minutes,
        secondsLeft: timer.getTimeValues().seconds,
        isDone:
          timer.getTimeValues().minutes === 0 &&
          timer.getTimeValues().seconds === 0,
      });
    });
    timer.addEventListener('targetAchieved', () => {
      set({ isRunning: false, isDone: true });
    });
  },
  stopTimer: () => {
    timer.stop();
    set({ isRunning: false, isDone: false });
  },
  setIsDone: (value) => set({ isDone: value }),
}));
