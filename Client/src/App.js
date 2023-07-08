import './App.css';
import CardArea from './Card-Area';
import CardPie from './Card-Pie'
// import ApexChart from './Chart'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='chartStyle'>
           <CardArea/>
        </div>
        <div className='chartStyle'>
          <CardPie/>
        </div>
        
        
        
      </header>
    </div>
  );
}

export default App;
