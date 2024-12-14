import './App.css';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import useFetch from './useFetch';


function App() {
  const {data, loading, error} = useFetch('http://localhost:3000/allProducts');

  console.log(data);
  if (error) return <p>Error in loading the data, please try again!</p>

  if (loading) return <p>Loading...</p>
 
  // const filterBySearch = searchQuery ? data?.filter((product) => product.productName.toLowerCase().includes(searchQuery.toLowerCase())) : data;



  return (
    <>
      <Header />
      
      <main className='main-content'>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734166463/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_k1ngnv.jpg" className="d-block w-100 img-fluid" alt="image" />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734157377/aromatic-elements-encircle-cobalt-bottle-with-droplets-accenting-scene_mikoa9.jpg" className="d-block w-100 img-fluid" alt="image" />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734166472/beauty-cosmetics-product-with-soft-pink-tones_f5hqk7.jpg" className="d-block w-100 img-fluid" alt="image" />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734166466/make-up-concept-with-serum-bottles_pebxsz.jpg" className="d-block w-100 img-fluid" alt="image" />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734166472/3d-rendering-personal-care-products-fondant-pink-2_waua6u.jpg" className="d-block w-100 img-fluid" alt="image" />
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
        {data && (data.filter((item) => item.productType === "Skin Care").slice(0,4).map((product, index) => ( 
             
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


          

            <div className='d-flex justify-content-between align-items-center mt-5'>
          <div>
            <h4>Hair Care</h4>
            <p>Check Out our Radiance 100% toxin-free safe Hair products, formulated with the goodness of natural ingredients and no harmful chemicals.</p>
            
          </div>
          <Link to="/pages/allProducts" className='custom-btn-view-rounded text-center'>View All</Link>
            
        </div>
        <div className='row'>
        {data && (data.filter((item) => item.productType === "Hair Care").slice(0,4).map((product, index) => (
             
                <div className='col-md-3' key={index}>
                <div className='card p-0 shadow-sm hover-zoom'>
                <Link to={`/allProducts/${product.productId}`} className="text-decoration-none text-dark">
                  <img src={product.productImageUrl} alt="" className='card-img-top' />
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



            <div className='d-flex justify-content-between align-items-center mt-5'>
          <div>
            <h4>Perfumes</h4>
            <p>Radiance Perfume range is the Safe Certified perfume and is inspired by both nature and you.</p>
            
          </div>
          <Link to="/pages/allProducts" className='custom-btn-view-rounded text-center'>View All</Link>
            
        </div>
        <div className='row'>
        {data && (data.filter((item) => item.productType === "Perfume").slice(0,4).map((product, index) => (
             
                <div className='col-md-3' key={index}>
                <div className='card p-0 shadow-sm hover-zoom'>
                <Link to={`/allProducts/${product.productId}`} className="text-decoration-none text-dark">
                  <img src={product.productImageUrl} alt="" className='card-img-top' />
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

export default App;
