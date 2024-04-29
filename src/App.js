// import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Navigate 
} from "react-router-dom";
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser); 
  return (
    <Router>
      <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/products/:categories" element = {<ProductList/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/success" element={<Success/>} />
      {/* <Route path="/login" element={<Login/>} /> */}
      <Route path="/login" element={
        user ? <Navigate to = "/" replace /> : <Login/>} />

      <Route path="/register" element={
        user ? <Navigate to = "/" replace /> : <Register/>} />

        {/* <Route exact path="/products/:categories">
          <ProductList />
        </Route> */}
      </Routes>
    </Router>

  );
}

export default App;
