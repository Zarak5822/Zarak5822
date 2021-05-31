
import React from 'react';
import { Route ,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Home from './Components/Home';
import Drama from './Components/Drama';
import Sliders from "react-slick";
import  './index.css';
import Error from './Components/Error'
import Sliky_slider from './Components/Sliky_slider';
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      {/*  */}
      <Navbar/>
      
      <Switch>
      <Route exact path="/" component={Home}>
      <Home/>
      </Route>
      <Route exact path="/Drama" component={Drama}>
    <Drama/>
      </Route>
      <Route  component={Error}/>

     
      </Switch>

     
    </div>
  );
}

export default App;
