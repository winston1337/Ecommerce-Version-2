import './App.css';
import Header from './components/Navbar/Header'
import FooterContainer from './components/FooterText';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import { sliderData } from './components/SliderData';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/> 
      <Routes>
        <Route path="/" element={<Home slides={sliderData}/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </div>
      <FooterContainer/>
    </Router>

  );
}

export default App;