import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function SelectMinutes() {
  const [minutes, setMinutes] = useState(5);

  const handleIncrement = () => {
    setMinutes((prev) => prev + 5);
  };

  const handleDecrement = () => {
    if (minutes === 5 || minutes - 5 < 5) return;
    setMinutes((prev) => prev - 5);
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
      <div className='flex flex-col gap-0.5 items-center'>
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
