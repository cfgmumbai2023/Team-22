import './App.css';
import Card from './Card.js';
import PieChart from './PieChart';

// import ApexChart from './Chart'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='chartStyle'>
           <Card/>
        </div>
        <div>
          <PieChart/>
        </div>
        
        
        
      </header>
    </div>
  );
}

export default App;
