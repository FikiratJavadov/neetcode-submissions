class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l = 0;
        let i = 0;
        let r = nums.length - 1;

        while(i <= r){
            if(nums[i] === 0){
                this.swap(l, i, nums);
                l++;
                i++;
                continue;
            }

            if(nums[i] === 2){
                this.swap(i, r, nums);
                r--;
                 continue;
            }

            i++;
        }

        return nums;
    }

    swap(l, r, arr){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
}



//[1,0,1,2,1,0,1,2]

