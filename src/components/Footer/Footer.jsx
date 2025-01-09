import React from 'react'
import "./footer.scss"
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <h2 className="footer__title">
                Asl Wayne Bilan Birga Bo'ling!
            </h2>
            <Link to="https://t.me/freemustafa" target="_blank" className="footer__user">Created by: <span> @freemustafa</span> <FaTelegramPlane /></Link>
        </div>
    </div>
  )
}

export default Footer