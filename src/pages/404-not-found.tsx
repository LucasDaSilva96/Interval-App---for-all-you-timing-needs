import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className='w-full h-screen flex items-center justify-center flex-col gap-12 bg-black'>
      <motion.h1
        initial={{ x: '100%', opacity: 0.3, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', ease: 'easeInOut' }}
        exit={{ x: '-100%', opacity: 0.3, scale: 0.5 }}
        className='uppercase text-4xl'
      >
        Page not found - 404
      </motion.h1>

      <motion.div
        initial={{ x: '-100%', opacity: 0.3, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          ease: 'easeInOut',
          delay: 0.5,
        }}
        exit={{ x: '100%', opacity: 0.3, scale: 0.5 }}
      >
        <Link to='/' className=' text-white px-4 py-2 rounded-lg border'>
          <span>Go back</span>
        </Link>
      </motion.div>
    </section>
  );
}
