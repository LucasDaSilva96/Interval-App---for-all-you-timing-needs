import { convertNumberToTxt } from '../../services/convertNumberToTxt';
import { useTimerStore } from '../../stores/timer.store';

export default function Visual() {
  const { minutesLeft, secondsLeft } = useTimerStore();
  return (
    <div className='w-full flex items-center justify-center p-2'>
      {
        <h1 className='text-3xl uppercase font-semibold'>
          <span>{convertNumberToTxt(minutesLeft)} minutes and</span>
          <br />
          <span>{convertNumberToTxt(secondsLeft)} seconds left</span>
        </h1>
      }
    </div>
  );
}
