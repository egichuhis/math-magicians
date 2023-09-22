import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Homepage';
import Header from './components/layout/Header';
import Calculator from './components/calculator/Calculator';
import Quote from './components/quote/showQuote';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
