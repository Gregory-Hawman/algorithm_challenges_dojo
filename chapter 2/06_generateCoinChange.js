// Change is inevitable (especially when breaking a twenty). Make
// generateCoinChange(cents). Accept a number of American cents,
// compute and print how to represent that amount with smallest
// number of coins. Common American coins are pennies (1 cent),
// nickels (5 cents), dimes (10 cents), and quarters (25 cents).
// Second: can you simplify/shorten your code?
// Example output, given (94):
// 94 cents can be represented by:
// quarters:3
// dimes:1
// nickels:1
// pennies:4
// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40
// additional characters or less.

function generateCoins(cents){
    let dollars = 0, halfDollars = 0, quarters = 0, dimes = 0, nickels = 0, pennies = 0
    let remainder
    //dollars
    remainder = cents % 100;
    console.log(remainder)
    dollars = (cents - remainder) / 100;
    console.log(dollars)
    // how much change is left in cents
    cents = remainder
    console.log(cents)

    // halfDollars
    remainder = cents % 50;
    halfDollars = (cents - remainder) / 50
    cents = remainder

    //quarters
    remainder = cents % 25;
    quarters = (cents - remainder) / 25
    cents = remainder

    //dimes
    remainder = cents % 10;
    dimes = (cents - remainder) / 10
    cents = remainder

    //nickles
    remainder = cents % 5;
    nickles = (cents - remainder) / 5
    cents = remainder

    // pennies
    pennies = cents

    return `You get back ${dollars} dollars, ${halfDollars} half dollars, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, and ${pennies} pennies`
}

console.log(generateCoins(1196))