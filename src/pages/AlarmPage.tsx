import { useNavigate } from 'react-router-dom';
import CirclesBg from '../components/CirclesBg';
import { PiBellSimpleRinging } from 'react-icons/pi';
import { useTimerStore } from '../stores/timer.store';
import { useBreakStore } from '../stores/break.store';
import { motion } from 'framer-motion';

export default function AlarmPage() {
  const navigate = useNavigate();
  const { stopTimer } = useTimerStore();
  const breakStore = useBreakStore();

  const handleClick = () => {
    stopTimer();
    breakStore.stopTimer();
    navigate('/settings');
  };

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
      <CirclesBg />
      <div className='absolute w-full inset-0 z-10 flex flex-col items-center justify-center gap-4'>
        <PiBellSimpleRinging size={64} className='text-white animate-bounce' />
        <h1 className='text-4xl capitalize'>Times up!</h1>
        <button
          onClick={handleClick}
          className='absolute bottom-5 bg-transparent rounded-md p-2  border-[2px] opacity-55 md:hover:opacity-100 transition-all min-w-[180px] uppercase active:opacity-100'
        >
          SET NEW timer
        </button>
      </div>
    </motion.section>
  );
}
