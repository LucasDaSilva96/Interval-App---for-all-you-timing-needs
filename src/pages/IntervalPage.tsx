import CirclesBg from '../components/CirclesBg';
import { CiPause1 } from 'react-icons/ci';
import { useBreakStore } from '../stores/break.store';
import { useSelectedViewStore } from '../stores/selectedView.store';
import { useTimerStore } from '../stores/timer.store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function IntervalPage() {
  const { isDone, isRunning, time, startBreakTimer } = useBreakStore();
  const { selectedView } = useSelectedViewStore();
  const { startTimer, startValue } = useTimerStore();

  const navigate = useNavigate();

  useEffect(() => {
    startBreakTimer(1);
  }, []);

  useEffect(() => {
    if (isDone) {
      startTimer(startValue);
      return navigate(selectedView);
    }
  }, [isDone]);

  return (
    <section className='w-full h-screen bg-black overflow-clip relative flex flex-col items-center justify-center'>
      <CirclesBg animate={isRunning} />
      <div className='absolute w-full inset-0 z-10 flex flex-col items-center justify-center gap-4'>
        <CiPause1 size={64} className='text-white' />
        <h1 className='text-4xl capitalize animate-pulse'>Pause & breath</h1>
        <p className='opacity-70'>{time}</p>
        <button className='absolute bottom-5 bg-transparent rounded-md p-2  border-[2px] opacity-55 md:hover:opacity-100 transition-all active:opacity-100'>
          NO PAUSE, GO NOW!
        </button>
      </div>
    </section>
  );
}
