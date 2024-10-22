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
  startBreakTimer: (duration: number) => void;
  stopTimer: () => void;
  setIsDone: (value: boolean) => void;
}

export const useBreakStore = create<TimerBreakState>((set) => ({
  time: '05:00',
  startValue: 5,
  isRunning: false,
  minutesLeft: 0,
  secondsLeft: 0,
  isDone: false,
  startBreakTimer: (duration: number) => {
    set({ startValue: duration, isRunning: true, isDone: false });
    timer.start({
      countdown: true,
      startValues: { minutes: duration, seconds: 0 },
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
