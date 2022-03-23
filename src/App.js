import './App.css';
import Product from './components/Product';
import Header from './components/Navbar/Header'

function App() {
  return (
    <div className="App">
      <div><Header/></div>
     <Product src="/products/beach-shirt1.jpg" name="beach shirt"/><p>$300</p>
     <Product src="/products/beach-shirt2.jpg" name=""/>
     <Product src="/products/black-dress-shirt.jpg" name="black dress shirt"/><p>$300</p>
     <Product src="/products/black-dress-shirt2.jpg" name=""/>
     <Product src="/products/black-jacket1.jpg" name="black jacket"/><p>$300</p>
     <Product src="/products/black-jacket2.jpg" name=""/>
     <Product src="/products/blue-blazer1.jpg" name="blue blazer"/><p>$300</p>
     <Product src="/products/blue-blazer2.jpg" name=""/>
     <Product src="/products/bomber-jacket1.jpg" name="bomber jacket"/><p>$300</p>
     <Product src="/products/bomber-jacket2.jpg" name=""/>
     <Product src="/products/chain-blouson1.jpg" name="chain blouson"/><p>$300</p>
     <Product src="/products/chain-blouson2.jpg" name=""/>
     <Product src="/products/gold-shirt1.jpg" name="gold shirt"/><p>$300</p>
     <Product src="/products/gold-shirt2.jpg" name=""/>
     <Product src="/products/gray-tshirt1.jpeg" name="gray t shirt"/><p>$300</p>
     <Product src="/products/gray-tshirt2.jpeg" name=""/>
     <Product src="/products/renaissance-jacket1.jpg" name="renaissance jacket"/><p>$300</p>
     <Product src="/products/renaissance-jacket2.jpg" name=""/>
     <Product src="/products/stripe-shirt1.jpg" name="stripe shirt"/><p>$300</p>
     <Product src="/products/stripe-shirt2.jpg" name=""/>
     <Product src="/products/white-button1.jpg" name="white button-up shirt"/><p>$300</p>
     <Product src="/products/white-button2.jpg" name=""/>
     <Product src="/products/white-tshirt1.jpeg" name="white t shirt"/><p>$300</p>
     <Product src="/products/white-tshirt2.jpeg" name=""/>
    </div>
  );
}

export default App;
