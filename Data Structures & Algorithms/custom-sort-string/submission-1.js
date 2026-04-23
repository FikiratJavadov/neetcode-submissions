class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const obj = {};

        for(let c of s){
            obj[c] = (obj[c] ?? 0) + 1
        };


        let res = '';
        for(let c of order){
            if(!obj[c]) continue;

            res+= c.repeat(obj[c]);
            delete obj[c]
        }

        for(let key in obj){
            res+= key.repeat(obj[key])
        }

        return res;
    }
}
