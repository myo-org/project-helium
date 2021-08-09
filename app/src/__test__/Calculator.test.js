import { render, screen ,cleanup, fireEvent, getByText} from '@testing-library/react';
import {Calculator} from '../components/Calculator'
import { Numbers } from '../components/Numbers';

// cleanup the DOM after each test
afterEach (()=> {
  cleanup()
})

describe('Calculator Component', ()=> {
    it('renders the component', ()=> {
      render(<Calculator/>)
      const app = screen.getByTestId('calculator-container')
      expect(app).toBeInTheDocument()
    })

  })
describe('Calculator Display', () => {
  it.todo('should have display element to show inputs and outputs')
  it.todo('should have placeholder text')
  it.todo('should print the correct answer')
  it.todo('should print the error message')
  it.todo('should be before the number box')
})
  
describe('Calculator Number Buttons', () => {
  beforeEach(()=>{
    render(<Numbers/>)
  })
  it('should have all number buttons', ()=> {
    const box = screen.getByTestId("button-box")
    expect(box).toBeInTheDocument()
    for(let i=0; i < 10; i++){
      expect(box).toContainHTML(`<button data-testid="number-${i}" name
      ="${i}">${i}</button>`)
    }
  })
  it('should have working number buttons', async ()=> {
    for(let i=0; i < 10; i++){
      const button = screen.getByTestId(`number-${i}`)
      await fireEvent.click(button)
      expect(button).toHaveTextContent(`${i}`)
    }
  })
})

describe('Calculator Operator Buttons', () => {
  it.todo('should have "+" button')
  it.todo('should have working "+" button')
})
