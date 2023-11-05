import React from 'react'
import { ArrowTop } from "../../Iconos/IconNav";
//Styles
import Style from "./NavBar.module.css";


export default function MenuItem({ to }) {
  return (
    <li className={Style.nabarli}>
        <button className={Style.headermenucategory + " flex items-center justify-between " + `${Style.headermenu}`} aria-expanded="true" aria-label={to}>
            <span className={Style.headertext + " flex flex-col"} data-text = {to}></span>
                            <ArrowTop />
        </button>
    </li>
  )
}
