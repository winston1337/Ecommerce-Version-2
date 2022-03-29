import './App.css';
import Product from './components/Product';
import Header from './components/Navbar/Header'
import FooterContainer from './components/FooterText';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/> 
      <div className="cards">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<><Product 
      src="/products/beach-shirt1.jpg" alt="beach-shirt"
      hoversrc="/products/beach-shirt2.jpg" 
      name="Starfish Print Shirt" 
      desc="this design encapsulates the beauty of the coral reefs" 
      price="$500"/>
      
      <Product
      src="/products/black-dress-shirt2.jpg"
      hoversrc="/products/black-dress-shirt.jpg" 
      name="Black Dress Shirt" 
      desc="product desc" 
      price="$300"/>
      
      <Product 
      src="/products/black-jacket2.jpg"
      hoversrc="/products/black-jacket1.jpg"
      name="Black Bomber Jacket" 
      desc="product desc" 
      price="$300"/>
      
      <Product 
      src="/products/blue-blazer1.jpg"
      hoversrc="/products/blue-blazer2.jpg" 
      name="Blue Blazer" 
      desc="product desc" 
      price="$300"/>
      
      <Product 
      src="/products/bomber-jacket1.jpg"
      hoversrc="/products/bomber-jacket2.jpg" 
      name="Nappa Leather Bomber Jacket" 
      desc="product desc" 
      price="$300"/>
      
      <Product 
      src="/products/chain-blouson1.jpg"
      hoversrc="/products/chain-blouson2.jpg" 
      name="Chain Blouson" 
      desc="product desc" 
      price="$300"/>
      
      <Product 
      src="/products/gold-shirt1.jpg"
      hoversrc="/products/gold-shirt2.jpg" 
      name="Silk Gold Print Shirt" 
      desc="product desc" 
      price="$300"/>
      
      <Product 
      src="/products/gray-tshirt1.jpeg"
      hoversrc="/products/gray-tshirt2.jpeg" 
      name="Gray T-Shirt" 
      desc="product desc" 
      price="$300"/>
      
      <Product 
      src="/products/renaissance-jacket1.jpg"
      hoversrc="/products/renaissance-jacket2.jpg" 
      name="Renaissance Bomber Jacket" 
      desc="product desc" 
      price="$300"/>
      
      <Product 
      src="/products/stripe-shirt1.jpg"
      hoversrc="/products/stripe-shirt2.jpg" 
      name="Maze Print Silk Shirt" 
      desc="product desc" 
      price="$300"/>
      
      <Product 
      src="/products/white-button1.jpg"
      hoversrc="/products/white-button2.jpg"
      name="White Dress Shirt" 
      desc="product desc" 
      price="$300"/>
      
      <Product 
      src="/products/white-tshirt1.jpeg"
      hoversrc="/products/white-tshirt2.jpeg"
      name="White Stripe T-Shirt" 
      desc="product desc" 
      price="$300"/>
      </>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </div>
      </div>
      <FooterContainer/>
    </Router>

  );
}

export default App;
