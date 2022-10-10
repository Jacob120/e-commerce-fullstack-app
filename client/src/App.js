import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home/Home';
import ProductPage from './components/views/ProductPage/ProductPage';
import TopBar from './components/layout/TopBar/TopBar';
import NavBar from './components/layout/NavBar/NavBar';
import CartPage from './components/views/CartPage/CartPage';
import CheckoutPage from './components/views/CheckoutPage/CheckoutPage';
import Footer from './components/layout/Footer/Footer';
import Login from './components/views/Login/Login';
import Logout from './components/views/Logout/Logout';
import Register from './components/views/Register/Register';
import { NotFound } from './components/views/NotFound/NotFound';
import OrderSummary from './components/views/OrderSummary/OrderSummary';

const App = () => {
  return (
    <main>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/summary" element={<OrderSummary />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
