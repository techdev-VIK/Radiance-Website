import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';

import { useState } from 'react';

export default function Header(){


  const[searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();


  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if(searchTerm !== ''){
      navigate(`/pages/allProducts?search=${searchTerm}`)
    }
    
  }


    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container py-2">
    <NavLink className="eagle-lake-regular" to="/">Radiance</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <div className='navbar-nav' style={{width: "70%"}}>
      <form className="w-75 ms-auto" onClick={handleSearchSubmit}>
        <div className='input-group'>
        <input className="form-control" type="search" placeholder="Please enter any product you wish to buy..." aria-label="Search" required  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <button className="custom-btn-search"  type="submit" >Search</button>
        </div>
      </form>
    </div>

    <div className='ms-auto'>
         <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/pages/favorites">
                <span className="bi bi-heart" style={{ fontSize: '1.1rem', color: "#00AFEF" }}><span className="ms-2">Favs</span></span>
                </NavLink>
            </li>
           
            <li className="nav-item">
                <NavLink className="nav-link" to="/pages/cart">
                <span className="bi bi-cart" style={{ fontSize: '1.1rem', color: "#00AFEF" }}><span className="ms-2">Cart</span></span>
                </NavLink>
            </li>
                

            <li className="nav-item">
                <NavLink className="nav-link" to="/pages/login">
                <span className="bi bi-person" style={{ fontSize: '1.1rem', color: "#00AFEF" }}><span className="ms-2">Login</span></span>
                </NavLink>
            </li>
               
        </ul>
    </div>
    </div>
    </div>
</nav>
    )
}