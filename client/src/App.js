import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home/Home';
import Container from 'react-bootstrap/Container';
import { About } from './components/views/About/About';

const App = () => {
  return (
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
