import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function LoadingPage() {
  return (
    <section className='w-full bg-black min-h-screen text-white flex items-center justify-center'>
      <Link to={'/settings'} className='flex flex-col items-center gap-1.5'>
        <div className='relative w-20 h-20 overflow-clip bg-white rounded-full animate-bounce cursor-pointer'>
          <img src='/logo.png' alt='logo' className='absolute inset-0' />
        </div>

        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, x: '100%' }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='text-2xl font-medium'
            exit={{ opacity: 0, scale: 0.5, x: '100%' }}
          >
            INTERVAL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.5, x: '-100%' }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
            exit={{ opacity: 0, scale: 0.5, x: '-100%' }}
          >
            For all your timing needs
          </motion.p>
        </AnimatePresence>
      </Link>
    </section>
  );
}

export default LoadingPage;
