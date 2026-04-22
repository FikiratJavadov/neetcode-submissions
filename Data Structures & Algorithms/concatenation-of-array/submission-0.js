class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const arr = new Array(nums.length * 2);

        for(let i=0; i < nums.length; i++){
            arr[i] = nums[i]
            arr[nums.length + i] = nums[i]
        }

        return arr;
    }
}
