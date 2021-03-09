const nums1 = [1,2,2,1];
const nums2 = [2,2];

var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    const map = new Map();
    for(const n of nums1) {
        map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1)
    }
    const result = [];
    for (const n of nums2) {
        if (map.has(n) && map.get(n) > 0) {
            result.push(n);
            map.set(n, map.get(n) - 1);
        }
    }
    return result;
};

console.log(intersect(nums1,nums2));

// time complexity is O(num1+num2)