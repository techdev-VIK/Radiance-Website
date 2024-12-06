import Header from "../components/Header";

import Footer from "../components/Footer";

import { useParams } from "react-router-dom";

import { products } from "./AllProducts";
import { useState } from "react";

export default function Details(){

    const [quantity, setTotalQuantity] = useState(1)

    const productId = useParams();
    console.log(productId)

    const productData = products?.find((item) => item.id === Number(productId.productId));

    console.log(productData)
    
    return(
        <>
         <Header />

         <main className="container main-content">
         {productData && (
            <div className="row mt-5">
            <div className="col-md-3">
            <img
                src={productData.imageUrl}
                alt={productData.name}
                className="img-fluid rounded mt-3"
            />
            </div>

            <div className='col-md-6'>
                <p className='mb-2 fs-2'>{productData.name}, {productData.description}</p>
                
                <hr />

                <div className='mt-3 fs-5'>Category: {productData.category}</div>

                

                <div className='mt-3 fs-6'>Rating: <span><i className="bi bi-star-fill"></i></span>{productData.rating}</div>
                

                <div className='mt-2'><span className="text-danger">-{(((productData.price + 26) - productData.price)/(productData.price + 26) * 100).toFixed(2)}% </span><sup className="ms-2 fs-6">$</sup><span className="fs-3">{productData.price} </span></div>

                
                <div className="mt-2">
                <p>M.R.P. <span style={{ textDecoration: 'line-through' }}>${(productData.price + 26).toFixed(2)}</span></p>
                </div>
                <hr />
            </div>

            <div className="col-md-3">
                <div className="card p-0">
                <div className="card-body">
                <div className='mb-2'><sup className="fs-6">$</sup><span className="fs-3">{productData.price * quantity} </span></div>
                <p className="text-success">In Stock</p>
                <div>
                    Quantity:
                    <select className="form-select p-1 w-50" onChange={(e) => setTotalQuantity(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    </select>
                </div>
                <p className="mt-3">Sold By: Radiance Co.</p>
                <button className='custom-btn-view-rounded text-center w-100'>Add To Cart</button>
            </div>
            </div>
            </div>
            
            
            
            </div>)}
         </main>

         <Footer />
        </>
    )
}