import Header from "../components/Header";

import Footer from "../components/Footer";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import { useState } from "react";
import useFetch from "../useFetch";

export default function Details(){

    const {data, loading, error} = useFetch('http://localhost:3000/allProducts');

    const [quantity, setTotalQuantity] = useState(1)

    const productId = useParams();
    console.log(productId)

    const productData = data?.find((item) => item.productId === Number(productId.productId));

    console.log(productData)


    if (error) return <div className="alert alert-danger">Error in loading the data, please try again!</div>

    if (loading) return <div className="alert alert-warning">Loading...</div>
    
    return(
        <>
         <Header />

         <main className="container main-content">
         {productData && (
            <div className="row mt-5">
            <div className="col-md-3">
            <img
                src={productData.productImageUrl}
                alt={productData.productName}
                className="img-fluid rounded mt-3"
                style={{position: "sticky", top: "30px"}}
            />
            </div>

            <div className='col-md-6'>
                <p className='mb-2 fs-2'>{productData.productName}, {(productData.productDescription).slice(0,-1)
                }, {productData.
                    productQuantity
                    }</p>
                
                <hr />

                <div className='mt-3 fs-5'>Category: {productData.productCategory}</div>

                

                <div className='mt-3 fs-6'>Rating: <span><i className="bi bi-star-fill"></i></span>{(productData.productRating).toFixed(1)}</div>
                

                <div className='mt-2'><span className="text-danger">-{productData.discountPercent}% </span><sup className="ms-2 fs-6">₹</sup><span className="fs-3">{(productData.productMRP).toFixed(2)} </span></div>

                
                <div className="mt-2">
                <p>M.R.P. <span style={{ textDecoration: 'line-through' }}>₹{Math.floor(productData.productMRP + (productData.productMRP * productData.discountPercent / 100)).toFixed(2)}</span></p>
                </div>
                <hr />

            <div className="d-flex">

                <div className="d-flex align-items-start flex-column me-5">
                <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734197948/transaction_jcybsb.png" alt="transaction" style={{width: "70px", height: "70px"}} />

                <p className="text-center" style={{width: "70px", height: "30px"}}>Secure Transaction</p>
                </div>


                <div className="d-flex align-items-start flex-column me-5">
                <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734197948/delivery_bcpy6s.png" alt="delivery" style={{width: "70px", height: "70px"}} />

                <p className="text-center" style={{width: "70px", height: "30px"}}>Fast Delivery</p>
                </div>


                <div className="d-flex align-items-start flex-column me-5">
                <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734197948/ecommerce_vsilhw.png" alt="return" style={{width: "70px", height: "70px"}} />

                <p className="text-center" style={{width: "70px", height: "30px"}}>Easy Returns</p>
                </div>


                <div className="d-flex align-items-start flex-column me-5">
                <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734198915/cash-on-delivery_fgh4aa.png" alt="COD" style={{width: "70px", height: "70px"}} />

                <p className="text-center" style={{width: "70px", height: "30px"}}>COD Available</p>
                </div>

            </div>
                
            <hr />

            <div>
                <h5 className="mb-3"><strong>Details:</strong></h5>

                <div className="mb-2 d-flex">
                    <div style={{ width: "150px", fontWeight: "bold" }}>Brand:</div>
                    <div>{productData.productBrand}</div>
                </div>

                <div className="mb-2 d-flex">
                    <div style={{ width: "150px", fontWeight: "bold" }}>Item Volume:</div>
                    <div>{productData.productQuantity}</div>
                </div>

                <div className="mb-2 d-flex">
                    <div style={{ width: "150px", fontWeight: "bold" }}>Special Features:</div>
                    <div>{productData.productfeatures.join(", ")}</div>
                </div>

                <div className="mb-2 d-flex">
                    <div style={{ width: "150px", fontWeight: "bold" }}>Skin Type:</div>
                    <div>{productData.productSkinType}</div>
                </div>

                <div className="mb-2 d-flex">
                    <div style={{ width: "150px", fontWeight: "bold" }}>Item Type:</div>
                    <div>{productData.productType}</div>
                </div>

                <div className="mb-2 d-flex">
                    <div style={{ width: "150px", fontWeight: "bold" }}> Ingredients:</div>
                    <ul className="px-2">
                    {productData.productIngredients.map((ing, index) => (
                        <li key={index}>{ing}</li>
                    ))}
                    </ul>
                    
                </div>
                </div>

                
            <hr />

             <div>
                <h6><strong>About This Item</strong></h6>
                <ul>
                    {productData.aboutTheProduct.map((about, index) => (
                        <li key={index}>{about}</li>
                    ))}
                </ul>
             </div>

            </div>

            <div className="col-md-3">
                <div className="card p-0 mt-3" style={{position: "sticky", top: "30px"}}>
                <div className="card-body">
                <div className='mb-2'><sup className="fs-6">₹</sup><span className="fs-3">{(productData.productMRP * quantity).toFixed(2)} </span></div>
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

            <hr />


        <div className="my-5">

        <h4 className="mb-3">Other Products You May Like:</h4>

        <div className='row'>
        {data && (data.filter((item) => item.productType === "Hair Care").slice(5,9).map((product, index) => ( 
             
                <div className='col-md-3' key={index}>
                <div className='card p-0 shadow-sm hover-zoom' style={{height: "100%"}}>
                  <Link to={`/allProducts/${product.productId}`} className="text-decoration-none text-dark">
                  <img src={product.productImageUrl} alt={product.productName} className='card-img-top' />
                  <div className='card-body'>
                      <div className='text-center mb-2 fixed-height'><strong>{product.productName}</strong></div>
                      <div className='text-center mb-2'>{product.productCategory}</div>
                      <div className='text-center mb-2'><span><i className="bi bi-star-fill"></i></span>{(product.productRating).toFixed(1)}</div>
                      <div className='text-center mb-2'>₹<strong>{(product.productMRP).toFixed(2)} </strong><span style={{ textDecoration: 'line-through' }}>₹{Math.floor(product.productMRP + (product.productMRP * product.discountPercent / 100)).toFixed(2)}</span></div>
                    </div>
                  </Link>
                  
                    <button className='custom-btn-view text-center w-100'>Add To Cart</button>
                </div>
                </div>
              
            )))}
            </div>

        </div>
            
         </main>

         <Footer />
        </>
    )
}