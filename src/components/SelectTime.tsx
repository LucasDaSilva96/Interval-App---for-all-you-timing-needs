import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { useTimerSettingsStore } from '../stores/timerSettings.store';

export default function SelectMinutes() {
  const { decrement, increment, minutes } = useTimerSettingsStore();

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  return (
    <div className='flex gap-12 items-baseline'>
      <button
        disabled={minutes === 5}
        onClick={handleDecrement}
        className='transition-colors focus:text-white hover:text-white/50 active:text-white/50'
      >
        <FaChevronLeft size={36} />
      </button>
      <div className='flex flex-col gap-1 items-center'>
        <span className='text-6xl font-bold'>{minutes}</span>
        <span className='opacity-60'>minutes</span>
      </div>
      <button
        onClick={handleIncrement}
        className='transition-colors focus:text-white hover:text-white/50 active:text-white/50'
      >
        <FaChevronRight size={36} />
      </button>
    </div>
  );
}
