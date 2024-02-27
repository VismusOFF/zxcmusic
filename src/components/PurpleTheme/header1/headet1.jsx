import React from 'react';
import mainIcon from './main.png';
import style from './header.module.scss';
import { Link } from "react-router-dom";

const Header1 = () => {

  return (
    <div className={style.header}>
      <img src={mainIcon} alt="site icon" style={{ marginLeft: '10px', width: '50px', height: '50px' }} />
      <h1 style={{ marginLeft: '10px', color: 'white' }}>ZXCmusic</h1>
      <div className={style.redtheme}>Red theme</div>
      <Link to="/" className={style.link}></Link>
    </div>
  );
};

export default Header1;