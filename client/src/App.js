import './App.css';
import {BrowserRouter, Route, Switch, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import DetailsNotebook from "./components/Details/DetailsNotebook";
import DetailsPhone from './components/Details/DetailsPhone';
import DetailsTablet from './components/Details/DetailsTablet';
import Login from './components/Login/Login';
import CreateUser from './components/CreateUser/CreateUser'
import Landing from './components/Landing/Landing';
import { AuthProvider } from './components/Context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <AuthProvider>

    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element = {<Landing/>} />
        
        <Route exact path = '/home' element = {
          <ProtectedRoute>
          <Home/>
          </ProtectedRoute>
        }/>
        
        <Route path="/products/notebooks/:id" element= {<DetailsNotebook/>}/>
        <Route path="/products/phones/:id" element= {<DetailsPhone/>}/>
        <Route path="/products/tablets/:id" element= {<DetailsTablet/>}/>
        <Route path="/home/login" element= {<Login/>}/>
        <Route path="/home/createuser" element= {<CreateUser/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
