import { useEffect, useRef } from 'react';
import { useTimerStore } from '../stores/timer.store';
import { calTimeProgress } from '../services/calcProgress';

type Props = {
  minuteHandEl: React.RefObject<HTMLDivElement> | null;
  secondHandEl: React.RefObject<HTMLDivElement> | null;
};

// This custom hook calculates the rotation of the minute and second hands
export const useCalcDeg = ({ minuteHandEl, secondHandEl }: Props) => {
  const rotationOfMinuteHand = useRef(0);
  const { minutesLeft, secondsLeft, startValue } = useTimerStore();

  useEffect(() => {
    if (!minuteHandEl || !secondHandEl) return;
    if (!minuteHandEl.current || !secondHandEl.current) return;
    if (!minuteHandEl.current || !secondHandEl.current) return;

    if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 10) {
      rotationOfMinuteHand.current = 3.6;
    } else if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 20) {
      rotationOfMinuteHand.current = 7.2;
    } else if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 30) {
      rotationOfMinuteHand.current = 10.8;
    } else if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 40) {
      rotationOfMinuteHand.current = 14.4;
    } else if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 50) {
      rotationOfMinuteHand.current = 18;
    } else if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 60) {
      rotationOfMinuteHand.current = 21.6;
    } else if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 70) {
      rotationOfMinuteHand.current = 25.2;
    } else if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 80) {
      rotationOfMinuteHand.current = 28.8;
    } else if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 90) {
      rotationOfMinuteHand.current = 32.4;
    } else if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 95) {
      rotationOfMinuteHand.current = 34.2;
    } else if (calTimeProgress(minutesLeft, secondsLeft, startValue) <= 100) {
      rotationOfMinuteHand.current = 36;
    }

    minuteHandEl.current.style.transform = `rotate(${
      rotationOfMinuteHand.current * 10
    }deg`;

    secondHandEl.current.style.transform = `rotate(-${secondsLeft * 6}deg`;
  }, [minutesLeft, secondsLeft, startValue, minuteHandEl, secondHandEl]);

  return null;
};
