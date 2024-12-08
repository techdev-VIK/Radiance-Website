
import '../App.css';

import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useState } from 'react';
export const products = [
    // Skin Care
    {
      "id": 1,
      "type": "Skin Care",
      "name": "Hydrating Facial Moisturizer",
      "description": "A lightweight moisturizer that provides 24-hour hydration and improves skin elasticity.",
      "price": 29.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Moisturizers",
      "rating": 4.5,
      "inStock": true
    },
    {
      "id": 2,
      "type": "Skin Care",
      "name": "Gentle Foaming Cleanser",
      "description": "A gentle cleanser that removes dirt, oil, and makeup without stripping the skin's natural moisture.",
      "price": 19.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Cleansers",
      "rating": 4.7,
      "inStock": true
    },
    {
      "id": 3,
      "type": "Skin Care",
      "name": "Vitamin C Brightening Serum",
      "description": "A serum with Vitamin C to reduce dark spots, improve skin texture, and boost radiance.",
      "price": 39.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Serums",
      "rating": 4.1,
      "inStock": true
    },
    {
      "id": 4,
      "type": "Skin Care",
      "name": "Soothing Aloe Vera Gel",
      "description": "A multipurpose gel that soothes irritated skin and provides hydration.",
      "price": 14.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Gels",
      "rating": 4.6,
      "inStock": true
    },
    {
      "id": 5,
      "type": "Skin Care",
      "name": "Overnight Repair Cream",
      "description": "A rich night cream that repairs and nourishes the skin while you sleep.",
      "price": 49.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Night Care",
      "rating": 3.9,
      "inStock": false
    },
    {
      "id": 6,
      "type": "Skin Care",
      "name": "SPF 50 Sunscreen Lotion",
      "description": "A non-greasy sunscreen lotion that protects against harmful UVA and UVB rays.",
      "price": 24.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Sunscreens",
      "rating": 4.3,
      "inStock": true
    },
    // Hair Care
    {
      "id": 7,
      "type": "Hair Care",
      "name": "Argan Oil Hair Serum",
      "description": "A nourishing serum that smooths frizz, adds shine, and repairs damaged hair.",
      "price": 19.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Hair Serum",
      "rating": 4.6,
      "inStock": true
    },
    {
      "id": 8,
      "type": "Hair Care",
      "name": "Deep Conditioning Hair Mask",
      "description": "A hair mask enriched with keratin for intensive hydration and repair.",
      "price": 24.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Hair Masks",
      "rating": 2.7,
      "inStock": true
    },
    {
      "id": 9,
      "type": "Hair Care",
      "name": "Volumizing Conditioner",
      "description": "A lightweight Conditioner that absorbs oil and adds volume to flat hair.",
      "price": 24.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Conditioner",
      "rating": 4.5,
      "inStock": true
    },
    {
      "id": 10,
      "type": "Hair Care",
      "name": "Volumizing Dry Shampoo",
      "description": "A lightweight dry shampoo that absorbs oil and adds volume to flat hair.",
      "price": 14.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Dry Shampoo",
      "rating": 1.1,
      "inStock": true
    },
    // Fragrance Products
    {
      "id": 11,
      "type": "Perfume",
      "name": "Rose Vanilla Body Mist",
      "description": "A delicate body mist with notes of rose and vanilla for a refreshing fragrance.",
      "price": 19.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Body Mists",
      "rating": 4.6,
      "inStock": true
    },
    {
      "id": 12,
      "type": "Perfume",
      "name": "Lavender & Amber Eau de Parfum",
      "description": "A luxurious perfume with calming lavender and warm amber notes.",
      "price": 49.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Perfumes",
      "rating": 4.8,
      "inStock": true
    },
    {
      "id": 13,
      "type": "Perfume",
      "name": "Citrus Bergamot Cologne",
      "description": "A vibrant cologne with zesty citrus and bergamot fragrance.",
      "price": 29.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Colognes",
      "rating": 4.4,
      "inStock": true
    },
    {
      "id": 14,
      "type": "Perfume",
      "name": "Chocolate Bergamot Perfume",
      "description": "A vibrant perfume with zesty chocolate and bergamot fragrance.",
      "price": 39.99,
      "imageUrl": "https://via.placeholder.com/300X200",
      "category": "Perfume",
      "rating": 2.2,
      "inStock": true
    },
    {
        "id": 15,
        "type": "Perfume",
        "name": "Men's Clay Perfume",
        "description": "A vibrant perfume with magnificent clay fragrance.",
        "price": 39.99,
        "imageUrl": "https://via.placeholder.com/300X200",
        "category": "Perfumes",
        "rating": 3.5,
        "inStock": true
      }
  ];

function AllProducts() {

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
    const selectedRating = parseInt(e.target.value);
    setRating(selectedRating);
 }


 // Filtering logic
const filteredProducts = products
.filter((product) => (category.includes('All') || category.includes(product.type) ? true : category.includes(product.type)))  // Category filter
.filter((product) => product.rating <= rating)  // Rating filter
.sort((a,b) => b.rating - a.rating)
.filter((product) => {
  if (price === 'All') return true;
  if (price === 'Less than $15') return product.price < 15;
  if (price === 'Between $16 to $49') return product.price >= 15 && product.price <= 49;
  if (price === 'Between $50 to $99') return product.price >= 50 && product.price <= 99;
  return product.price >= 100;
});  // Price filter


const filterAfterSorting = !sortOption ? filteredProducts : filteredProducts.sort((a,b) => {
    if(sortOption === "High"){
        return (b.price - a.price);
    }else{
        return (a.price - b.price);
    }
})


  return (
    <>
      <Header />
      <main className='container main-content'>
        <div className='row mt-5'>
            <div className='col-md-3'>
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

              <input type="radio" name="productPrice" id="lessThan15" value="Less than $15" onChange={(e) => setPrice(e.target.value)} checked={price=="Less than $15"}/> <label htmlFor="lessThan15">Less than $15</label> <br />

              <input type="radio" name="productPrice" id="between16To49" value="Between $16 to $49" onChange={(e) => setPrice(e.target.value)} checked={price == "Between $16 to $49"}/> <label htmlFor="between16To49">Between $16 to $49</label><br />

              <input type="radio" name="productPrice" id="between50To99" value="Between $50 to $99" onChange={(e) => setPrice(e.target.value)} checked={price == "Between $50 to $99"}/> <label htmlFor="between50To99">Between $50 to $99</label> <br />

              <input type="radio" name="productPrice" id="100AndAbove" value="$100 or Above" onChange={(e) => setPrice(e.target.value)} checked={price == "$100 or Above"}/> <label htmlFor="100AndAbove">$100 or Above</label> <br />

            

              <h5 className="mt-4">Rating</h5>
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


            <div className="col-md-9">
            
            <div className='d-flex justify-content-between my-2'>
                <h3>Products Available: {filteredProducts.length}</h3>

                <select className='form-select w-25' onChange={(e) => setSortPrice(e.target.value)}>
                    <option value="">-- Sort By Price --</option>
                    <option value="High">High to Low</option>
                    <option value="Low">Low to High</option>
                </select>
            </div>
            

            <hr />
            <div className="row">
                {filterAfterSorting.length>0 ?(filterAfterSorting.map((product) => (
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={product.id}>
                    <div className="card p-0 shadow-sm hover-zoom" style={{height: "100%"}}>
                    <Link to={`/allProducts/${product.id}`} className="text-decoration-none text-dark">
                    <div>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="card-img-top"
                    />
                     <div className='card-body'>
                      <div className='text-center mb-2 fixed-height'><strong>{product.name}</strong></div>
                      <div className='text-center mb-2'>{product.category}</div>
                      <div className='text-center mb-2'><span><i className="bi bi-star-fill"></i></span>{product.rating}</div>
                      <div className='text-center mb-2'>$<strong>{product.price} </strong><span style={{ textDecoration: 'line-through' }}>${(product.price + 26).toFixed(2)}</span></div>
                    </div>
                    </div>
                    </Link>
                    
                    <button className='custom-btn-view text-center w-100'>Add To Cart</button>
                    </div>
                </div>
                ))): <div className='alert alert-info'>Sorry, No products available in stock currently. Please check again later...</div>}
            </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AllProducts;
