import { BrowserRoute, Routes, Route } from 'react-router-dom';
import Home from './components/home/Homepage';
import Header from './components/layout/Header';
import Calculator from './components/calculator/Calculator';
import Quotes from './components/quotes/showQuotes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRoute>
        <Routes>
          <Route>
            <Home />
          </Route>
          <Route>
            <Calculator />
          </Route>
          <Route>
            <Quotes />
          </Route>
        </Routes>
      </BrowserRoute>
    </div>
  );
}

export default App;
