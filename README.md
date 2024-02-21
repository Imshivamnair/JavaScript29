# JavaScript29
Write a JavaScript function to convert an amount into coins.

Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1

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


**Sample Output:**

[25,10,10,1]


**Solution-2:**
function amountToCoins(amount, coins) {
    if (amount <= 0 || !Array.isArray(coins) || coins.length === 0) {
        return []; // Return an empty array for invalid inputs
    }

    const result = [];
    let remainingAmount = amount;

    // Iterate through each coin in descending order
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];

        // Calculate the number of times the current coin can be used
        const count = Math.floor(remainingAmount / coin);

        // Add the coin to the result array count times
        for (let j = 0; j < count; j++) {
            result.push(coin);
        }

        // Update the remaining amount
        remainingAmount %= coin;
    }

    return result;
}

// Example usage:
const result = amountToCoins(46, [25, 10, 5, 2, 1]);
console.log(result); // Output: [25, 10, 10, 1]

**Sample Output:**

[25,10,10,1]
