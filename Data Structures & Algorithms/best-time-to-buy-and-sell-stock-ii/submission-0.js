class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let l = 0;
        let r = 1;
        let sum = 0;

        while(r < prices.length){
            if(prices[r] > prices[l]){
                sum+= prices[r] - prices[l]
            }

            r++
            l++
        }

        return sum;

    }
}
