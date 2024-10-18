import { Link } from 'react-router-dom';

function LoadingPage() {
  return (
    <section className='w-full bg-black min-h-screen text-white flex items-center justify-center'>
      <Link to={'/settings'} className='flex flex-col items-center gap-1.5'>
        <div className='relative w-20 h-20 overflow-clip bg-white rounded-full animate-borderAni cursor-pointer'>
          <img src='/logo.png' alt='logo' className='absolute inset-0' />
        </div>

        <h1 className='text-2xl font-medium'>INTERVAL</h1>

        <p>For all your timing needs</p>
      </Link>
    </section>
  );
}

export default LoadingPage;
