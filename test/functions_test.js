
const {addtion} = require('../functions/app')
const {describe,it, expect} = require('../modules/custom_test')

/**
 * UNIT TESTING for functions
 * @todos
 * * @addtion
 * * @subtraction
 * * @multiplications
 */


// testing tester function
describe ('Addition function test', () =>{
    it('should add two numbers', ()=> {
        const twoSum = addtion(1, 2)
        expect(twoSum).toBe(3)
    })
    // it('should add three numbers', () => {
    //     const threeSum = addtion(3, 7, 10)
    //     expect(threeSum).toBe(20)
    // })
})
// addition test