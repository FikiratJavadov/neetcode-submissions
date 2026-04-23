class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let l = 0;
        let r = 0;

        while(l < t.length && r < s.length){

            if(t[l] === s[r]){
                l++;
                r++;
            }else{
             r++;
            }


        }

        return t.length - l;
    }
}
