import React, { useEffect, useState } from 'react'
import "../components/styles.css"
import axios from "axios"
const ProductCollection = () => {
    const [product, setProduct] = useState([]);
    //getallproduct api
    const getallproduct = async () => {
        const response = axios.get("http://localhost:8081/getAllProducts").then((res) => {
            console.log(res.data);
            setProduct(res.data);
        }).catch((error) => { console.log(error) })
    }

    useEffect(() => {
        getallproduct();
    }, [])
    return (
        <div className='product-collection'>
            <div className='product-container'>
                {product.map((p) => (
                    <div className='product-card' key={p.id}>
                        <div className='product-image'>
                            <img className='p-image' src={`../src/images/${p.imageurl}.webp`} alt='{p.productname}' />
                        </div>
                        <div className='product-heading'>
                            <p className='product-title'>{p.productname}</p>
                            <p className='product-price'>${p.price}.00</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ProductCollection
