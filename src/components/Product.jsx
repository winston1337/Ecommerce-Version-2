function Product(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-image" src={props.src}/>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <h3>{props.price}</h3>
            </div>
            <button className="card-btn">View Product</button>
        </div>
    )
}

export default Product;