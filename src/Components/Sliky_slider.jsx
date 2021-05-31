import React from 'react';
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import DramaData  from './DramaData';
// import Detail from './Drama_detail';
// import Css from '../App.css';
import { NavLink } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';

const img1='images/NBbanar.jpg';


const Sliky_slider = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
       
      };
      
     
      
    return (
      <>
       <Sliders {...settings}>
          <div className="card_wrapper">
            <div className="card">
                <div className="card-image">
                   <NavLink to={ <img src={props.imgsrc} alt="image"/>}>
                   </NavLink>
                </div>
            </div>
          </div>

          <div className="card_wrapper">
            <div className="card">
                <div className="card-image">
                  <NavLink to="/Drama">
                    <img src={"images/movie.jpg"} alt="image"/>
                    </NavLink>
                </div>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="card">
                <div className="card-image">
                    <img src="images/movie.jpg" alt="image"/>
                </div>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="card">
                <div className="card-image">
                    <img src="images/movie.jpg" alt="image"/>
                </div>
            </div>
          </div>
          <div className="card_wrapper">
            <div className="card">
                <div className="card-image">
                    <img src="images/movie.jpg" alt="image"/>
                </div>
            </div>
          </div>
      </Sliders>
     
      </>
    );
}

export default Sliky_slider
