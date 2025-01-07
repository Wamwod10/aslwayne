import React from 'react';
import "./header.scss";
import 'animate.css';
import { FaArrowDownLong } from "react-icons/fa6";

const Header = () => {

  return (
    <div className='header'>
      <div className="container">
        <div className="header__box">
          <h1 className="header__title animate__animated animate__fadeInDown">Asl Wayne</h1>
          <h2 className="header__title-sec">Xorazmning Yangi Tovushi</h2>
          <div className="header__link-box">
            <a href="" className="header__link">Ko'proq</a>
            <a href="" className="header__link">Follow</a>
          </div>
        </div>
          <a className='header__icon' href=""><FaArrowDownLong /></a>
      </div>
    </div>
  )
}

export default Header