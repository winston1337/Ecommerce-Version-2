import React, {useState, useEffect} from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        window.fetch('/api/products')
            .then((response) => response.text())
            .then((data) => JSON.parse(data))
            .then((products) => {setProducts(products)})
            .catch((err) => {
                console.error(err)
            })
    },[])

    return (
        <> 
            <input className="searchBar" type="text" value={query} onChange={e => {
                setQuery(e.target.value)
            }}/> 
            <div className="cards">
            { products
                .filter((product) => {
                    return (
                        product.product_name.toLowerCase().includes(query.toLowerCase()) ||
                        product.product_desc.toLowerCase().includes(query.toLowerCase()) ||
                        product.price.toString().toLowerCase().includes(query.toLowerCase())
                    )
                })
                .map((product) => {
                    console.log(product)
                    return(
                        <Product 
                            src={product.image}
                            alt={product.product_name}
                            hoversrc={product.hover_image}
                            name={product.product_name}
                            desc={product.product_desc}
                            price={product.price}
                            key={product.id}
                        />
                    )
                })
            }
            </div>
        </>
    )
}

export default Products;