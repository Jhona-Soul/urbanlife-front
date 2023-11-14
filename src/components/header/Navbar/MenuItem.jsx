import React, { useContext, useState } from 'react'
//Dependencies
import { ArrowTop, ArrowBotton } from "../../Iconos/IconNav";
//Styles
import Style from "./NavBar.module.css";
import { NavbarContext } from '../../../context/navbarContext';

export default function MenuItem({ to }) {
  //const [openLink, setOpenLink ]= useState(false);
  const {openLink, setOpenLink} = useContext(NavbarContext)

  const openMenu = () => {
    setOpenLink(!openLink);
  };

  return (
    <li className={Style.nabarli}>
        <button className={Style.headermenucategory + " flex items-center justify-between " + `${Style.headermenu}`} aria-expanded="true" aria-label={to} onClick={openMenu}>
            <span className={openLink ? `${Style.headertext + " flex flex-col font-semibold "}` : `${Style.headertext + " flex flex-col"}` } data-text = {to}></span>
            {openLink ? <ArrowTop /> : <ArrowBotton />}
        </button>
    </li>
  )
}
