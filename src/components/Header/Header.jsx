import React, { useState } from "react";
import "./Header.css";
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [MenuOpened,setMenuOpened]=useState(false);

  const getMenuStyles=(MenuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return {right: !MenuOpened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}>
        <div className="flexCenter h-menu" style={getMenuStyles(MenuOpened)}>
          <a href="#Caraousel">Residencies</a>
          <a href="#Values">Our Values</a>
          <a href="#ContactUs">Contact Us</a>
          <a href="#GetStarted">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
      <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenuAltRight size={30}/>
      </div>
      </div>

    </section>
  );
};

export default Header;
