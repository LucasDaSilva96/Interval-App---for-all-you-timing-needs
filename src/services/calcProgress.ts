// This function calculates the progress of the time in the timer. It takes the minutes and seconds left and the total time of the timer as arguments and returns the progress in percentage.
export const calTimeProgress = (
  minutes: number,
  seconds: number,
  totalTime: number
) => {
  const progress = (minutes / totalTime) * 100;
  const progressSeconds = (seconds / 60) * (100 / totalTime);
  const result = 100 - (progress + progressSeconds);
  return Math.round(result);
};
