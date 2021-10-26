/* exported reverseInteger */

const reverse = x => {
  const reverseNumber = '';
  for (let i = x.length - 1; i >= 0; i--) {
    if (x[i] === 0) {
      break;
    }
    reverseNumber.push(x[i]);
  }
  return reverseNumber;
};

// eslint-disable-next-line no-console
console.log(reverse);

// reversing the number
