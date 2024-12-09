import './App.css';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import image1 from './assets/Image1.jpg';
import image2 from './assets/Image2.jpg';
import image3 from './assets/Image3.jpg';
import image4 from './assets/Image4.jpg';
import image5 from './assets/Image5.jpg';
import image6 from './assets/Image6.jpg';


  const products = [
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
      "rating": 4.7,
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
      "rating": 4.1,
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
      "category": "Colognes",
      "rating": 3.4,
      "inStock": true
    }
  ];
  

function App() {

  return (
    <>
      <Header />
      
      <main className='main-content'>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 img-fluid" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={image5} className="d-block w-100 img-fluid" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 img-fluid" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={image6} className="d-block w-100 img-fluid" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100 img-fluid" alt="image" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='container py-5'>
        <h3>Our Products</h3>
        <div className='d-flex justify-content-between align-items-center mt-5'>
          <div>
            <h4>Skin Care</h4>
            <p>Explore 100% toxin-free and safe skincare products by Radiance that are formulated with love and the goodness of natural ingredients.</p>
            
          </div>
          <Link to="/pages/allProducts" className='custom-btn-view-rounded text-center'>View All</Link>
            
        </div>
        <div className='row'>
        {products.filter((item) => item.type === "Skin Care").slice(0,4).map((product, index) => ( 
             
                <div className='col-md-3' key={index}>
                <div className='card p-0 shadow-sm hover-zoom' style={{height: "100%"}}>
                  <Link to={`/allProducts/${product.id}`} className="text-decoration-none text-dark">
                  <img src={product.imageUrl} alt={product.name} className='card-img-top' />
                  <div className='card-body'>
                      <div className='text-center mb-2 fixed-height'><strong>{product.name}</strong></div>
                      <div className='text-center mb-2'>{product.category}</div>
                      <div className='text-center mb-2'><span><i className="bi bi-star-fill"></i></span>{product.rating}</div>
                      <div className='text-center mb-2'>$<strong>{product.price} </strong><span style={{ textDecoration: 'line-through' }}>${(product.price + 26).toFixed(2)}</span></div>
                    </div>
                  </Link>
                  
                    <button className='custom-btn-view text-center w-100'>Add To Cart</button>
                </div>
                </div>
              
            ))}
            </div>


          

            <div className='d-flex justify-content-between align-items-center mt-5'>
          <div>
            <h4>Hair Care</h4>
            <p>Check Out our Radiance 100% toxin-free safe Hair products, formulated with the goodness of natural ingredients and no harmful chemicals.</p>
            
          </div>
          <Link to="/pages/allProducts" className='custom-btn-view-rounded text-center'>View All</Link>
            
        </div>
        <div className='row'>
        {products.filter((item) => item.type === "Hair Care").slice(0,4).map((product, index) => (
             
                <div className='col-md-3' key={index}>
                <div className='card p-0 shadow-sm hover-zoom'>
                <Link to={`/allProducts/${product.id}`} className="text-decoration-none text-dark">
                  <img src={product.imageUrl} alt="" className='card-img-top' />
                  <div className='card-body'>
                      <div className='text-center mb-2 fixed-height'><strong>{product.name}</strong></div>
                      <div className='text-center mb-2'>{product.category}</div>
                      <div className='text-center mb-2'><span><i className="bi bi-star-fill"></i></span>{product.rating}</div>
                      <div className='text-center mb-2'>$<strong>{product.price} </strong><span style={{ textDecoration: 'line-through' }}>${(product.price + 26).toFixed(2)}</span></div>
                    </div>
                    </Link>
                    <button className='custom-btn-view text-center w-100'>Add To Cart</button>
                </div>
                </div>
                
              
            ))}
            </div>



            <div className='d-flex justify-content-between align-items-center mt-5'>
          <div>
            <h4>Perfumes</h4>
            <p>Radiance Perfume range is the Safe Certified perfume and is inspired by both nature and you.</p>
            
          </div>
          <Link to="/pages/allProducts" className='custom-btn-view-rounded text-center'>View All</Link>
            
        </div>
        <div className='row'>
        {products.filter((item) => item.type === "Perfume").slice(0,4).map((product, index) => (
             
                <div className='col-md-3' key={index}>
                <div className='card p-0 shadow-sm hover-zoom'>
                <Link to={`/allProducts/${product.id}`} className="text-decoration-none text-dark">
                  <img src={product.imageUrl} alt="" className='card-img-top' />
                  <div className='card-body'>
                      <div className='text-center mb-2 fixed-height'><strong>{product.name}</strong></div>
                      <div className='text-center mb-2'>{product.category}</div>
                      <div className='text-center mb-2'><span><i className="bi bi-star-fill"></i></span>{product.rating}</div>
                      <div className='text-center mb-2'>$<strong>{product.price} </strong><span style={{ textDecoration: 'line-through' }}>${(product.price + 26).toFixed(2)}</span></div>
                    </div>
                    </Link>
                    <button className='custom-btn-view text-center w-100'>Add To Cart</button>
                </div>
                </div>
                
              
            ))}
            </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
