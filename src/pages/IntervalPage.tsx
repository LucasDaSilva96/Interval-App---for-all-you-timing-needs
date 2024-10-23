import CirclesBg from '../components/CirclesBg';
import { CiPause1 } from 'react-icons/ci';
import { useBreakStore } from '../stores/break.store';
import { motion } from 'framer-motion';
import { useBreak } from '../hooks/useBreak';

export default function IntervalPage() {
  const { isRunning, time, setIsDone } = useBreakStore();

  const handleClick = () => {
    setIsDone(true);
  };

  // This hook starts the break timer and navigates back to the selected view after the break timer is done
  useBreak();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeInOut', type: 'spring' },
      }}
      exit={{ opacity: 0 }}
      className='w-full h-screen bg-black overflow-clip relative flex flex-col items-center justify-center'
    >
      <CirclesBg animate={isRunning} />
      <div className='absolute w-full inset-0 z-10 flex flex-col items-center justify-center gap-4'>
        <CiPause1 size={64} className='text-white' />
        <h1 className='text-4xl capitalize animate-pulse'>Pause & breath</h1>
        <p className='opacity-70'>{time}</p>
        <button
          onClick={handleClick}
          className='absolute bottom-5 bg-transparent rounded-md p-2  border-[2px] opacity-55 md:hover:opacity-100 transition-all active:opacity-100'
        >
          NO PAUSE, GO NOW!
        </button>
      </div>
    </motion.section>
  );
}
