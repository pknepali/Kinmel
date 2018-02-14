import React, { Component } from "react";
import './header.css';
import amazonLogo from '../../assets/images/amazonLogo.jpg';
import seaerchPromo from '../../assets/images/searchPromo.png';
import headerPromo from '../../assets/images/headerPromo.png';




class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="">
          <img src={headerPromo} alt="Promo Navigation" className="headerPromoImg"/>
        </a>
        <div className="headerContainer">
          <div className="headerLogoContainer">
            <a href="">
              <img src={amazonLogo} alt="Amazon Logo" className="headerLogo"/>
            </a>
            <a className="tryPrime" href="">Try Prime</a>
          </div>
          <div className="headerSearchContainer">
            <select className="headerDepartmentDropdown">
              <option>argegegegerge</option>
              <option>a</option>
            </select>
            <input type="text" className="headerSearchInput"/>
            <button className="fa fa-search headerSearchButton" />
          </div>
          <div className="headerSearchPromoContainer">
            <a href="">
              <img src={seaerchPromo} alt="Search Promo" className="headerSearchPromoImg"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;