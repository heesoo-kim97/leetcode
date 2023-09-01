
var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};

var result = merge([1, 2, 3, 0, 0], 3, [2, 4, 5], 3);

// eslint-disable-next-line no-console
console.log(result);
