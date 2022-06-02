import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [products, setProducts] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      "X-RapidAPI-Key": "7be3eeea50msh8ef01ec06ced9dap195957jsn73ca7f2ac984",
    },
  };

  useEffect(() => {
    fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.products);
        setProducts(response.products);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductComponet products={products}></ProductComponet>}></Route>
         
          <Route
            path="/products/:id"
            element={<ProductDetails products={products} />}
          />
        </Routes>

        {/* <Supportcomponet></Supportcomponet>
      <CategoryComponet></CategoryComponet> 
      <OfferComponent></OfferComponent> */}

        <ProductComponet products={products} />

        <Footer />
      </div>
    </Router>
  );
}
export default App;
