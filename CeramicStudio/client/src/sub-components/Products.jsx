import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
const Products = () => {
  const [product, setProduct] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryFlag, setCategoryFlag] = useState(false);
  //getallproduct api
  const getallproduct = async () => {
    const response = axios.get("http://localhost:8081/getAllProducts").then((res) => {
      console.log(res.data);
      setProduct(res.data);
    }).catch((error) => { console.log(error) })
  }

  // handle browse by category
  const handleBrowseByCategory = async (event) => {
    console.log("event ", event.target.innerText);
    var categoryValue = event.target.innerText;
      const response = axios.get(`http://localhost:8081/category/${categoryValue}`, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => {
        console.log(res.data)
        if(categoryValue === "All Products")
        {
          setCategoryFlag(false);
          setCategoryProducts(product);
        }
        else if(categoryValue === "Cup" || categoryValue === "Bottle" || categoryValue === "Plate")
        {
          setCategoryFlag(true);
          setCategoryProducts(res.data);
        }
        setCategoryProducts(res.data);
      }).catch((error) => { console.log(error) })
  }
  useEffect(() => {
    getallproduct();
  }, [])
  return (
    <div className='product'>
      <div className='product-inner-container'>
        <div className='filter-container'>
          <h3 className='browse-by'>Browse By</h3>
          <button onClick={handleBrowseByCategory} className='browser-category'>All Products</button>
          <button onClick={handleBrowseByCategory} className='browser-category'>Cup</button >
          <button onClick={handleBrowseByCategory} className='browser-category'>Bottle</button >
          <button onClick={handleBrowseByCategory} className='browser-category'>Plate</button>
        </div>
        <div className='product-diplay'>
          <h3 className='product-title-heading'>All Products</h3>
          {categoryFlag === true ? (
            <div className='product-card-container'>
              {categoryProducts.map((p) => (
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
          ) : (
            <div className='product-card-container'>
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
          )}
        </div>
      </div>
    </div >
  )
}

export default Products
