import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCategoryList } from "../../app/fetchAPI";



 const CategoryComponet = () => {
  const [category, setCategory] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': Process.env.RAPIDAPI_HOST
       'X-RapidAPI-Key': Process.env.RAPIDAPI_KEY
    }
  };

  useEffect(() => {
    fetch('https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US', options)
    .then(response => response.json())
    .then(response =>{
      console.log(response)
      setCategory(response)
    })
    .catch(err => console.error(err));
  },[]);

  const catCard = category.map((cat,index) => {
      return(
          
 <div className="col-lg-4 col-md-6 pb-1">
        <div
          className="cat-item d-flex flex-column border mb-4"
          style={{ padding: "30px" }}
        >
          <p className="text-right">15 Products</p>
          <a
            href="#"
            className="cat-img position-relative overflow-hidden mb-3"
          >
            <img
              className="img-fluid"
              src="/asset/img/cat-1.jpg"
              alt=""
            ></img>
          </a>
          <h5 className="font-weight-semi-bold m-0">{cat}</h5>
        </div>
      </div> 
      )
  })
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
{catCard}
      </div>
    </div>
  );
};

export default CategoryComponet;



