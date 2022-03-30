import React, {useState} from "react";
import axios from "axios";
import '../App.css';

export default class Products extends React.Component {
  state = {
    originalProductData: [],
    productData: [],
    type: "Reset",
  };

  async componentDidMount() {
    await axios.get("/api/products").then((res) => {
      //when deploying change url to '/api/Products'
      this.setState({ productData: res.data, originalProductData: res.data });
      //if heroku fails type 'heroku restart' in terminal
    });
  }

  productFilter(type) {
    if (this.originalProductData != null) {
      return () => {
        this.setState({ type, productData: this.originalProductData });
      };
    }
    return () => {
      this.setState({ type });
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    console.log("holi");
    let filteredProducts = this.state.productData.filter(
      (product) => 100 > product.price
    );
    this.setState({ productData: filteredProducts });
  }

  render() {
    return (
      <>
      
        <div className="filter">
          <p className="cat-tag">Sort By Category: </p>
          <button onClick={this.productFilter("jacket")}>Jacket</button>
          <button onClick={this.productFilter("suit")}>Suit</button>
          <button onClick={this.productFilter("Reset")}>Reset</button>
        </div>
        <div className="filter">
          <p className="price-tag">Sort By Price: </p>
          <button onClick={this.productFilter(1200)}>{`$1200 <`}</button>
          <button onClick={this.productFilter(1000)}>{`$1000 <`}</button>
          <button onClick={this.productFilter(900)}>{`$900 >`}</button>
          <button onClick={this.productFilter(600)}>{`$600 >`}</button>
          <button onClick={this.productFilter(500)}>{`$500 >`}</button>
          <button onClick={this.productFilter(300)}>{`$300 >`}</button>
        </div>
        
        <div className="product-grid">
          {this.state.productData
            .filter((card) => {
              if (this.state.type === "Reset") {
                return true;
              } else if (this.state.type === 1200) {
                return this.state.type < card.price;
              } else if (Number.isInteger(this.state.type)) {
                return this.state.type > card.price;
              } else {
                return this.state.type === card.part_type;
              }
            })
            .map(({name, desc, price, src, hoversrc, alt}) => {
                const [hover, setHover] = useState(false);
              return (
                <div className="card" onMouseOver={()=> {
                    setHover(true);
                }} onMouseOut={() =>{
                    setHover(false);
                }}>
                    <div className="card-body">
                        <img className="card-image" src={hover ? hoversrc : src} alt="shirt"/>
                        <h2>{name}</h2>
                        <p><i>{desc}</i></p>
                        <h3>{price}</h3>
                    </div>
                    <button className="card-btn">VIEW PRODUCT</button>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}