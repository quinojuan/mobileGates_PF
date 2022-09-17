import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import DetailsNotebook from "./components/Details/DetailsNotebook";
import DetailsPhone from './components/Details/DetailsPhone';
import DetailsTablet from './components/Details/DetailsTablet';
import Login from './components/Login/Login';
import CreateUser from './components/CreateUser/CreateUser'
import Landing from './components/Landing/Landing';
import { AuthProvider } from './components/Context/authContext';

function App() {
  return (
    <AuthProvider>

    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component = {Landing} />
        <Route exact path = '/home' component = {Home}/>
        <Route path="/products/notebooks/:id" component= {DetailsNotebook}/>
        <Route path="/products/phones/:id" component= {DetailsPhone}/>
        <Route path="/products/tablets/:id" component= {DetailsTablet}/>
        <Route path="/home/login" component= {Login}/>
        <Route path="/home/createuser" component= {CreateUser}/>
      </Switch>
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
