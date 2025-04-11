import React, { useState, useEffect } from "react";
import reference from "./images/referenceImg.png";
import "./styles.css";

const ProductList = () => {
  // useState: Para almacenar la lista de productos
  const [products, setProducts] = useState([]);

  // useEffect: Para simular la carga de productos desde una API
  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Acetaminophen Pills", price: 12.0 },
        { id: 2, name: "Throat Lozenges Syrup", price: 12.0 },
        { id: 3, name: "Multivitamin B6+", price: 12.0 },
        { id: 4, name: "Ibuprofen 400mg", price: 15.0 },
        { id: 5, name: "Cough Relief Tea", price: 9.5 },
        { id: 6, name: "Vitamin C Chewables", price: 8.0 },
        { id: 7, name: "Allergy Relief Tablets", price: 10.0 },
        { id: 8, name: "Nasal Decongestant Spray", price: 11.0 },
        { id: 9, name: "Herbal Sleep Aid", price: 14.0 },
        { id: 10, name: "Probiotic Capsules", price: 13.5 },
        { id: 11, name: "Electrolyte Drink Mix", price: 6.0 },
        { id: 12, name: "Eye Drops for Dry Eyes", price: 10.0 },
      ]);
    }, 400);
  }, []);
  

  return (
    <div className='container'>
      <div className='title'>
        <div className='title-order'>
          <div className='featured-section'> 
            Featured 
          </div>
          <div>
            <div className='title-pharmacy'> 
              The Best Products
            </div>
            <p className="top-text">Welcome to our pharmacy! Explore a curated selection of trusted medications and health supplements to support your well-being.</p>
          </div>
        </div>
        <div className="circle">All products</div>
      </div>

      <div className="product-cards">
        {
          // map: Para renderizar cada producto
          products.map((product) => (
            <>
              <div key={product.id} className="product-card">
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => alert(`Agregado ${product.name}`)}
                  className="button"
                >
                  Agregar
                </button>
              </div>
            </>
          ))
        }
      </div>
      <div style={{ fontSize: "30px" }} className="reference">
        Reference image:
      </div>
      <img src={reference} alt="Reference" className="reference-img" />
    </div>
  );
};

export default ProductList;
