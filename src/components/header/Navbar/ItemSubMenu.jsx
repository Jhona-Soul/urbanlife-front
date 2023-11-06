import React from 'react'
import { ArrowLeft } from '../../Iconos/IconNav'

export default function ItemSubMenu() {
  return (
    <li>
       <a href="">
        <span>Hombre</span>
            <ArrowLeft />
        </a>            
        <div>
            <div>
                <a href="">Calzado</a>
                <a href="">Indumentaria</a>
                <a href="">Bolsos</a>
            </div>
        </div>                     
    </li>
  )
}
