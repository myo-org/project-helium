const sum = (...input) => {
    // storing all the inputs as an array using spread operator
    // add all the elements from the array into one integer using array.reduce
    return input.reduce((cur,acc)=> acc+cur)
}
module.exports = {sum}