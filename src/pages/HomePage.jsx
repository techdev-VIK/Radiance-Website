import '../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import useFetch from '../useFetch';
import FavsHeart from '../components/FavsHeart';


function HomePage() {

  const {data, loading, error} = useFetch('http://localhost:3000/allProducts');

  // console.log(data);


  if (error) return <div className="alert alert-danger">Error in loading the data, please try again!</div>

  if (loading) return <div className="alert alert-warning">Loading...</div>
 


  return (
    <>
      
      <main className='main-content'> 

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"  >
        <div className="carousel-inner" style={{maxHeight: "500px", objectFit: "cover"}}>

        <div className="carousel-item active" >
          <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734192117/Banner3_eqhdeh.jpg" className="d-block w-100 h-25" alt="image" />
          </div>

          <div className="carousel-item ">
          <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734192117/Banner1_f8igxx.jpg" className="d-block w-100 h-25" alt="image" />
          </div>

          <div className="carousel-item">
          <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/c_crop,ar_16:9/v1734192106/Banner2_wom2mj.jpg" className="d-block w-100 h-25" alt="image" />
          </div>

          <div className="carousel-item">
          <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734192115/Banner4_pncyue.jpg" className="d-block w-100 h-25" alt="image" />
          </div>

          
          <div className="carousel-item">
          <img src="https://res.cloudinary.com/dcvvdfif9/image/upload/v1734192126/Banner5_lhgmm9.jpg" className="d-block w-100 h-25" alt="image" />
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


      <div className='container py-4'>
        <h3>Our Products</h3>
        <div className='d-flex justify-content-between align-items-center mt-5'>
          <div>
            <h4>Skin Care</h4>
            <p>Explore 100% toxin-free and safe skincare products by Radiance that are formulated with love and the goodness of natural ingredients.</p>
            
          </div>
          <Link to="/pages/allProducts" className='custom-btn-view-rounded text-center'>View All</Link>
            
        </div>
        <div className='row'>
        {data && (data.filter((item) => item.productType === "Skin Care").slice(4,8).map((product, index) => ( 
             
                <div className='col-md-3' key={index}>
                <div className='card p-0 shadow-sm hover-zoom' style={{height: "100%"}}>
                  <Link to={`/allProducts/${product.productId}`} className="text-decoration-none text-dark">
                  <img src={product.productImageUrl} alt={product.productName} className='card-img-top' />
                  <div className='card-body'>
                      <div className='text-center mb-2 fixed-height'><strong>{product.productName}</strong></div>
                      <div className='text-center mb-2'>{product.productCategory}</div>
                      <div className='text-center mb-2'><span><i className="bi bi-star-fill text-warning"></i></span>{(product.productRating).toFixed(1)}</div>
                      <div className='text-center mb-2'><strong className='text-success'>₹{(product.productMRP).toFixed(2)} </strong><span className='text-danger' style={{ textDecoration: 'line-through' }}>₹{Math.floor(product.productMRP + (product.productMRP * product.discountPercent / 100)).toFixed(2)}</span></div>
                    </div>
                  </Link>
                  <FavsHeart />
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
                      <div className='text-center mb-2'><span><i className="bi bi-star-fill text-warning"></i></span>{(product.productRating).toFixed(1)}</div>
                      <div className='text-center mb-2'><strong className='text-success'>₹{(product.productMRP).toFixed(2)} </strong><span className='text-danger' style={{ textDecoration: 'line-through' }}>₹{Math.floor(product.productMRP + (product.productMRP * product.discountPercent / 100)).toFixed(2)}</span></div>
                    </div>
                    </Link>
                    <FavsHeart />
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
                      <div className='text-center mb-2'><span><i className="bi bi-star-fill text-warning"></i></span>{(product.productRating).toFixed(1)}</div>
                      <div className='text-center mb-2'><strong className='text-success'>₹{(product.productMRP).toFixed(2)} </strong><span className='text-danger' style={{ textDecoration: 'line-through' }}>₹{Math.floor(product.productMRP + (product.productMRP * product.discountPercent / 100)).toFixed(2)}</span></div>
                    </div>
                    </Link>
                    <FavsHeart />
                    <button className='custom-btn-view text-center w-100'>Add To Cart</button>
                </div>
                </div>
                
              
            )))}
            </div>

        </div>
      </main>

    </>
  )
}

export default HomePage;
