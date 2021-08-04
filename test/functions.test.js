
const {addtion} = require('../functions/app')
const {unit_test, expect} = require('../modules/custom_test')

/**
 * UNIT TESTING for functions
 * @todos
 * * @addtion
 * * @subtraction
 * * @multiplications
 */


console.log(addtion, expect)
// testing tester function
unit_test ('Testing', () =>{
    console.log('from the callback function')
    expect(1).toBe(2)
    
})
// addition test