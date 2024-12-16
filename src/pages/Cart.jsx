import Header from "../components/Header";

import Footer from "../components/Footer";

import useFetch from "../useFetch";

import { Link } from "react-router-dom";

function Cart(){
    const {data, loading, error} = useFetch('http://localhost:3000/allProducts');
    // console.log(data);
  
   if (error) return <div className="alert alert-danger">Error in loading the data, please try again!</div>
  
    if (loading) return <div className="alert alert-warning">Loading...</div>
  
    return (
      <>
        <Header />
        <main className='container main-content d-flex justify-content-center'>
          
          <h2 className="mt-4">
            My Cart:
          </h2>

          <div>
                <div className="card p-0 mt-3" style={{position: "sticky", top: "30px"}}>
                <div className="card-body">
                <div className='mb-2'><sup className="fs-6">₹</sup><span className="fs-3">{(data.productMRP * quantity).toFixed(2)} </span></div>
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
                    <option value="8">8</option>
                    <option value="9">9</option>
                    </select>
                </div>
                <p className="mt-3">Sold By: Radiance Co.</p>
                <button className='custom-btn-view-rounded text-center w-100'>Place Order</button>
            </div>
            </div>
          </div>


        </main>
        <Footer />
      </>
    )
}

export default Cart;