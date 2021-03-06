import React from "react";
import ProductDescription from "./ProductDescription";
import { useParams } from "react-router-dom";
import ProductImage from "./ProductImage";

export default function ProductDetails(props) {
  const { id } = useParams();
  const allProducts = props.products;

  //const thisProduct = allProducts.find(prod => prod.id === id)

  const thisProduct = allProducts.find((element) => {
    if (element.id === parseInt(id)) {
      return element;
    }

    return null;
  });
  console.log(thisProduct);
  return (
    <div className="container-fluid py-5">
      <div className="row px-xl-5">
        <div className="col-lg-5 pb-5">
          <div
            id="product-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner border">
              <div className="carousel-item active">
                <ProductImage
                  imageUrl={`https://${thisProduct.imageUrl}`}
                ></ProductImage>
              </div>
              <div className="carousel-item">
                <ProductImage
                  imageUrl={`https://${thisProduct.imageUrl}`}
                ></ProductImage>
              </div>
              <div className="carousel-item">
                <ProductImage
                  imageUrl={`https://${thisProduct.imageUrl}`}
                ></ProductImage>
              </div>
              <div className="carousel-item">
                <ProductImage
                  imageUrl={`https://${thisProduct.imageUrl}`}
                ></ProductImage>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#product-carousel"
              data-slide="prev"
            >
              <i className="fa fa-2x fa-angle-left text-dark"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#product-carousel"
              data-slide="next"
            >
              <i className="fa fa-2x fa-angle-right text-dark"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-7 pb-5">
          <h3 className="font-weight-semi-bold">{thisProduct.name}</h3>
          <div className="d-flex mb-3">
            <div className="text-primary mr-2">
              <small className="fas fa-star"></small>
              <small className="fas fa-star"></small>
              <small className="fas fa-star"></small>
              <small className="fas fa-star-half-alt"></small>
              <small className="far fa-star"></small>
            </div>
            <small className="pt-1">(50 Reviews)</small>
          </div>
          <h3 className="font-weight-semi-bold mb-4">
            {thisProduct.price.current.text}
          </h3>
          <p className="mb-4">
            Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
            diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem
            magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore
            stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum
            diam et rebum kasd rebum.
          </p>
          <div className="d-flex mb-3">
            <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-1"
                  name="size"
                ></input>
                <label className="custom-control-label" for="size-1">
                  XS
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-2"
                  name="size"
                ></input>
                <label className="custom-control-label" for="size-2">
                  S
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-3"
                  name="size"
                ></input>
                <label className="custom-control-label" for="size-3">
                  M
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-4"
                  name="size"
                ></input>
                <label className="custom-control-label" for="size-4">
                  L
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="size-5"
                  name="size"
                ></input>
                <label className="custom-control-label" for="size-5">
                  XL
                </label>
              </div>
            </form>
          </div>
          <div className="d-flex mb-4">
            <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
            <form>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-1"
                  name="color"
                ></input>
                <label className="custom-control-label" for="color-1">
                  Black
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-2"
                  name="color"
                ></input>
                <label className="custom-control-label" for="color-2">
                  White
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-3"
                  name="color"
                ></input>
                <label className="custom-control-label" for="color-3">
                  Red
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-4"
                  name="color"
                ></input>
                <label className="custom-control-label" for="color-4">
                  Blue
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="color-5"
                  name="color"
                ></input>
                <label className="custom-control-label" for="color-5">
                  Green
                </label>
              </div>
            </form>
          </div>
          <div className="d-flex align-items-center mb-4 pt-2">
            <div
              className="input-group quantity mr-3"
              style={{ width: "130px" }}
            >
              <div className="input-group-btn">
                <button className="btn btn-primary btn-minus">
                  <i className="fa fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-secondary text-center"
                value="1"
              ></input>
              <div className="input-group-btn">
                <button className="btn btn-primary btn-plus">
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <button className="btn btn-primary px-3">
              <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
            </button>
          </div>
          <div className="d-flex pt-2">
            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
            <div className="d-inline-flex">
              <a className="text-dark px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <ProductDescription />
      </div>
    </div>
  );
}
