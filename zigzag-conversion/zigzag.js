/* exported zigzagConversion */

const convert = (s, numRows) => {
  if (s.length <= numRows || numRows < 2) {
    return s;
  }
  const len = s.length;
  const num = 2 * (numRows - 1);
  const res = Array(numRows).fill('');
  let tmp = 0;
  for (let i = 0; i < len; i++) {
    tmp = i % num;
    if (tmp < numRows) {
      res[tmp] += s[i];
    } else {
      res[num - tmp] += s[i];
    }
  }
  return res.join('');
};

// eslint-disable-next-line no-console
console.log(convert);

// adding a test comment
// zigzag patterns
