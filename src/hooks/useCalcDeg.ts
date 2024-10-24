import { useEffect } from 'react';
import { useTimerStore } from '../stores/timer.store';

type Props = {
  minuteHandEl: React.RefObject<HTMLDivElement> | null;
  secondHandEl: React.RefObject<HTMLDivElement> | null;
};

// This custom hook calculates the rotation of the minute and second hands
export const useCalcDeg = ({ minuteHandEl, secondHandEl }: Props) => {
  const { minutesLeft, secondsLeft, startValue } = useTimerStore();
  const MAX_VALUE = 60;

  // 60 minutes = 360 degrees
  // 1 minute = 6 degrees
  // 1 second = 6 degrees
  useEffect(() => {
    if (!minuteHandEl || !secondHandEl) return;
    if (!minuteHandEl.current || !secondHandEl.current) return;
    if (!minuteHandEl.current || !secondHandEl.current) return;

    const minutesRemain = MAX_VALUE - minutesLeft;

    minuteHandEl.current.style.transform = `rotate(${minutesRemain * 6}deg`;

    secondHandEl.current.style.transform = `rotate(-${secondsLeft * 6}deg`;
  }, [minutesLeft, secondsLeft, startValue, minuteHandEl, secondHandEl]);

  return null;
};
