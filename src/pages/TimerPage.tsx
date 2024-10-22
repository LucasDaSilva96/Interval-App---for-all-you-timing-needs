import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function TimerPage() {
  // ADD nav, timer outlet and footer here
  return (
    <section className='w-full overflow-hidden min-h-screen bg-black flex flex-col justify-between p-4'>
      <Nav />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.8,
          ease: 'circInOut',
          type: 'spring',
        }}
        exit={{ x: '100%' }}
      >
        <Outlet />
      </motion.div>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.8,
          ease: 'circInOut',
          type: 'spring',
          delay: 0.4,
        }}
        exit={{ x: '-100%' }}
      >
        <Footer />
      </motion.div>
    </section>
  );
}
