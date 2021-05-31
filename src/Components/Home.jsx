import React from 'react';
import Slider from './Slider';
import Sliky_slider from './Sliky_slider';



const Home = () => {
    return (
        <div>
    <Slider/>
    <div className="container mt-5 carousel">
      <h2 className="heading-style mb-5"><span>DRAMA</span></h2>
    <Sliky_slider/>
    </div>   
    <div className="container mt-5 carousel">
      <h2 className="heading-style mb-5"><span>TELEFILMS</span></h2>
    <Sliky_slider/>
    </div>
    <div className="container mt-5 carousel">
      <h2 className="heading-style mb-5"><span>SOAP</span></h2>
    <Sliky_slider/>
    </div>
        
        </div>
    )
}

export default Home
