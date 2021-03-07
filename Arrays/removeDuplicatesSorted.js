const nums = [1,1,2];

var removeDuplicates = function(nums) {
    if (nums == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        } 
    }
    return i + 1;
};

console.log(removeDuplicates(nums));