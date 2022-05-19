import React from "react";

export default function ProductImage(props){
    return (

        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
        <img key={props.key}
          className="img-fluid w-h-auto"
          src={props.imageUrl}
          alt=""
        ></img>
      </div>

    )
}