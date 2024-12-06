import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllProducts from './pages/AllProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/pages/allProducts",
    element: <AllProducts />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
