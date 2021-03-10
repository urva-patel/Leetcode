const nums = [11,2,4];
const target = 6;

var twoSum = function(nums, target) {
   let map = new Map();
   for (let i = 0; i < nums.length; i++) {
       let complement = target - nums[i];
       if (map.has(complement)) {
            return [i, map.get(complement)]
       }
       map.set(nums[i], i);
   }
   return null;
};

console.log(twoSum(nums, target));

// Time complexity : O(n). We only iterate through nums, so the time complexity is the number of elements in nums.

// Space complexity : O(n)