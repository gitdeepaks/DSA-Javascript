var topKFrequent = function (nums, k) {
  //create a map of frequency

  let map = {};

  for (let i = 0; nums.length; i++) {
    if (map[nums[0]]) map[(nums[i] = 0)];
    ++map[nums[i]];
  }

  console.log(map);
};
