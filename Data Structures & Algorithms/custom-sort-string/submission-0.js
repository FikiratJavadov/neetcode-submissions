class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {

        if(s.length === 0) return ""

        const map = new Map();

        for(let c of s){
            map.set(c, (map.get(c) ?? 0) + 1);
        }

        let res = [];

        for(let c of order){
            if(!map.has(c)) continue;

            while(map.has(c)){
                res.push(c)

                map.set(c, map.get(c) - 1);

                if(map.get(c) === 0){
                    map.delete(c)
                }
            }
        }



        for(let [key, val] of [...map]){
            for(let i = 0; i < val; i++){
                res.push(key)
            }
        }



        return res.join("")

    }
}





