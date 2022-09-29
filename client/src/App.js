import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home/Home';
import { About } from './components/views/About/About';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
      </Routes>
    </main>
  );
};

export default App;
