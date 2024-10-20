import { create } from 'zustand';
import Timer from 'easytimer.js';
import { displayDigitalTime } from '../services/displayDigitalTime';

// Initialize the timer
const timer = new Timer();

interface TimerState {
  time: string;
  isRunning: boolean;
  isPaused: boolean;
  startTimer: (duration: number) => void;
  stopTimer: () => void;
  resetTimer: () => void;
  pauseTimer: () => void;
  getDisplayTime: () => string;
  resumeTimer: () => void;
}

export const useTimerStore = create<TimerState>((set) => ({
  time: '00:00:00',
  isRunning: false,
  isPaused: false,
  startTimer: (duration: number) => {
    timer.start({ countdown: true, startValues: { minutes: duration } });
    set({ isRunning: true });
    timer.addEventListener('secondsUpdated', () => {
      set({ time: timer.getTimeValues().toString() });
    });
    timer.addEventListener('targetAchieved', () => {
      set({ isRunning: false });
    });
  },
  stopTimer: () => {
    timer.stop();
    set({ isRunning: false });
  },
  resetTimer: () => {
    timer.reset();
    set({ time: '00:00:00', isRunning: false });
  },
  pauseTimer: () => {
    timer.pause();
    set({ isRunning: false, isPaused: true });
  },
  resumeTimer: () => {
    timer.start();
    set({ isRunning: true, isPaused: false });
  },
  getDisplayTime: () =>
    displayDigitalTime(
      timer.getTimeValues().minutes,
      timer.getTimeValues().seconds
    ),
}));
