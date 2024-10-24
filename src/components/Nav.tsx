import { Link } from 'react-router-dom';
import { useNavStore } from '../stores/nav.store';
import { RiMenuFold4Fill, RiMenuFold3Fill } from 'react-icons/ri';
import { CiPause1, CiPlay1 } from 'react-icons/ci';
import { GoListOrdered } from 'react-icons/go';
import { useTimerStore } from '../stores/timer.store';
import { useSelectedViewStore } from '../stores/selectedView.store';
import { useTimerSettingsStore } from '../stores/timerSettings.store';
import { stagger } from 'framer-motion';
import { animate } from 'framer-motion/dom';
import { useEffect } from 'react';
import { useIntervalAndBreak } from '../hooks/useIntervalAndBreak';
import { IoMdClock } from 'react-icons/io';
import { MdOutlineTimer10Select } from 'react-icons/md';
import { IoTextSharp } from 'react-icons/io5';
import { GiAbstract083 } from 'react-icons/gi';

export default function Nav() {
  const { setSelectedView } = useSelectedViewStore();
  const { isNavOpen, toggleNav } = useNavStore();
  const { isPaused, pauseTimer, resumeTimer, isDone } = useTimerStore();
  const { hasInterval, interval_rounds } = useTimerSettingsStore();

  // This function handles the view change, saves the selected view to the store, and closes the nav
  const handleViewChange = (
    view: '/timer' | '/timer/digital' | '/timer/visual' | '/timer/levelUp'
  ) => {
    setSelectedView(view);
    toggleNav();
  };

  // This useEffect animates the nav links
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
    if (!elements) return;
    (async () => {
      if (!isNavOpen) {
        await animate(
          elements,
          { x: '-100%', opacity: 0, scale: 0.5 },
          {
            delay: stagger(0.1),
            ease: 'easeInOut',
            type: 'spring',
            duration: 0.5,
          }
        );
      } else {
        await animate(
          elements,
          { x: 0, opacity: 1, scale: 1 },
          {
            delay: stagger(0.25),
            ease: 'linear',
            type: 'spring',
            duration: 0.8,
          }
        );
      }
    })();
  }, [isNavOpen]);

  // Custom hook to handle interval and break
  useIntervalAndBreak();

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

        <nav className='absolute top-2 left-0 z-50 text-white'>
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
        className={`absolute inset-0 text-white bg-grey flex items-center justify-center transition-all ease-in duration-500 ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='w-full flex flex-col text-xl font-semibold items-center justify-center gap-12'>
          <Link
            className='nav-link md:hover:underline active:underline flex items-center gap-2 min-w-[200px] justify-between'
            onClick={() => handleViewChange('/timer')}
            to='/timer'
          >
            <span>ANALOG TIMER</span>
            <IoMdClock size={28} />
          </Link>
          <Link
            className='nav-link md:hover:underline active:underline flex items-center gap-2 min-w-[200px] justify-between'
            onClick={() => handleViewChange('/timer/digital')}
            to='digital'
          >
            <span>DIGITAL TIMER</span>
            <MdOutlineTimer10Select size={28} />
          </Link>
          <Link
            className='nav-link md:hover:underline active:underline flex items-center gap-2 min-w-[200px] justify-between'
            onClick={() => handleViewChange('/timer/visual')}
            to='visual'
          >
            <span>VISUAL TIMER</span>
            <IoTextSharp size={28} />
          </Link>
          <Link
            className='nav-link md:hover:underline active:underline flex items-center gap-2 min-w-[200px] justify-between'
            onClick={() => handleViewChange('/timer/levelUp')}
            to='levelUp'
          >
            <span>CIRCLES</span>
            <GiAbstract083 size={28} />
          </Link>
        </div>
      </aside>
    </div>
  );
}
