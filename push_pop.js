var nums = [12, 13, 14, 15, 16];

nums.push(99);
console.log(nums);          // [ 12, 13, 14, 15, 16, 99 ]

nums.pop();
console.log(nums);         // [ 12, 13, 14, 15, 16 ]

var delEle = nums.pop();  // Last poped element will be stored
console.log(delEle);      // 16

console.log(6 != 6);