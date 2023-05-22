import { Routes, Route } from 'react-router-dom';
import './App.css';
import './css/header.css'
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App;
