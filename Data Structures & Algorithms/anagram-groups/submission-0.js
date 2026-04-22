class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(let str of strs){
            const arr = new Array(26).fill(0);
            for(let c of str){
                arr[c.charCodeAt(0) - "a".charCodeAt(0)] = (arr[c.charCodeAt(0) - "a".charCodeAt(0)] ?? 0) + 1 ;
            }

            const key = JSON.stringify(arr);

            if(!map.has(key)){
                map.set(key, [])
            }

            map.get(key).push(str);

        }


        return Array.from(map.values())
    }
}
