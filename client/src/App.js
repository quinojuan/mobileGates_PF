import './App.css';
import {BrowserRouter, Route, Switch, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import DetailsPhone from './components/Details/DetailsPhone';
import Login from './components/Login/Login';
import CreateUser from './components/CreateUser/CreateUser'
import Landing from './components/Landing/Landing';
import Cart from './components/Cart/Cart';
import { AuthProvider } from './components/Context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import {IntlProvider} from 'react-intl'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <AuthProvider>

    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element = {<Landing/>} />
        <Route exact path = '/products/Cart' element = {
          <ProtectedRoute>
          <Cart/>
          </ProtectedRoute>
        }/>
        <Route exact path = '/home' element = {<Home/>}/>
        <Route path="/products/:id" element= {<DetailsPhone/>}/>
        <Route path="/home/login" element= {<Login/>}/>
        <Route path="/home/createuser" element= {<CreateUser/>}/>
        <Route path="/contacto" element= {<Contact/>}/>
        {/* <Route path="/products/Cart" element= {<Cart/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;