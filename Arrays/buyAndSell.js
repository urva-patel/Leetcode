prices = [1,2,3,4,5];

var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let j = 1; j < prices.length; j++){
        if(prices[j] > prices[j-1]) {
            maxProfit = maxProfit + (prices[j] - [prices[j-1]])
        }
    }
    return maxProfit;
    
};

console.log(maxProfit([1,2,3,4,5]));