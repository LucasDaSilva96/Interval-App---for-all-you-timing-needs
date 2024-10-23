import { useEffect, useRef, useState } from 'react';
import { useTimerStore } from '../../stores/timer.store';
import { displayDigitalTime } from '../../services/displayDigitalTime';
import { useCalcDeg } from '../../hooks/useCalcDeg';

export default function Analog() {
  const { minutesLeft, secondsLeft, isDone } = useTimerStore();

  const clockEl = useRef<HTMLDivElement>(null);
  const minuteHandEl = useRef<HTMLDivElement>(null);
  const secondHandEl = useRef<HTMLDivElement>(null);
  const [hasCreatedDialLines, setHasCreatedDialLines] = useState(false);

  // This useEffect creates the dial lines for the clock
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
  }, [hasCreatedDialLines]);

  // This is the custom hook that calculates the rotation of the minute and second hands
  useCalcDeg({ minuteHandEl, secondHandEl });

  return (
    <div className='clock' ref={clockEl}>
      <div>
        <div className='info date text-black flex items-center justify-center'>
          <img
            src='/icons/rolex-logo.svg'
            alt='Rolex logo'
            className='max-w-16 h-auto'
          />
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
