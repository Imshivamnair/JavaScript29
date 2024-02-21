// Define a function named amountTocoins that calculates the combination of coins needed to make up a given amount
function amountTocoins(amount, coins) {
    // Check if the amount is 0
    if (amount === 0) {
        // If true, return an empty array since no coins are needed
        return [];
    } else {
        // Check if the amount is greater than or equal to the first coin in the coins array
        if (amount >= coins[0]) {
            // Calculate the amount left after using the first coin
            left = (amount - coins[0]);

            // Concatenate the first coin with the result of recursively calling amountTocoins with the remaining amount and coins
            return [coins[0]].concat(amountTocoins(left, coins));
        } else {
            // If the amount is less than the first coin, remove the first coin from the array and recursively call amountTocoins
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
}

// Log the result of calling amountTocoins with the input amount 46 and coins array [25, 10, 5, 2, 1] to the console
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
