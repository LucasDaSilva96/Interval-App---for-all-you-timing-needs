import { useTimerStore } from '../../stores/timer.store';
import { motion } from 'framer-motion';

export default function Digital() {
  const { getDisplayTime } = useTimerStore();

  return (
    <motion.section
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.8,
        ease: 'circInOut',
        type: 'spring',
        delay: 0.4,
      }}
      exit={{ x: '-100%' }}
      className='w-full h-full flex items-center justify-center text-white'
    >
      <h1 className='text-6xl font-bold'>{getDisplayTime()}</h1>
    </motion.section>
  );
}
