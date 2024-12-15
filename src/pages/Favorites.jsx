
import '../App.css';

import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useFetch from '../useFetch';



function Favorites() {

  const {data, loading, error} = useFetch('http://localhost:3000/allProducts');
  // console.log(data);

 if (error) return <div className="alert alert-danger">Error in loading the data, please try again!</div>

  if (loading) return <div className="alert alert-warning">Loading...</div>

  return (
    <>
      <Header />
      <main className='container main-content'>
        <div className='row mt-5'>

            <div className="col-md-9">

                <h3>My Favorites:</h3>
          
            <hr />

            <div className="row">
                {data && data.length > 0 ?(data.filter((product) => product.productRating > 4).map((product) => (
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
                ))): (<div className='alert alert-danger'>No Products Available Currently, Please Check Later...</div>)}
            </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Favorites;
