class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = new Map();

        for(let n of nums){

            map.set(n, (map.get(n) ?? 0) + 1)

            while(map.size > 2){
                
                for(let [k, v] of map){
                    if(v === 1){
                        map.delete(k)
                    }else{
                        map.set(k, map.get(k) - 1)
                    }
                }

            }

        }


        const allowCount = Math.floor(nums.length / 3);

        for(let [k, _] of map){
            let count = 0;

            for(let n of nums){
                if(k === n) count++
            }

            if(count <= allowCount){
                map.delete(k)
            }
        }


        return [...map.keys()];

    }
}
