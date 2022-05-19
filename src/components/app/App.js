import axios from "axios";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import VendorComponet from "../Footer/VendorComponet";
import Supportcomponet from "../Header/BottomHeader/Supportcomponet";
import NavigationComponet from "../Header/NavHeader/NavigationComponet";
import TopHeaderComponet from "../Header/TopHeader/TopHeaderComponet";
import CategoryComponet from "../MainContent/CategoryComponent/CategoryComponent";
import OfferComponent from "../MainContent/OfferComponet/OfferComponent";
import ProductComponet from "../MainContent/ProductComponent/ProductComponet";
import ProductDetails from "../MainContent/ProductComponent/ProductDetail";
import SubscribeComponet from "../MainContent/SubscribeComponent/SubscribeComponet";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import { ContactUs } from "../ContactUs";
import { Home } from "../Home";




function App() {


    return(     
      <Router>
      <div>
{/* <Link to='/Home'>Home</Link>
<Link to='/ContactUs'>Contact Us</Link> */}


      <TopHeaderComponet/>
      <NavigationComponet/>
      {/* <Supportcomponet></Supportcomponet> */}
      {/* <CategoryComponet></CategoryComponet> */}
      {/* <OfferComponent></OfferComponent> */}
  <ProductComponet />
     <SubscribeComponet/>
      {/* <VendorComponet></VendorComponet> */}
      <Footer/>
    </div>
   </Router>
  

    );
  

}
export default App;


