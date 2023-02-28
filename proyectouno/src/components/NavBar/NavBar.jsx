import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './NavBar.css'
import logo from '../../assets/logo.svg'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = () => (
    <>
        <li><a href="#home">Home</a></li>
        <li><a href="#wgpt3">What is GPT3?</a></li>
        <li><a href="#possibility">Open AI</a></li>
        <li><a href="#features">Case Studies</a></li>
        <li><a href="#blog">Library</a></li>      
    </>
  )

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="gpt3__navbar-links_container">
        <Menu/>
      </ul>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="#signIn">Sign In</a>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <a href="#signIn">Sign In</a>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar