import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useTimerSettingsStore } from '../stores/timerSettings.store';
import { motion } from 'framer-motion';

// This component is used to select the minutes for the timer
export default function SelectMinutes() {
  const { decrement, increment, minutes } = useTimerSettingsStore();

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  return (
    <motion.div
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', type: 'tween' }}
      exit={{ y: '-100%' }}
      className='flex gap-12 items-baseline'
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={minutes === 5}
        onClick={handleDecrement}
        className='transition-colors focus:text-white md:hover:text-white/50 active:text-white/50 cursor-pointer'
      >
        <FaChevronLeft size={36} />
      </motion.button>
      <div className='flex flex-col gap-1 items-center'>
        <span className='text-6xl font-bold'>{minutes}</span>
        <span className='opacity-60'>minutes</span>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleIncrement}
        className='transition-colors focus:text-white md:hover:text-white/50 active:text-white/50 cursor-pointer'
      >
        <FaChevronRight size={36} />
      </motion.button>
    </motion.div>
  );
}
