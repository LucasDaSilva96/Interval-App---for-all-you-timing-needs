import { Link } from 'react-router-dom';
import { useSelectedViewStore } from '../stores/selectedView.store';
import { useTimerStore } from '../stores/timer.store';
import { useTimerSettingsStore } from '../stores/timerSettings.store';
import SelectMinutes from './SelectTime';

export default function TimerSettings() {
  const { hasBreak, hasInterval, setHasBreak, setHasInterval, minutes } =
    useTimerSettingsStore();
  const { startTimer } = useTimerStore();
  const { setSelectedView } = useSelectedViewStore();

  const handleInterval = () => {
    setHasInterval(!hasInterval);
    if (!hasInterval) {
      setHasBreak(false);
    }
  };

  const handleBreak = () => {
    setHasBreak(!hasBreak);
  };

  const handleStartTimer = () => {
    setSelectedView('/timer');
    setTimeout(() => {
      startTimer(minutes);
    }, 100);
  };
  return (
    <section className='w-full min-h-screen text-white flex flex-col items-center justify-center gap-8 z-50 absolute inset-0 '>
      <SelectMinutes />

      <div className='text-xl space-y-2'>
        <div className='space-x-3 flex items-center'>
          <input
            className='w-6 h-6 text-blue-600  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600 cursor-pointer'
            type='checkbox'
            id='interval'
            name='interval'
            checked={hasInterval}
            onChange={handleInterval}
          />
          <label htmlFor='interval'>Intervals</label>
        </div>

        {hasInterval && (
          <div className='space-x-3 flex items-center'>
            <input
              className='w-6 h-6 text-blue-600  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600 cursor-pointer'
              type='checkbox'
              id='break'
              name='break'
              checked={hasBreak}
              onChange={handleBreak}
            />
            <label htmlFor='break'>5 min break / interval</label>
          </div>
        )}
      </div>

      <Link
        onClick={handleStartTimer}
        to={'/timer'}
        className='uppercase border p-2 px-10 rounded-md text-2xl font-semibold'
      >
        start timer
      </Link>
    </section>
  );
}
