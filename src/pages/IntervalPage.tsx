import CirclesBg from '../components/CirclesBg';
import { CiPause1 } from 'react-icons/ci';

export default function IntervalPage() {
  return (
    <section className='w-full h-screen bg-black overflow-clip relative flex flex-col items-center justify-center'>
      <CirclesBg animate={true} />
      <div className='absolute w-full inset-0 z-10 flex flex-col items-center justify-center gap-4'>
        <CiPause1 size={64} className='text-white' />
        <h1 className='text-4xl capitalize'>Pause & breath</h1>
        <p className='opacity-70'>03:50</p>
        <button className='absolute bottom-5 bg-transparent rounded-md p-2  border-[2px] opacity-55 hover:opacity-100 transition-all'>
          NO PAUSE, GO NOW!
        </button>
      </div>
    </section>
  );
}
