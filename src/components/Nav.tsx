import { Link, useNavigate } from 'react-router-dom';
import { useNavStore } from '../stores/nav.store';
import { RiMenuFold4Fill, RiMenuFold3Fill } from 'react-icons/ri';
import { CiPause1, CiPlay1 } from 'react-icons/ci';
import { GoListOrdered } from 'react-icons/go';
import { useTimerStore } from '../stores/timer.store';
import { useSelectedViewStore } from '../stores/selectedView.store';
import { useTimerSettingsStore } from '../stores/timerSettings.store';
import { useEffect } from 'react';

export default function Nav() {
  const { setSelectedView } = useSelectedViewStore();
  const { isNavOpen, toggleNav } = useNavStore();
  const { isPaused, pauseTimer, resumeTimer, isDone, stopTimer } =
    useTimerStore();
  const { hasBreak, hasInterval, interval_rounds, incrementIntervalRound } =
    useTimerSettingsStore();

  const navigate = useNavigate();

  const handleViewChange = (
    view: '/timer' | '/timer/digital' | '/timer/visual' | '/timer/levelUp'
  ) => {
    setSelectedView(view);
    toggleNav();
  };

  useEffect(() => {
    if (isDone) {
      if (hasInterval) {
        incrementIntervalRound();
        if (hasBreak) {
          stopTimer();
          setTimeout(() => {
            return navigate('/interval');
          }, 300);
        }
      } else {
        return navigate('/alarm');
      }
    }
  }, [isDone, hasInterval, hasBreak]);

  return (
    <div className='z-50'>
      <header className='w-full min-h-12 relative flex items-center'>
        <div className='flex-1 flex items-center justify-around'>
          {isPaused && !isDone ? (
            <div className='flex items-center gap-1'>
              <CiPlay1
                onClick={resumeTimer}
                size={32}
                className='cursor-pointer text-white'
              />
              <span className='text-white'>Paused</span>
            </div>
          ) : !isDone && !isPaused ? (
            <div className='flex items-center gap-1'>
              <CiPause1
                onClick={pauseTimer}
                size={32}
                className='cursor-pointer text-white'
              />
              <span className='text-white animate-pulse'>Running</span>
            </div>
          ) : null}
          {hasInterval && (
            <div className='flex items-center gap-1'>
              <GoListOrdered
                className='text-white justify-self-end'
                size={32}
              />
              <span className='text-xl'>{interval_rounds}</span>
            </div>
          )}
        </div>

        <nav className='absolute top-0 left-0 z-50 text-white'>
          {isNavOpen ? (
            <RiMenuFold3Fill
              onClick={toggleNav}
              size={32}
              className='cursor-pointer'
            />
          ) : (
            <RiMenuFold4Fill
              onClick={toggleNav}
              size={32}
              className='cursor-pointer'
            />
          )}
        </nav>
      </header>
      <aside
        className={`fixed inset-0 text-white bg-grey backdrop-blur-md flex items-center justify-center transition-all ease-linear duration-300 ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='w-full flex flex-col text-xl font-semibold items-center justify-center gap-12'>
          <Link onClick={() => handleViewChange('/timer')} to='/timer'>
            ANALOG TIMER
          </Link>
          <Link onClick={() => handleViewChange('/timer/digital')} to='digital'>
            DIGITAL TIMER
          </Link>
          <Link onClick={() => handleViewChange('/timer/visual')} to='visual'>
            VISUAL TIMER
          </Link>
          <Link onClick={() => handleViewChange('/timer/levelUp')} to='levelUp'>
            CIRCLES
          </Link>
        </div>
      </aside>
    </div>
  );
}
