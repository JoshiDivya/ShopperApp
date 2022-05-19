import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import BannerComponet from "../Banner/Banner";
import { Collapse } from "react-bootstrap";
import { Subcateogry } from "../../MainContent/CategoryComponent/SubCategory";





const NavigationComponet =()=>{
    const [brands, setBrands] = useState([]);
    const [navigation, setNavigation] = useState([]);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
        'X-RapidAPI-Key': '7be3eeea50msh8ef01ec06ced9dap195957jsn73ca7f2ac984'
      }
    };
  
    useEffect(() => {
      fetch('https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US', options)
      .then(response => response.json())
      .then(response =>{
          setBrands(response.brands)
          setNavigation(response.navigation)
        console.log(response.brands)
       
      })
      .catch(err => console.error(err));
    },[]);

const brand_cat = brands.map((brand,index) =>{  return  <a key={index} href="" className="nav-item nav-link">{brand.content.title}</a>})
const nav_cat = navigation.map((navigate,index) => <a key={index} href="index.html" className="nav-item nav-link active">{navigate.content.title}</a> )
  
    return(
        <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height:'65px', marginTop:'-1',padding:'0 30px'}}>
                    <h6 className="m-0">Categories</h6>
                    <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </a>
                <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                    <div className="navbar-nav w-100 overflow-hidden" style={{height:' 410px'}}>
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <a href="" className="dropdown-item">Men's Dresses</a>
                                <a href="" className="dropdown-item">Women's Dresses</a>
                                <a href="" className="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div> */}
                        {brand_cat}
                        
                       
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <button href="" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
   {nav_cat} 
  </div>
                        <div className="navbar-nav ml-auto py-0">
                            <a href="" className="nav-item nav-link">Login</a>
                            <a href="" className="nav-item nav-link">Register</a>
                        </div>
                    </div>
                </nav>
                <BannerComponet></BannerComponet>
        
            </div>
        </div>
    </div>
    );
}
export default NavigationComponet;