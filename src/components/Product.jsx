import {useState} from 'react';

function Product({name, desc, price, src, hoversrc}) {
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
    )
}

export default Product;