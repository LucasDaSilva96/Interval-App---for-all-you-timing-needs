// This function calculates the rotation of the timer based on the start value and the minutes left.
export const calcRotation = (startValue: number, minutesLeft: number) => {
  return minutesLeft === 0
    ? 0
    : (startValue - minutesLeft) * (360 / startValue);
};
