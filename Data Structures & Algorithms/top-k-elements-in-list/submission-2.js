class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};

        for(let n of nums){
            obj[n] = (obj[n] ?? 0) + 1;
        }

        const arr = Array.from({length: nums.length + 1}, () => []);

        for(let key in obj){
            arr[obj[key]].push(key);
        }

        const res = [];

        for(let i = arr.length - 1; i >= 0; i--){
            for(let j = 0; j < arr[i].length; j++){
                if(res.length === k) return res;

                res.push(arr[i][j])
            }
        }

        return res;
    }
}
