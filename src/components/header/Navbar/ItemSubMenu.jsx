import React from 'react'
import { ArrowLeft } from '../../Iconos/IconNav'

export default function ItemSubMenu() {
  return (
    <li >
       <a href="">
        <span>Indumentaria</span>
            <ArrowLeft />
        </a>            
        <div>
            <div className=' flex flex-col'>
                <a href="">Sweaters</a>
                <a href="">Remeras</a>
                <a href="">Polos</a>
                <a href="">Camisas</a>
                <a href="">Pantalones B Bermudas</a>
                <a href="">Ropa de Baño</a>
                <a href="">Ropa Interior</a>
                <a href="">Medias</a>
            </div>
        </div>                     
    </li>
  )
}
