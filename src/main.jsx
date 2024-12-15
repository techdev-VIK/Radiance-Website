import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllProducts from './pages/AllProducts.jsx';
import Details from './pages/Details.jsx';
import Favorites from './pages/Favorites.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/pages/allProducts",
    element: <AllProducts />
  },
  {
    path: "/pages/favorites",
    element: <Favorites />
  },
  {
    path: "/allProducts/:productId",
    element: <Details />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
