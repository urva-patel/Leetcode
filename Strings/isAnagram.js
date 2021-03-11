let s = "anagram";
let t = "nagarma";

var isAnagram = (s, t) => {
    if(s.length !== t.length) {
        return false;
    }
    let map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
        map[t[i]] ? map[t[i]]-- : map[t[i]] = -1;
    }
    for (let i = 0; i < s.length; i++) {
        if(map[s[i]] !== 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram(s, t));

// Time complexity: O(n) because N/2 element
//Space Complexity O(1), constant space