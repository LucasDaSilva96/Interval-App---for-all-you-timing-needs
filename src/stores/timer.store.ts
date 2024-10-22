import { create } from 'zustand';
import Timer from 'easytimer.js';
import { displayDigitalTime } from '../services/displayDigitalTime';

// Initialize the timer
const timer = new Timer();

export interface TimerState {
  time: string;
  startValue: number;
  minutesLeft: number;
  secondsLeft: number;
  isRunning: boolean;
  isPaused: boolean;
  isDone: boolean;
  startTimer: (duration: number) => void;
  stopTimer: () => void;
  resetTimer: () => void;
  pauseTimer: () => void;
  getDisplayTime: () => string;
  resumeTimer: () => void;
}

export const useTimerStore = create<TimerState>((set) => ({
  time: '00:00',
  startValue: 0,
  isRunning: false,
  isPaused: false,
  minutesLeft: 0,
  secondsLeft: 0,
  isDone: false,
  startTimer: (duration: number) => {
    set({ startValue: duration });
    timer.start({ countdown: true, startValues: { minutes: duration } });
    set({ isRunning: true });
    timer.addEventListener('secondsUpdated', () => {
      set({
        time: timer.getTimeValues().toString(),
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
    set({
      isRunning: false,
      time: '00:00',
      isDone: false,
      isPaused: false,
      minutesLeft: 0,
      secondsLeft: 0,
    });
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
