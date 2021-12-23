import logo from './logo.svg';
import './App.css';

function App(props) {
   console.log(props.ok + ' ' + props.false)
  return (
    <div className="App">
     {props.name} {props.age}
    </div>
  );
}

export default App;
