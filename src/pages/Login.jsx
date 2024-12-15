import Header from "../components/Header";

import Footer from "../components/Footer";

function Login(){

    return(
        <>
        <Header />
        <main className='container main-content'>

        <div className="d-flex justify-content-center mt-5">
          <div className="card" style={{border: "2px solid #00AFEF"}}>
            <div className="card-body">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" className="form-control" style={{border: "2px solid #00AFEF"}} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" className="form-control" style={{border: "2px solid #00AFEF"}}/>
            </div>
          </div>
        </div>
        </main>
        
        <Footer />
        </>
    )
}

export default Login;