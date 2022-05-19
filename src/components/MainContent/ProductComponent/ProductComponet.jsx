import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faEye, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductDetails from "./ProductDetail";
import ProductImage from "./ProductImage";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";

const ProductComponet = () => {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({
    clicked:false,
  })

  function onViewClick(event){
    setState({clicked:true});
console.log(event.target.value);

  }
console.log(state.clicked);
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
   
      <div>
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">Trandy Products</span>
            </h2>
          </div>
          <div className="row px-xl-5 pb-3">
            {products.map((product, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <ProductImage
                      imageUrl={`https://${product.imageUrl}`}
                    ></ProductImage>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">{product.name}</h6>
                      <div className="d-flex justify-content-center">
                        <h6>{product.price.current.text}</h6>
                        <h6 className="text-muted ml-2">
                          <del>{product.price.current.text}</del>
                        </h6>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                      <Link to={`/products/${product.id}`}
                        className="btn btn-sm text-dark p-0"
                      >
                        <FontAwesomeIcon
                          className="text-primary mr-1"
                          icon={faEye}
                        ></FontAwesomeIcon>
                        View Detail
                      </Link>
                     
                      <a href="" className="btn btn-sm text-dark p-0">
                        <FontAwesomeIcon
                          className="text-primary mr-1"
                          icon={faShoppingCart}
                        ></FontAwesomeIcon>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Routes>
          <Route path="/" element={<ProductComponet/>}></Route>
            <Route path="/products/:id" element={<ProductDetails products={products}/>}>
            </Route>
          </Routes>
        </div>
      </div>
   
  );
};

export default ProductComponet;
