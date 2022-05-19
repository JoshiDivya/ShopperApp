import React, { useEffect, useState } from "react";
import { getCategoryList } from "../../app/fetchAPI";

export const Subcateogry =()=> {
    const [category, setCategory] = useState([]);
  
    useEffect(() => {
      let mounted = true;
      
      getCategoryList().then((items) => {
        if (mounted) setCategory(items);
       
      });
    },[]);
  
   const sub_cat = category.map(cat => <a href="index.html" className="nav-item nav-link active">{cat}</a> )
    return(
       <div className="navbar-nav mr-auto py-0">
   {{sub_cat} }
  </div>)
  }