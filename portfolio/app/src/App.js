import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/header';
import Footers from './component/footer/footer';
import Home from './component/Pages/Home';

import {Routes, Route, useLocation } from "react-router-dom";
import Product from './component/Pages/product';
import SingleProduct from './component/Pages/singleProduct';
import Products from './component/Pages/Products';
import TotalOrder from './component/Pages/TotalOrder';
import Information from "./component/Pages/Information";
import Shipping from './component/Pages/Shipping';
import Thankyou from './component/Pages/Thankyou';

// import Cart from './component/Pages/Cart';

function App() {
  const location = useLocation();
  const isInformationRoute = location.pathname === '/information';
  const isInformationRoutes = location.pathname === '/shipping';
  const isInformationRoutess = location.pathname === '/thankyou';
  return (
    <>
   
   {!isInformationRoute && !isInformationRoutes && !isInformationRoutess && <Header />}
   {/* {!isInformationRoutes && <Header />} */}
    {/* <Header /> */}
   
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/product" element={ <Product/> } />
    <Route path="/products" element={ <Products/> } />
    <Route path="/totalorder" element={ <TotalOrder/> } />
    <Route path="/information" element={ <Information/> } />
    <Route path="/shipping" element={ <Shipping/> } />
    <Route path="/thankyou" element={ <Thankyou/> } />
 
    <Route path="/singleproduct/:id" element={ <SingleProduct/> } />
   
   
   
    </Routes>

    
    
  
    <Footers />

   
 
    </>
  );
}

export default App;
