import React from 'react'
//Component
import { Heart } from "../../Iconos/IconNav";

//Style
import Style from "./Nav.module.css"; 

export default function IconItem() {
  return (
    <li className={Style.linkicon + " flex mr-4 "}>
        <a className={Style.linkar + " relative"} href="">
            <Heart/>
            <span >
                <span className={Style.minicart + ' absolute '}>
                    {"0"}
                </span>
            </span>
        </a>
    </li>
  )
}
