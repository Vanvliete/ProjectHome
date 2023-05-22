import { Routes, Route } from 'react-router-dom';
import './App.css';
import './css/header.css'
import Home from './components/Home';
import Background from './components/Background/Background';
import Grid from './components/Grid/Grid';

import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <Background />
    <Grid />
    
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App;
