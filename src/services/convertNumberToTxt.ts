// This function converts a number to text in order to display it in the UI. It is used in the Timer component to display the time left in words instead of numbers. For example, if the time left is 5 minutes and 30 seconds, it will be displayed as "five minutes thirty seconds" instead of "5:30". This function is called in the Timer component to convert the time left to text before displaying it in the UI.
export const convertNumberToTxt = (num: number): string => {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    'zero',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  // Convert number to string
  const numStr = num.toString();
  // Split the number string into an array of characters
  const numArr = numStr.split('');
  // Get the length of the number array
  const numLen = numArr.length;
  let txt = '';
  // Check the length of the number array
  if (numLen === 1) {
    txt = ones[num];
  } else if (numLen === 2) {
    if (num < 20) {
      txt = teens[num - 10];
    } else {
      // Get the first digit of the number
      txt = tens[parseInt(numArr[0])];
      if (parseInt(numArr[1]) > 0) {
        // Add a hyphen and the second digit of the number
        txt += `-${ones[parseInt(numArr[1])]}`;
      }
    }
  }
  return txt;
};
