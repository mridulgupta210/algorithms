/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/

var swap = function(nums, indexA, indexB) {
    let temp = nums[indexA];
    nums[indexA] = nums[indexB];
    nums[indexB] = temp;
}

var sortColors = function(nums) {
    let index0 = 0
    let index1 = 0;
    let index2 = nums.length - 1;
    
    while (index1 <= index2) {
        if (nums[index1] === 0) {
           swap(nums, index0, index1);
            index0++;
            index1++;
        } else if (nums[index1] === 1) {
            index1++;
        } else {
            swap(nums, index1, index2); 
            index2--;
        }
    }
};

/*
Alternate way:
const sortColors = function(nums) {
  let j = 0;
  let k = nums.length - 1;
  const swap = (a, b) => {
    const t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
  };
  for (let i = 0; i <= k; i++) {
    if (nums[i] === 2) {
      swap(i--, k--);
    } else if (nums[i] === 0) {
      swap(i, j++);
    }
  }
};
*/
