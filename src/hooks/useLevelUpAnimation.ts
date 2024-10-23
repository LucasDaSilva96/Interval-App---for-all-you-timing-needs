import { useEffect, useState } from 'react';
import { useTimerStore } from '../stores/timer.store';
import { calTimeProgress } from '../services/calcProgress';

const initialState = {
  ring_1: false,
  ring_2: false,
  ring_3: false,
  ring_4: false,
  ring_5: false,
  ring_6: false,
  ring_7: false,
  ring_8: false,
  ring_9: false,
  ring_10: false,
};

// This hook is used to animate the level up rings based on the time left
export const useLevelUpAnimation = () => {
  const [percentage, setPercentage] = useState(0);
  const { startValue, minutesLeft, secondsLeft } = useTimerStore();
  const [progress, setProgress] = useState<{ [key: string]: boolean }>(
    initialState
  );

  useEffect(() => {
    setPercentage(calTimeProgress(minutesLeft, secondsLeft, startValue));
  }, [minutesLeft, secondsLeft, startValue]);

  useEffect(() => {
    const newProgress: { [key: string]: boolean } = { ...initialState };
    const ringsToActivate = Math.ceil(percentage / 10);
    for (let i = 1; i <= ringsToActivate; i++) {
      newProgress[`ring_${i}`] = true;
    }
    setProgress(newProgress);
  }, [percentage]);

  return { progress };
};
