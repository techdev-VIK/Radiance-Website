import './App.css';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import useFetch from './useFetch';



function App() {

  return (
    <>
      <Header />
      
      <HomePage />

      <Footer />
    </>
  )
}

export default App;
