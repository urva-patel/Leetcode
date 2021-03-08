const nums = [1,2,3,4,5,6,7];

const k = 0;

var rotate = function(nums, k) {
    k = k % nums.length;
    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let current = start;
        let prev = nums[start];
        do {
            let next = (current + k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (start !== current)
    }
    return nums;
};

console.log(rotate(nums,k));

// Time complexity is On one pass is used
// Space complexity is O1. Constant extra space is used