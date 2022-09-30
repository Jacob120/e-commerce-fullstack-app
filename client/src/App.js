import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';
import ProductPage from './components/views/ProductPage/ProductPage';
import TopBar from './components/layout/TopBar/TopBar';
import NavBar from './components/layout/NavBar/NavBar';

const App = () => {
  return (
    <main>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </main>
  );
};

export default App;
