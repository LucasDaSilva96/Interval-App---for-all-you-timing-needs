import { useNavigate } from 'react-router-dom';
import CirclesBg from '../components/CirclesBg';
import { PiBellSimpleRinging } from 'react-icons/pi';

export default function AlarmPage() {
  const navigate = useNavigate();
  return (
    <section className='w-full h-screen bg-black overflow-clip relative flex flex-col items-center justify-center'>
      <CirclesBg />
      <div className='absolute w-full inset-0 z-10 flex flex-col items-center justify-center gap-4'>
        <PiBellSimpleRinging size={64} className='text-white animate-bounce' />
        <h1 className='text-4xl capitalize'>Times up!</h1>
        <button
          onClick={() => navigate('/settings')}
          className='absolute bottom-5 bg-transparent rounded-md p-2  border-[2px] opacity-55 hover:opacity-100 transition-all min-w-[180px]'
        >
          SET NEW timer
        </button>
      </div>
    </section>
  );
}
