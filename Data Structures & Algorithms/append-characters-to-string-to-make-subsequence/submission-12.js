class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */

    //s="coaching"
    //t="coding"

    //s = 8
    //t = 2

    appendCharacters(s, t) {
        let sLen = 0;
        let tLen = 0;

        while (sLen < s.length && tLen < t.length) {
            while (sLen < s.length) {
                if (s[sLen] == t[tLen]) {
                    sLen++;
                    tLen++;
                    break;
                }

                sLen++;
            }

            // if (sLen >= s.length) break;

            
        }


        return t.length - tLen;
    }
}

//s="caaat"
//t="cat"

//s="rabbit"
//t="rabbbit"

//s="contra"
//t="anacondastreetracecar"
