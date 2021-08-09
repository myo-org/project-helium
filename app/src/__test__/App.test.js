import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

// cleanup the DOM after each test
afterEach (()=> {
  cleanup()
})

describe('Main component', ()=> {

  test('enders the component in the DOM', () => {
    render(<App />);
    const app = screen.getByTestId('calculator-container')
    
  })
  
  test.todo('should change the title to home')
})
