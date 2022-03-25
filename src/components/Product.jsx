function Product({name, desc, price, src}) {
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-image" src={src}/>
                <h2>{name}</h2>
                <p><i>{desc}</i></p>
                <h3>{price}</h3>
            </div>
            <button className="card-btn">VIEW PRODUCT</button>
        </div>
    )
}

export default Product;