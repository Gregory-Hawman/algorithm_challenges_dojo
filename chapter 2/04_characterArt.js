// From the above, derive the following that accept and draw the given characters, not just asterisks:

// drawLeftChars(num,char) // For all three of these, you
// drawRightChars(num,char) // can safely assume that 'char'
// drawCenteredChars(num,char) // is a string with length 1

function drawLeftChars(num,char){
    let textField = ''
    for (let i = 0; i < num; i++){
        textField += char
    }
    return textField
}

function drawRightChars(num,char){
    let spaces = 75 - num;
    let textField = ''
    for (i = 0; i < spaces; i++){
        textField += ' '
    }
    for (let i = 0; i < num; i++){
        textField += char
    }
    return textField
}

function drawCenteredChars(num,char){
    let textField = '';
    let leftSpace = (75 - num)/2;

    for (i = 0; i < leftSpace; i++){
        textField += ' '
    }
    for (let i = 0; i < num; i++){
        textField += char
    }
    return textField
}

let char1 = 'x';
let char2 = 'y';
let char3 = 'z';

console.log(drawLeftChars(50,char1))
console.log(drawRightChars(25,char2))
console.log(drawCenteredChars(25,char3))