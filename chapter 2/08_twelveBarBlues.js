// Write a function that console.logs the number 1, then "chick", then
// "boom", then "chick", then 2, then "chick", "boom", "chick" –
// continuing the same cycle for each number up to (including) 12.

function twelveBarBlues(){
    for( let i = 1; i < 13; i++){
        console.log(i, 'chick', 'boom', 'chick')
    }
}

console.log(twelveBarBlues())