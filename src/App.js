import logo from './logo.svg';
import './App.css';
import Sample from './components/Sample';
import Statetask from './components/Statetask';
import Stateorder from './components/Stateorder';
import Statefile from './components/Statefile';

function App() {
  return (
    <div className="App">
      {/* <Sample/> */}
      <Statetask></Statetask>
       {/* <Stateorder></Stateorder> */}
      {/* <Statefile></Statefile> */}
    </div>
  );
}

export default App;
