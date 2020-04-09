const twoSum = function(nums, target) {
    // 两重循环， 
    // target , 一重循环， nums[i],  target-nums[i]
    // 一次就能找到？  {}
    let map = {}; //对象字面量
    nums.forEach(function(e, i) {
      // console.log(e, i); 
      map[e] = i; // map[]
      // var name = 'kfd'
      // shops[0][name]
    })
    // console.log(map);
    for (let i = 0; i < nums.length; i++) {
      let j = map[target - nums[i]];
      if (j && j !== i) {
        return [i, j];
      }
    }
  }