import './App.css';
import Greet from './componemts/Title'
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <Greet name=" Ahmedabad'" >+</Greet>
      <Greet name=" Vadodara's" ></Greet>
      <Greet name=" Puna's" ></Greet>
      <Home name=" Ahmedabad"/>
      <Home name=" Vadodara"/>
      <Home name=" Puna"/>
    </div>
  );
}

export default App;
