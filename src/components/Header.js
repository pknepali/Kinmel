import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="">
          <img src="resources/images/headerPromo.png" alt="Promo Navigation" className="headerPromoImg"/>
        </a>
        <div className="headerContainer">
          <div className="headerLogoContainer">
            <a href="">
              <img src="resources/images/amazonLogo.jpg" alt="Amazon Logo" className="headerLogo"/>
            </a>
          </div>
          <div className="headerSearchContainer">
          <div className="headerDepartmentDropdownArrow"></div>
            <select className="headerDepartmentDropdown">
              <option>argegegegerge</option>
              <option>a</option>
            </select>
            <input type="text" className="headerSearchInput"/>
            <button className="fa fa-search cursorPointer headerSearchButton" />
          </div>
          <div className="headerSearchPromoContainer">
            <a href="">
              <img src="resources/images/searchPromo.png" alt="Search Promo" className="headerSearchPromoImg"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;