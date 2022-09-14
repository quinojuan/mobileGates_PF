import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import DetailsNotebook from "./components/Details/DetailsNotebook";
import DetailsPhone from './components/Details/DetailsPhone';
import DetailsTablet from './components/Details/DetailsTablet';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/home' component = {Home}/>
        <Route path="/products/notebooks/:id" component= {DetailsNotebook}/>
        <Route path="/products/phones/:id" component= {DetailsPhone}/>
        <Route path="/products/tablets/:id" component= {DetailsTablet}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
