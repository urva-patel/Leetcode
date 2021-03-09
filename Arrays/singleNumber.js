const nums = [11,2,2,4,4];

var singleNumber = function(nums) {
   let a = 0;
   for (let i = 0; i < nums.length; i++) {
        a ^= nums[i];
   }
   return a;
};

console.log(singleNumber(nums));

// Time complexity : O(n). We only iterate through nums, so the time complexity is the number of elements in nums.

// Space complexity : O(1)