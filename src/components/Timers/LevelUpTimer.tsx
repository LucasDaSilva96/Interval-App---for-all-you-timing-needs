import { useTimerStore } from '../../stores/timer.store';
import { calTimeProgress } from '../../services/calcProgress';
import { motion } from 'framer-motion';
import { useLevelUpAnimation } from '../../hooks/useLevelUpAnimation';

export default function LevelUp() {
  const { startValue, minutesLeft, secondsLeft, isRunning } = useTimerStore();
  // Custom hook to handle level up animation
  const { progress } = useLevelUpAnimation();
  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.8,
        ease: 'circInOut',
        type: 'spring',
        delay: 0.4,
      }}
      exit={{ scale: 0 }}
      className='w-full flex items-center justify-center'
    >
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
    </motion.section>
  );
}
