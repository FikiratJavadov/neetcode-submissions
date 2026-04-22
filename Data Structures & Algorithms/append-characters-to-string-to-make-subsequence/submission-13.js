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
        let j = 0;
        let i = 0;

        while(i < s.length && j < t.length){
            if(s[i] === t[j]){
                j++
            }
            i++
        }

        return t.length - j
    }
}

//s="caaat"
//t="cat"

//s="rabbit"
//t="rabbbit"

//s="contra"
//t="anacondastreetracecar"
