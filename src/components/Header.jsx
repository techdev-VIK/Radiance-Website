import { NavLink } from 'react-router-dom';

export default function Header(){
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container py-2">
    <NavLink className="eagle-lake-regular" to="/">Radiance</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <div className='navbar-nav' style={{width: "70%"}}>
      <form className="w-75 ms-auto" role="search">
        <div className='input-group'>
        <input className="form-control" type="search" placeholder="Please enter any product you wish to buy..." aria-label="Search" />
        <button className="custom-btn"  type="submit">Search</button>
        </div>
      </form>
    </div>

    <div className='ms-auto'>
         <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/favorites">
                <span className="bi bi-heart" style={{ fontSize: '1.1rem', color: "#00AFEF" }}><span className="ms-2">Favs</span></span>
                </NavLink>
            </li>
           
            <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                <span className="bi bi-cart" style={{ fontSize: '1.1rem', color: "#00AFEF" }}><span className="ms-2">Cart</span></span>
                </NavLink>
            </li>
                

            <li className="nav-item">
                <NavLink className="nav-link" to="/login">
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