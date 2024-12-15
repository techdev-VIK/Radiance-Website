
import '../App.css';

import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useState } from 'react';
import useFetch from '../useFetch';

function AllProducts() {


  const {data, loading, error} = useFetch('http://localhost:3000/allProducts');
  // console.log(data);

 

 const [category, setCategory] = useState(['All']);
 const [rating, setRating] = useState(5);
 const [price, setPrice] = useState('All');
 const [sortOption, setSortPrice] = useState('');
 

  const clearFilters = () => {
    setCategory(['All']);
    setRating(5);
    setPrice('All');
    setSortPrice('');
  }

 const categoryHandler = (e) => {
    const {checked, value} = e.target;

    if(value === "All"){
        if(checked){
            setCategory(['All'])
        }else{
            setCategory([])
        }
    }else{
        setCategory((prev) => {
            if(checked){
                return prev.filter((val) => val !== "All").concat(value);
            }else{
                return prev.filter((val) => val !== value)
            }
        })
    }
 }

//   //For categoryHandler
//   const filteredProducts = category.includes('All')? products : products.filter((product) => category.includes(product.type));


// Filter for Rating 
const handleRatingChange = (e) => {
  const getRating = e.target.value;

  setRating(getRating);
};


 // Filtering logic
const filteredProducts = data?.filter((product) => (category.includes('All') || category.includes(product.productType) ? true : category.includes(product.productType)))  // Category filter
.filter((product) => product.productRating <= rating)  // Rating filter
.sort((a,b) => b.productRating - a.productRating)
.filter((product) => {
  if (price === 'All') return true;
  if (price === 'Less than 999') return product.productMRP < 999;
  if (price === 'Between 1000 to 1999') return product.productMRP >= 1000 && product.productMRP <= 1999;
  if (price === 'Between 2000 to 2999') return product.productMRP >= 2000 && product.productMRP <= 2999;
  return product.productMRP >= 3000;
});  // Price filter



const filterAfterSorting = !sortOption ? filteredProducts : filteredProducts.sort((a,b) => {
    if(sortOption === "High"){
        return (b.productMRP - a.productMRP);
    }else{
        return (a.productMRP - b.productMRP);
    }
})


if (error) return <div className="alert alert-danger">Error in loading the data, please try again!</div>

if (loading) return <div className="alert alert-warning">Loading...</div>

  return (
    <>
      <Header />
      <main className='container main-content'>
        <div className='row mt-5'>
            <div className='col-md-3'>
            <div style={{position: "sticky", top: "30px" }}>
            
            <div className='d-flex justify-content-between my-2'>
                <h3>Filters</h3>
                <button className='btn btn-outline-info btn-sm p-1' style={{fontWeight: 500}} onClick={clearFilters}>Clear All</button>
            </div>
              
              <hr />

              <h5 className='mt-4'>Category</h5>
              <input type="checkbox" id="allProducts" value="All" onChange={categoryHandler} checked={category.includes("All")} /> <label htmlFor="allProducts">All Products</label><br />
              <input type="checkbox" id="skin" value="Skin Care" onChange={categoryHandler} checked={category.includes('Skin Care')}/> <label htmlFor="skin">Skin Care</label> <br />
              <input type="checkbox" id="hair" value="Hair Care" onChange={categoryHandler} checked={category.includes('Hair Care')}/> <label htmlFor="hair">Hair Care </label><br />
              <input type="checkbox" id="perfume" value="Perfume" onChange={categoryHandler} checked={category.includes('Perfume')}/> <label htmlFor="perfume">Perfume</label> <br />



              <h5 className='mt-4'>Price</h5>
              <input type="radio" name="productPrice" id="allPrices" value="All" onChange={(e) => setPrice(e.target.value)} checked={price == "All"}/> <label htmlFor="allPrices">All Prices</label> <br />

              <input type="radio" name="productPrice" id="lessThan999" value="Less than 999" onChange={(e) => setPrice(e.target.value)} checked={price=="Less than 999"}/> <label htmlFor="lessThan999">Less than 999</label> <br />

              <input type="radio" name="productPrice" id="between1000to1999" value="Between 1000 to 1999" onChange={(e) => setPrice(e.target.value)} checked={price == "Between 1000 to 1999"}/> <label htmlFor="between1000to1999">Between 1000 to 1999</label><br />

              <input type="radio" name="productPrice" id="between2000to2999" value="Between 2000 to 2999" onChange={(e) => setPrice(e.target.value)} checked={price == "Between 2000 to 2999"}/> <label htmlFor="between2000to2999">Between 2000 to 2999</label> <br />

              <input type="radio" name="productPrice" id="3000AndAbove" value="3000 or Above" onChange={(e) => setPrice(e.target.value)} checked={price == "3000 or Above"}/> <label htmlFor="3000AndAbove">3000 or Above</label> <br />

            

              <h5 className="mt-4">Ratings Up to: &nbsp;{rating} <i className="bi bi-star-fill"></i></h5>
                <input 
                type="range" 
                min="0" 
                max="5" 
                step="1" 
                value={rating} 
                onChange={handleRatingChange} 
                className="rating-slider" 
                />
                {/* <span>{rating}</span> */}

                <div className="rating-div">
                <span><i className="bi bi-star-fill"></i></span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                
                </div>
            </div>
            </div>

            <div className="col-md-9">

            <div className='d-flex justify-content-between my-2'>
                <h3>Products Available: {filterAfterSorting &&filterAfterSorting.length}</h3>

                <select className='form-select w-25' onChange={(e) => setSortPrice(e.target.value)}>
                    <option value="">-- Sort By Price --</option>
                    <option value="High">High to Low</option>
                    <option value="Low">Low to High</option>
                </select>
            </div>
          
            <hr />

            <div className="row">
                {filterAfterSorting &&(filterAfterSorting.map((product) => (
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={product.productId}>
                    <div className="card p-0 shadow-sm hover-zoom" style={{height: "100%"}}>
                    <Link to={`/allProducts/${product.productId}`} className="text-decoration-none text-dark">
                    <div>
                    <img
                        src={product.productImageUrl}
                        alt={product.productName}
                        className="card-img-top"
                    />
                     <div className='card-body'>
                      <div className='text-center mb-2 fixed-height'><strong>{product.productName}</strong></div>
                      <div className='text-center mb-2'>{product.productCategory}</div>
                      <div className='text-center mb-2'><span><i className="bi bi-star-fill"></i></span>{(product.productRating).toFixed(1)}</div>
                      <div className='text-center mb-2'>₹<strong>{(product.productMRP).toFixed(2)} </strong><span style={{ textDecoration: 'line-through' }}>₹{Math.floor(product.productMRP + (product.productMRP * product.discountPercent / 100)).toFixed(2)}</span></div>
                    </div>
                    </div>
                    </Link>
                    
                    <button className='custom-btn-view text-center w-100'>Add To Cart</button>
                    </div>
                </div>
                )))}
            </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AllProducts;
