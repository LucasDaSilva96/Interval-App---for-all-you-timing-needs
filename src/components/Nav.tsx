import { Link } from 'react-router-dom';
import { useNavStore } from '../stores/nav.store';
import { RiMenuFold4Fill, RiMenuFold3Fill } from 'react-icons/ri';

export default function Nav() {
  const { isNavOpen, toggleNav } = useNavStore();
  return (
    <>
      <header className='w-full min-h-12 relative'>
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
        className={`fixed inset-0 text-white bg-black backdrop-blur-md flex items-center justify-center transition-all ease-linear duration-300 ${
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
    </>
  );
}
