import { useTimerStore } from '../../stores/timer.store';

export default function Digital() {
  const { getDisplayTime } = useTimerStore();

  return (
    <section className='w-full h-full flex items-center justify-center text-white'>
      <h1 className='text-6xl font-bold'>{getDisplayTime()}</h1>
    </section>
  );
}
