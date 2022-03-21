import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
     <Product src="/products/beach-shirt1.jpg" name="beach shirt"/>
     <Product src="/products/beach-shirt2.jpg"/>
     <Product src="/products/black-dress-shirt.jpg"/>
     <Product src="/products/black-dress-shirt2.jpg"/>
    </div>
  );
}

export default App;
