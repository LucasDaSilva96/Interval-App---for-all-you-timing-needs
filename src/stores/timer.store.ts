import { create } from 'zustand';
import Timer from 'easytimer.js';
import { displayDigitalTime } from '../services/displayDigitalTime';

// Initialize the timer
const timer = new Timer();

interface TimerState {
  time: string;
  minutesLeft: number;
  secondsLeft: number;
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
  minutesLeft: 0,
  secondsLeft: 0,
  startTimer: (duration: number) => {
    timer.start({ countdown: true, startValues: { minutes: duration } });
    set({ isRunning: true });
    timer.addEventListener('secondsUpdated', () => {
      set({
        time: timer.getTimeValues().toString(),
        minutesLeft: timer.getTimeValues().minutes,
        secondsLeft: timer.getTimeValues().seconds,
      });
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
