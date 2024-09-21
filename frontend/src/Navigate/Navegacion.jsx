import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { Home } from '../screens/Home';
import Contact from '../screens/Contact';
import { Users } from '../components/Users';
import { Products } from '../screens/Products';
import { Login } from '../components/Login';
import Register from '../components/Register';
import RoutesScreens from '../routes/RoutesScreens';
import Cart from '../screens/Cart';
import { Footer } from '../components/Footer';
import { PanelControl } from '../screens/PanelControl';


const Navegacion = () => {
  return (
    <Router>
        <RoutesScreens />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/panel" element={<PanelControl/>} />
          <Route path="/users" element={<Users/>} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default Navegacion
