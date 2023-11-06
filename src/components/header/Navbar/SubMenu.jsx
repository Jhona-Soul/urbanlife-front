import React from 'react'
import { ArrowLeft, ArrowRigth } from '../../Iconos/IconNav'

export default function SubMenu() {
  return (
    <>
        <li>
            <button>

            </button>
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
                    <ul>
                        <li>
                            <a href="">Ver todas las novedades</a>
                            <a href="">Sneaker Shop</a>
                            <a href="">Durable Elegance</a>
                        </li>
                        < ItemSubMenu />

                        <li></li>
                        <li></li>
                    </ul>
                    <div></div>
                </div>
            </div>
        </li>
    </>
  )
}
