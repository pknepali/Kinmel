import React, { Component } from "react";
import './header.css';
import amazonLogo from '../../assets/images/amazonLogo.jpg';
import seaerchPromo from '../../assets/images/searchPromo.png';
import headerPromo from '../../assets/images/headerPromo.png';




class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="headQuickLink">
            <a href="">
              <img src={headerPromo} alt="Quick Link"/>
            </a>
          </div>
          <div className="headMainArea"> 
            <div className="headFilterArea">
              <div className="headLogoContainer">
                <a href="">
                  <img src={amazonLogo} alt="Amzaon Logo"/>
                </a>
                <div className="tryPrimeLinkContainer"> 
                  <div className="tryPrimeLink" >Try Prime 


                  </div>
                  <div className="tryPrimeTooltipContainer">
                    <h3>Get fast, free shipping with Amazon Prime</h3>
                    <p> Prime members enjoy FREE Two-Day Shipping and exclusive access to music, movies, TV shows, original audio series, and Kindle books.</p>
                    <span>&gt;     </span>
                    <a href="">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="headSearchContainer">
                <select className="headDepartmentDropdown">
                  <option>Computers</option>
                  <option>Clothes</option>
                </select>
                <input type="text" className="headSearchInput"/>
                <button className="fa fa-search headSearchButton" />
              </div>
              <div className="headSearchPromoContainer">
                <a href="">
                  <img src={seaerchPromo} alt="Search Promo" className="headSearchPromoImg"/>
                </a>
              </div>
            </div>
            <div className="headMainNav">
            </div>  
          </div>
        </div>
      </div>  
    );
  }
}
export default Header;