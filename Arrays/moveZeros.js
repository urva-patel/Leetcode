const nums = [0,4,0,1];

var moveZeros = function(nums) {
    let lastNonZeroFoundAt = 0;
    // If the current element is not 0, then we need to
    // append it just in front of last non 0 element we found. 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }
 	// After we have finished processing new elements,
 	// all the non-zero elements are already at beginning of array.
 	// We just need to fill remaining array with 0's.
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeros(nums));

// Time complexity : O(n). We only iterate through nums, so the time complexity is the number of elements in nums.

// Space complexity : O(1)