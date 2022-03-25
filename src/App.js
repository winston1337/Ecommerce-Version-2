import './App.css';
import Product from './components/Product';
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div><Header/></div>
      <div><Footer/></div>
      <div className="cards">
     <Product 
      src="/products/beach-shirt1.jpg" 
      name="beach shirt" 
      desc="beautiful design reminiscent of the nature in the amazon rainforest" 
      price="$500"/>
     <Product
      src="/products/black-dress-shirt.jpg" 
      name="black dress shirt" 
      desc="product desc" 
      price="$300"/>
     <Product 
      src="/products/black-jacket1.jpg" 
      name="black jacket" 
      desc="product desc" 
      price="$300"/>
     <Product 
      src="/products/blue-blazer1.jpg" 
      name="blue blazer" 
      desc="product desc" 
      price="$300"/>
     <Product 
      src="/products/bomber-jacket1.jpg" 
      name="bomber jacket" 
      desc="product desc" 
      price="$300"/>
     <Product 
      src="/products/chain-blouson1.jpg" 
      name="chain blouson" 
      desc="product desc" 
      price="$300"/>
     <Product 
      src="/products/gold-shirt1.jpg" 
      name="gold shirt" 
      desc="product desc" 
      price="$300"/>
     <Product 
      src="/products/gray-tshirt1.jpeg" 
      name="gray t shirt" 
      desc="product desc" 
      price="$300"/>
     <Product 
      src="/products/renaissance-jacket1.jpg" 
      name="renaissance jacket" 
      desc="product desc" 
      price="$300"/>
     <Product 
      src="/products/stripe-shirt1.jpg" 
      name="stripe shirt" 
      desc="product desc" 
      price="$300"/>
     <Product 
      src="/products/white-button1.jpg" 
      name="white button-up shirt" 
      desc="product desc" 
      price="$300"/>
     <Product 
      src="/products/white-tshirt1.jpeg" 
      name="white t shirt" 
      desc="product desc" 
      price="$300"/>
    </div>
    </div>
  );
}

export default App;
