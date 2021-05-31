import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
             <h1 className="Error">404 Error Found</h1>
            <h3 className="Error">Sorry this page is not exist</h3>
            <div className="Error">
            <NavLink to="/">Back to Home Page</NavLink>
          </div>
        </div>
        
    )
}

export default Error
