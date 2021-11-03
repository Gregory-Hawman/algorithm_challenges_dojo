// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (first star would be very first char in the text field), or right-justified (last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75-character text field (with same number of spaces on either side of the block of stars, plus/minus one).

// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side. The last num characters should be asterisks; the other 75 should be spaces.
// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.
// (optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.

function drawLeftStars(num) {
    let stars = '';
    for (let i = 1; i <= num; i++){
        stars += '*'
    };
    return stars
};

console.log(drawLeftStars(50))

function drawRightStars(num) {
    let spaces = 75 - num;
    let textField = ''
    for (i = 0; i < spaces; i++){
        textField += ' '
    }
    for (let i = 0; i < num; i++){
        textField += '*'
    }
    return textField
}   

console.log(drawRightStars(25))

function drawCenterStars(num) {
    let textField = '';
    let leftSpace = (75 - num)/2;

    for (i = 0; i < leftSpace; i++){
        textField += ' '
    }
    for (let i = 0; i < num; i++){
        textField += '*'
    }
    return textField
}

console.log(drawCenterStars(25))