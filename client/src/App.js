import {  RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from "./pages/home/Home";
import Signup from "./components/home/Signup";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import ProductDetail from './pages/productDetail/ProductDetail';


const router = createBrowserRouter([{
  path: '/',
  element: <Home/>,
  errorElement: <h1 className=' flex items-center justify-center font-bold'>Sorry! The path is not defined</h1>,
},{
  path: '/productDetails',
  element: <ProductDetail/>,
},
]);  







function App() {
  return (
   <>
   <Signup/>
   <Navbar/>
<RouterProvider router={router}>
  </RouterProvider> 
 <Footer/>

   </>
  );
}

export default App;
