import { useTimerStore } from '../../stores/timer.store';

export default function Digital() {
  const { getDisplayTime, pauseTimer, resumeTimer } = useTimerStore();

  return (
    <section className='w-full h-full flex items-center justify-center text-white'>
      <h1 className='text-6xl font-bold'>{getDisplayTime()}</h1>
      <div className='flex gap-4'>
        <button
          onClick={pauseTimer}
          className='p-2 px-6 border rounded-md uppercase text-white font-semibold'
        >
          pause
        </button>
        <button
          onClick={resumeTimer}
          className='p-2 px-6 border rounded-md uppercase text-white font-semibold'
        >
          resume
        </button>
      </div>
    </section>
  );
}
