import { Link } from 'react-router-dom';
import { useTimerSettingsStore } from '../stores/timerSettings.store';
import SelectMinutes from '../components/SelectTime';
import { useTimerStore } from '../stores/timer.store';

export default function SetTimerPage() {
  const { hasBreak, hasInterval, setHasBreak, setHasInterval, minutes } =
    useTimerSettingsStore();
  const { startTimer } = useTimerStore();

  const handleInterval = () => {
    setHasInterval(!hasInterval);
  };

  const handleBreak = () => {
    setHasBreak(!hasBreak);
  };

  return (
    <section className='w-full min-h-screen bg-grey text-white flex flex-col items-center justify-center gap-8'>
      <SelectMinutes />

      <div className='text-xl space-y-2'>
        <div className='space-x-3'>
          <input
            className='w-6 h-6 text-blue-600  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600'
            type='checkbox'
            id='interval'
            name='interval'
            checked={hasInterval}
            onChange={handleInterval}
          />
          <label htmlFor='interval'>Intervals</label>
        </div>

        <div className='space-x-3'>
          <input
            className='w-6 h-6 text-blue-600  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600'
            type='checkbox'
            id='break'
            name='break'
            checked={hasBreak}
            onChange={handleBreak}
          />
          <label htmlFor='break'>5 min break / interval</label>
        </div>
      </div>

      <Link
        onClick={() => startTimer(minutes)}
        to={'/timer'}
        className='uppercase border p-2 px-10 rounded-md text-2xl font-semibold'
      >
        start timer
      </Link>
    </section>
  );
}
