import logo from './logo.svg';
import './App.css';
import { Calculator } from './components/Calculator';

function App() {
  return (
    <div className="App" data-testid="main-component">
      <Calculator/>
    </div>
  );
}

export default App;
