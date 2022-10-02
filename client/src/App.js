import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';
import ProductPage from './components/views/ProductPage/ProductPage';
import TopBar from './components/layout/TopBar/TopBar';
import NavBar from './components/layout/NavBar/NavBar';
import CartPage from './components/views/CartPage/CartPage';
import CheckoutPage from './components/views/CheckoutPage/CheckoutPage';
import Footer from './components/layout/Footer/Footer';

const App = () => {
  return (
    <main>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
