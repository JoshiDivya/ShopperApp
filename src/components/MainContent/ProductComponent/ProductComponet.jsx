import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faEye, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductDetails from "./ProductDetail";
import ProductImage from "./ProductImage";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";

const ProductComponet = (props) => {
  const products = props.products;
  const [state, setState] = useState({
    clicked: false,
  });

  function onViewClick(event) {
    setState({ clicked: true });
    console.log(event.target.value);
  }

  const productItem = products.map((product, index) => {
    return (
      <div key={index} className="col-4">
        <div className="card border-0 mb-4">
          <div className="card card-body product-item">
            <ProductImage
              imageUrl={`https://${product.imageUrl}`}
            ></ProductImage>
            <div className="text-truncate mb-3">{product.name}</div>
          </div>
          <div className="card card-footer d-flex justify-content-between bg-light border">
            <Link to={`products/${product.id}`}>View Details</Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row px-xl-5 pb-3">{productItem}</div>

    // <div>
    //   <div className="container-fluid pt-5">
    //     <div className="text-center mb-4">
    //       <h2 className="section-title px-5">
    //         <span className="px-2">Trandy Products</span>
    //       </h2>
    //     </div>
    //     <div className="row px-xl-5 pb-3">
    //       {products.map((product, index) => {
    //         return (
    //           <div key={index} className="col-lg-3 col-md-6 col-sm-12 pb-1">
    //             <div className="card product-item border-0 mb-4">
    //               <ProductImage
    //                 imageUrl={`https://${product.imageUrl}`}
    //               ></ProductImage>
    //               <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
    //                 <h6 className="text-truncate mb-3">{product.name}</h6>
    //                 <div className="d-flex justify-content-center">
    //                   <h6>{product.price.current.text}</h6>
    //                   <h6 className="text-muted ml-2">
    //                     <del>{product.price.current.text}</del>
    //                   </h6>
    //                 </div>
    //               </div>
    //               <div className="card-footer d-flex justify-content-between bg-light border">
    //                 <Link to={`/products/${product.id}`}
    //                   className="btn btn-sm text-dark p-0"
    //                 >
    //                   <FontAwesomeIcon
    //                     className="text-primary mr-1"
    //                     icon={faEye}
    //                   ></FontAwesomeIcon>
    //                   View Detail
    //                 </Link>

    //                 <a href="" className="btn btn-sm text-dark p-0">
    //                   <FontAwesomeIcon
    //                     className="text-primary mr-1"
    //                     icon={faShoppingCart}
    //                   ></FontAwesomeIcon>
    //                   Add To Cart
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //     <Routes>
    //     <Route path="/" element={<ProductComponet/>}></Route>
    //       <Route path="/products/:id" element={<ProductDetails products={products}/>}>
    //       </Route>
    //     </Routes>
    //   </div>
    // </div>
  );
};

export default ProductComponet;
