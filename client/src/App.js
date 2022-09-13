import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
<<<<<<< HEAD
      <h1>PG MOVILGATES</h1>
=======
      <Switch>
        <Route exact path = '/' component = {Home}/>
      </Switch>
>>>>>>> 89d44fe8c85fa8a8d52113e420c08b0f45f464d3
    </div>
    </BrowserRouter>
  );
}

export default App;
