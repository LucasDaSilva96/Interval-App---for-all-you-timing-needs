import { useNavigate } from 'react-router-dom';
import { useTimerStore } from '../stores/timer.store';

export default function Footer() {
  const navigate = useNavigate();
  const { stopTimer } = useTimerStore();

  const handleAbortTimer = () => {
    stopTimer();
    navigate('/settings');
  };

  return (
    <footer className='w-full flex items-center justify-center'>
      <button
        onClick={handleAbortTimer}
        className='p-2 px-6 border rounded-md uppercase text-white font-semibold'
      >
        abort timer
      </button>
    </footer>
  );
}
