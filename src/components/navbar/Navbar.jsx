import React, { useState } from 'react'
import "./navbar.scss";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='navbar'>
      <div className="container">
        <div className="navbar__box">
          <a href="" className="navbar__logo"><img src="1.svg" alt="" /></a>

          <ul className={`navbar__list ${menuOpen ? 'active' : ''}`}>
            <li className="navbar__item"><a href="" className="navbar__link">Asl wayne</a></li>
            <li className="navbar__item"><a href="" className="navbar__link">Malumot</a></li>
            <li className="navbar__item"><a href="" className="navbar__link">Musiqa</a></li>
            <li className="navbar__item"><a href="" className="navbar__link">Konsert</a></li>
            <li className="navbar__item"><a href="" className="navbar__link">Ijtimoiy Tarmoqlar</a></li>
          </ul>

          <div className={`navbar__menu-box ${menuOpen ? 'open' : ''}`}>
            <div className={`navbar__menu ${menuOpen ? 'open' : ''}`} onClick={handleToggleMenu}></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar