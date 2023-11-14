import React from 'react'
import { ArrowLeft, ArrowRigth,CleanText } from '../../Iconos/IconNav'
import ItemSubMenu from './ItemSubMenu'
import Style from "./SubMenu.module.css"

export default function SubMenu({heigtvar}) {
    const categorias = [
        {
            Indumentaria:[
                {
                    nombre:"Swetters",
                },
                {
                    nombre: "Remeras"
                },
                {
                    nombre:"Camisas"
                }
            ],
            Calzado: [
                {
                    nombre:"Zapatillas"
                },
                {
                    nombre:"Ojotas y Zandalias" 
                }
            ],
            Marroquinerias: [
                {
                    nombre: "Bolsos"
                },
                {
                    nombre: "Mochillas"
                },
                {
                    nombre:"Billeteras"
                }
            ],
            Sport: [
                {
                    nombre:"Tenis"
                },
                {
                    nombre:"Golf"
                },
                {
                    nombre:"Fitness y"
                }
            ]
        }

    ]
    const styleconst = {
        opacity: 1,
        height: heigtvar,
        zIndex: 2, 
    }
  return (
    <>
        <li className={` ${Style.SubItem}  `} style={styleconst}>
            <button className={Style.cleanText + " "}><CleanText/></button>
            <div className={''}>
                <div className={+ ' '}>
                    <button>
                        < ArrowRigth />
                    </button>
                    <span>
                        <a href="">Pagina Principal</a>
                        <span>Novedades</span>
                    </span>
                </div>

                <div>
                    <ul className={`${Style.headersubmenucontent} + ${Style.lcolumgapcall} + '  w-full`}>
                        <li className='flex flex-col font-semibold'>
                            <a href="">Ver toda la coleccion de Hombre</a>
                            <a href="">Novedades</a>
                            <a href="">Blest Sellers</a>
                        </li>

                        < ItemSubMenu />
                        < ItemSubMenu />
                        < ItemSubMenu />
                        < ItemSubMenu />
                    </ul>
                    <div></div>
                </div>
            </div>
        </li>
    </>
  )
}
