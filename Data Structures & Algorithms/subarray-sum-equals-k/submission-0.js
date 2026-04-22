class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
      const map = new Map();  // ← fixed
        let count = 0;

        for(let i = 0; i < nums.length; i++){
            nums[i] = (nums[i - 1] ?? 0) + nums[i];

            if(nums[i] === k){
                count++
            }

            const expected = nums[i] - k;

            if(map.has(expected)){
                count+= map.get(expected)
            }

            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);

        }

        return count;
    }
}



