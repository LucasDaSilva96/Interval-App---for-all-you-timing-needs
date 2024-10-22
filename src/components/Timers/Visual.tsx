import { convertNumberToTxt } from '../../services/convertNumberToTxt';
import { useTimerStore } from '../../stores/timer.store';
import { motion } from 'framer-motion';

export default function Visual() {
  const { minutesLeft, secondsLeft } = useTimerStore();
  return (
    <motion.div
      initial={{ x: '200%' }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.8,
        ease: 'circInOut',
        type: 'spring',
        delay: 0.4,
      }}
      exit={{ x: '200%' }}
      className='w-full flex items-center justify-center p-2'
    >
      {
        <h1 className='text-3xl uppercase font-semibold'>
          <span>{convertNumberToTxt(minutesLeft)} minutes and</span>
          <br />
          <span>{convertNumberToTxt(secondsLeft)} seconds left</span>
        </h1>
      }
    </motion.div>
  );
}
