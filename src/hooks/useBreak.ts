import { useEffect } from 'react';
import { useSelectedViewStore } from '../stores/selectedView.store';
import { useTimerStore } from '../stores/timer.store';
import { useBreakStore } from '../stores/break.store';
import { useNavigate } from 'react-router-dom';

// This hook starts the break timer and navigates back to the selected view after the break timer is done
export const useBreak = () => {
  const { isDone, startBreakTimer, stopTimer } = useBreakStore();
  const { selectedView } = useSelectedViewStore();
  const { startTimer, startValue } = useTimerStore();
  const navigate = useNavigate();

  useEffect(() => {
    // 1 Stop the timer in order to reset it
    stopTimer();
    // 2 Start a 5 minute break timer
    startBreakTimer();
  }, []);

  useEffect(() => {
    if (isDone) {
      stopTimer();

      startTimer(startValue);

      setTimeout(() => {
        return navigate(selectedView);
      }, 300);
    }
  }, [isDone, startTimer, startValue, stopTimer, navigate, selectedView]);
  return null;
};
