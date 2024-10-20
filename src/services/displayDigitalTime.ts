export const displayDigitalTime = (minutes: number, seconds: number) => {
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${displayMinutes}:${displaySeconds}`;
};
