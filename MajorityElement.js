nums = [2, 2, 1, 1, 1, 2, 2];
var majorityElement = function (nums) {
  let res0 = {};
  const s = new Set(nums);
  s.forEach((i) => {
    res0[i] = 0;
  });
  nums.forEach((i) => {
    res0[i]++;
  });
  let maxKey = null;
  let maxValue = -Infinity;
  for (const [key, value] of Object.entries(res0)) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  console.log('123',Object.entries(res0))
  return Number(maxKey);
};
console.log(majorityElement(nums));
