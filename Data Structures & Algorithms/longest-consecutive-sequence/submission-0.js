class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;

        for(let i = 0; i < nums.length; i++){
            if(set.has(nums[i] - 1)) continue;

            let len = 1;

            while(set.has(nums[i] + len)){
                len++
            }   

            max = Math.max(max, len)
        }

        return max;
    }
}
