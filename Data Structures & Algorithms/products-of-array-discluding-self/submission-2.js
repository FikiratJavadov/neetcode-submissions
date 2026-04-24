class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      const res = new Array(nums.length);

      for(let i = 0; i < nums.length; i++){
        res[i] = (res[i - 1] ?? 1) * nums[i];
      }


      let right = 1;


      for(let i = nums.length - 1; i >= 0; i--){
        const left = res[i - 1] ?? 1

        const sum = left * right;
        right = right * nums[i];

        res[i] = sum;
      }


      return res;

    }
}
