s = ["h", "e", "l", "l", "o"];

var reverseString = (s) => {
    for(let i = 0; i < (s.length/2); i++) {
        let temp = s[s.length - i - 1];
        s[s.length - i - 1] = s[i];
        s[i] = temp;
    }
    return s;
};

console.log(reverseString(s));

// Time complexity: O(n) because N/2 element
//Space Complexity O(1), constant space