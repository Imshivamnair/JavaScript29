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
