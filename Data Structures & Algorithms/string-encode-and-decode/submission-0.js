class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    encode(strs) {
        let res = ""
        for(let str of strs){
            res += `${str.length}#${str}`
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let nString = '';

        let l = 0;
        let r = 0;
        let res = [];

        while(r < str.length){
            if(str[r] === "#"){
             const localNum = Number(nString);
             l = r + 1;
             r = l + localNum;
             nString = "";
             res.push(str.slice(l, r));
             continue;
            }
            nString += str[r];
            r++;
        }

        return res
    }
}

//dummy_input=["Hello","World"]




'3#hey1#!3#how3#are3#you1#?'

// if next el === "#", convert all before str to number
// now you know how many elemetn after # is needed to put at array











