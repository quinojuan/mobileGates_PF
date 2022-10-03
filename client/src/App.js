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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import FormPurchase from './components/FormPurchase/FormPurchase';
import Checkout from './components/Checkout/Checkout';
import AdminPages from './components/AdminPages/AdminPages';
import AddPhone from './components/AdminPages/AddPhone';
import ManageUser from './components/AdminPages/ManageUser';
import ModifyPhone from './components/AdminPages/ModifyPhone';
import PhonesTable from './components/AdminPages/PhonesTable';
import ModifyUser from './components/AdminPages/ModifyUser'
import AllPurchases from "./components/AdminPages/AllPurchases"
import UserPanel from './components/userPanel/UserPanel';
import UserPurchases from './components/userPanel/UserPurchases';
import PurchaseDetail from "./components/userPanel/PurchaseDetail"
library.add(fab, faCheckSquare, faCoffee, fas)


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
        <Route exact path="/purchase" element= {
          <ProtectedRoute>
          <FormPurchase/>
          </ProtectedRoute>
        }/>
        <Route exact path = '/home' element = {<Home/>}/>
        <Route path="/products/:id" element= {<DetailsPhone/>}/>
        <Route path="/home/login" element= {<Login/>}/>
        <Route path="/home/createuser" element= {<CreateUser/>}/>
        <Route path="/contacto" element= {<Contact/>}/>
        <Route path="/adminpages" element= {<AdminPages/>}/>
        <Route path="/addphone" element= {<AddPhone/>}/>
        <Route path="/phonestable" element= {<PhonesTable/>}/>
        <Route path="/modifyphone/:id" element= {<ModifyPhone/>}/>
        <Route path="/manageuser" element= {<ManageUser/>}/>
        <Route path="/modifyuser/:id" element= {<ModifyUser/>}/>
        <Route path="/check" element= {<Checkout/>}/>
        <Route path="/allpurchases" element= {<AllPurchases/>}/>
        <Route path="/userpanel" element= {<UserPanel/>}/>
        <Route path= "/userpurchases" component={<UserPurchases/>}/>
        <Route path= "/userpurchase/:id" element={<PurchaseDetail/>}/>
        {/* <Route path="/products/Cart" element= {<Cart/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
