// eslint-disable-next-line no-unused-vars
function isPalindrome(numInput) {
  let newString = '';
  const num = numInput.toString();
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== ' ') {
      newString += num[i];
    }
  }

  let count = num.length - 1;
  for (let j = 0; j < num.length; j++) {
    if (j >= count) {
      return true;
    } else if (newString[j] !== num[count]) {
      return false;
    }
    count--;
  }
}
