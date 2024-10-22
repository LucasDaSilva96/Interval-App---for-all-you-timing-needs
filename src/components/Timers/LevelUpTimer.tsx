import { useEffect, useState } from 'react';
import { useTimerStore } from '../../stores/timer.store';
import { calTimeProgress } from '../../services/calcProgress';

export default function LevelUp() {
  const { startValue, minutesLeft, secondsLeft, isRunning } = useTimerStore();
  const [progress, setProgress] = useState({
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
  });

  useEffect(() => {
    const timeLeft = calTimeProgress(minutesLeft, secondsLeft, startValue);

    if (timeLeft <= 10) {
      setProgress({ ...progress, ring_1: true });
    } else if (timeLeft <= 20) {
      setProgress({ ...progress, ring_1: true, ring_2: true });
    } else if (timeLeft <= 30) {
      setProgress({ ...progress, ring_1: true, ring_2: true, ring_3: true });
    } else if (timeLeft <= 40) {
      setProgress({
        ...progress,
        ring_1: true,
        ring_2: true,
        ring_3: true,
        ring_4: true,
      });
    } else if (timeLeft <= 50) {
      setProgress({
        ...progress,
        ring_1: true,
        ring_2: true,
        ring_3: true,
        ring_4: true,
        ring_5: true,
      });
    } else if (timeLeft <= 60) {
      setProgress({
        ...progress,
        ring_1: true,
        ring_2: true,
        ring_3: true,
        ring_4: true,
        ring_5: true,
        ring_6: true,
      });
    } else if (timeLeft <= 70) {
      setProgress({
        ...progress,
        ring_1: true,
        ring_2: true,
        ring_3: true,
        ring_4: true,
        ring_5: true,
        ring_6: true,
        ring_7: true,
      });
    } else if (timeLeft <= 80) {
      setProgress({
        ...progress,
        ring_1: true,
        ring_2: true,
        ring_3: true,
        ring_4: true,
        ring_5: true,
        ring_6: true,
        ring_7: true,
        ring_8: true,
      });
    } else if (timeLeft <= 90) {
      setProgress({
        ...progress,
        ring_1: true,
        ring_2: true,
        ring_3: true,
        ring_4: true,
        ring_5: true,
        ring_6: true,
        ring_7: true,
        ring_8: true,
        ring_9: true,
      });
    } else if (timeLeft <= 100) {
      setProgress({
        ...progress,
        ring_1: true,
        ring_2: true,
        ring_3: true,
        ring_4: true,
        ring_5: true,
        ring_6: true,
        ring_7: true,
        ring_8: true,
        ring_9: true,
        ring_10: true,
      });
    }
  }, [minutesLeft, secondsLeft, startValue]);

  return (
    <section className='w-full flex items-center justify-center'>
      {/* 1 */}
      <div
        className={`w-[380px]
         h-[380px] ${
           isRunning &&
           calTimeProgress(minutesLeft, secondsLeft, startValue) < 100
             ? 'animate-pulse'
             : ''
         } ${progress.ring_1 ? ' border border-white/40' : 'bg-[#141414]'}
          rounded-full p-4`}
      >
        {/* 2 */}
        <div
          className={`w-full h-full ${
            progress.ring_2 ? ' border border-white/40' : 'bg-[#1a1a1a]'
          }     rounded-full p-4`}
        >
          {/* 3 */}
          <div
            className={`w-full h-full ${
              progress.ring_3 ? ' border border-white/40' : 'bg-[#1f1f1f]'
            }     rounded-full  p-4`}
          >
            {/* 4 */}
            <div
              className={`w-full h-full ${
                progress.ring_4 ? ' border border-white/40' : 'bg-[#242424]'
              }     rounded-full  p-4`}
            >
              {/* 5 */}
              <div
                className={`w-full h-full ${
                  progress.ring_5
                    ? 'bg-black border border-white/40'
                    : 'bg-[#292929]'
                }     rounded-full  p-4`}
              >
                {/* 6 */}
                <div
                  className={`w-full h-full ${
                    progress.ring_6
                      ? 'bg-black border border-white/40'
                      : 'bg-[#2e2e2e]'
                  }     rounded-full  p-4`}
                >
                  {/* 7 */}
                  <div
                    className={`w-full h-full ${
                      progress.ring_7
                        ? 'bg-black border border-white/40'
                        : 'bg-[#333333]'
                    }     rounded-full  p-4`}
                  >
                    {/* 8 */}
                    <div
                      className={`w-full h-full ${
                        progress.ring_8
                          ? 'bg-black border border-white/40'
                          : 'bg-[#47474783]'
                      }   rounded-full    p-4`}
                    >
                      {/* 9 */}
                      <div
                        className={`w-full h-full ${
                          progress.ring_9
                            ? 'bg-black border border-white/40'
                            : 'bg-[#5c5c5c93]'
                        }     rounded-full  p-4`}
                      >
                        {/* 10 */}
                        <div
                          className={`w-full h-full ${
                            progress.ring_10
                              ? 'bg-black border border-white/40'
                              : 'bg-[#70707062]'
                          }     rounded-full p-4 `}
                        >
                          <div
                            className={`w-full h-full ${
                              calTimeProgress(
                                minutesLeft,
                                secondsLeft,
                                startValue
                              ) < 100
                                ? 'bg-[#7070705e]'
                                : 'bg-black border border-white/40'
                            }     rounded-full p-4 flex items-center justify-center`}
                          >
                            <span className='font-bold'>
                              {calTimeProgress(
                                minutesLeft,
                                secondsLeft,
                                startValue
                              ) || 100}
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
