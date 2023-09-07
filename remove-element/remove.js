/*
  given an integer array nums and an integer val,
  remove all occurrences if vak ub nums in place.
*/

// eslint-disable-next-line no-unused-vars
var removeElement = function (nums, val) {
  var j = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j++] = nums[i];
    }
  }
  return j;
};
