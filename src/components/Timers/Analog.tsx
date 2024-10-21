import { useEffect, useRef, useState } from 'react';
import { useTimerStore } from '../../stores/timer.store';
import { displayDigitalTime } from '../../services/displayDigitalTime';
import { calcRotation } from '../../services/calcRotation';

export default function Analog() {
  const { minutesLeft, secondsLeft, startValue, isDone } = useTimerStore();

  const clockEl = useRef<HTMLDivElement>(null);
  const minuteHandEl = useRef<HTMLDivElement>(null);
  const secondHandEl = useRef<HTMLDivElement>(null);
  const [hasCreatedDialLines, setHasCreatedDialLines] = useState(false);

  useEffect(() => {
    if (!clockEl.current) return;

    if (!hasCreatedDialLines) {
      for (let index = 0; index < 60; index++) {
        const element = document.createElement('div');
        element.classList.add('diallines');
        element.style.transform = `rotate(${index * 6}deg)`;
        clockEl.current.appendChild(element);
      }
      setHasCreatedDialLines(true);
    }

    if (!minuteHandEl.current || !secondHandEl.current) return;

    minuteHandEl.current.style.transform = `rotate(${calcRotation(
      startValue,
      minutesLeft
    )}deg`;

    secondHandEl.current.style.transform = `rotate(-${secondsLeft * 6}deg`;
  }, [minutesLeft, secondsLeft, hasCreatedDialLines, startValue]);

  return (
    <div className='clock' ref={clockEl}>
      <div>
        <div className='info date text-black'>
          <p className='font-thin'>Interval: 0</p>
        </div>
        <div className='info day'>
          {isDone ? (
            <p className='font-extralight italic'>Time's up!</p>
          ) : (
            <p>{displayDigitalTime(minutesLeft, secondsLeft)}</p>
          )}
        </div>
      </div>
      <div className='dot'></div>
      <div>
        <div className={`minute-hand`} ref={minuteHandEl}></div>
        <div className={`second-hand`} ref={secondHandEl}></div>
      </div>
      <div>
        <span className='h3 span'></span>
        <span className='h6 span'></span>
        <span className='h9 span'></span>
        <span className='h12 span'></span>
      </div>
      <div className='diallines'></div>
    </div>
  );
}
