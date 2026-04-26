class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

        const map = new Map([[0,1]]);
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            nums[i] = (nums[i - 1] ?? 0) + nums[i];
            const neededSubarray = nums[i] - k;

            if(map.has(neededSubarray)){
                count+= map.get(neededSubarray);
            }

            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1)
        }

    return count;

    }
}





