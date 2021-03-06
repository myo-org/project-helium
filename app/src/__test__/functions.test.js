// const {sum} = require('../../functions/index')
import {sum} from '../../functions/index'
describe('Addition Test', ()=> {
    it('should add two numbers', ()=> {
        const twoSum = sum(1,2)
        expect(twoSum).toEqual(3)
    })
    it('should add three numbers', () => {
        const threeSum = sum (3,7,10)
        expect(threeSum).toEqual(20)
    })
    it('handle multiple numbers', ()=> {
        const multipleSum = sum (30,40,1231,4423,6343)
        expect(multipleSum).toEqual(12067)
    })
    it.todo('should add two negative numbers')
    it.todo('should add decimal numbers of 5 precisions')
    it.todo('Should handle complex inputs')
})
describe('Subtraction Test', ()=> {
    it.todo('should subtract two numbers')
})