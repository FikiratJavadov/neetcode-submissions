class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let postfix = [];

        let l = 0;
        let r = nums.length - 1;

        while(l < nums.length){

            prefix[l] = (prefix[l - 1] ?? 1) * nums[l]
            postfix[r] = (postfix[r + 1] ?? 1) * nums[r]

            l++
            r--
        }

    

        let res = [];

        for(let i = 0; i < prefix.length; i++){
            let left = prefix[i - 1] ?? 1;
            let right = postfix[i + 1] ?? 1;

            res[i] = left * right;
        }

            console.log(prefix, postfix, res)
        return res
    }
}
