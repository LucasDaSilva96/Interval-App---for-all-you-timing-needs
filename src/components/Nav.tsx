import { Link } from 'react-router-dom';
import { useNavStore } from '../stores/nav.store';
import { RiMenuFold4Fill, RiMenuFold3Fill } from 'react-icons/ri';
import { CiPause1, CiPlay1 } from 'react-icons/ci';
import { useTimerStore } from '../stores/timer.store';

export default function Nav() {
  const { isNavOpen, toggleNav } = useNavStore();
  const { isPaused, pauseTimer, resumeTimer, isDone } = useTimerStore();
  return (
    <div className='z-50'>
      <header className='w-full min-h-12 relative flex items-center'>
        <div className='flex-1 flex items-center justify-center'>
          {isPaused && !isDone ? (
            <CiPlay1
              onClick={resumeTimer}
              size={32}
              className='cursor-pointer text-white'
            />
          ) : !isDone ? (
            <CiPause1
              onClick={pauseTimer}
              size={32}
              className='cursor-pointer text-white'
            />
          ) : null}
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
          <Link onClick={toggleNav} to='/timer'>
            ANALOG TIMER
          </Link>
          <Link onClick={toggleNav} to='digital'>
            DIGITAL TIMER
          </Link>
          <Link onClick={toggleNav} to='visual'>
            VISUAL TIMER
          </Link>
          <Link onClick={toggleNav} to='levelUp'>
            CIRCLES
          </Link>
        </div>
      </aside>
    </div>
  );
}
