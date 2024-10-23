import { useNavigate } from 'react-router-dom';
import { useTimerSettingsStore } from '../stores/timerSettings.store';
import { useTimerStore } from '../stores/timer.store';
import { useEffect } from 'react';

// This hook is responsible for handling the interval and break logic.
export const useIntervalAndBreak = () => {
  const { hasBreak, hasInterval, incrementIntervalRound } =
    useTimerSettingsStore();
  const { isDone, stopTimer, startValue, startTimer } = useTimerStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDone) {
      if (hasInterval) {
        incrementIntervalRound();
        stopTimer();
        if (!hasBreak) {
          startTimer(startValue);
        }
        if (hasBreak) {
          setTimeout(() => {
            return navigate('/interval');
          }, 300);
        }
      } else {
        return navigate('/alarm');
      }
    }
  }, [isDone, hasInterval, hasBreak]);

  return null;
};
