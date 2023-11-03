//Dependencias
import { Link } from "react-router-dom"
//Icons
import { Search, User, Shooping,Heart, Cart, CleanText } from "../../Iconos/IconNav"
//Style
import Style from "./Nav.module.css"; 

export default function Nav() {
  return (
    <>
        <div className={Style.navlogo + " header flex items-center justify-between padding-1"}>
            <div id="title" className="mr-5 shrink-0">
                <Link className="p-2.5" to="/" > 
                    <h1 >Urban <b>Life</b></h1>
                </Link>
            </div>
            <div className={Style.navsearch + " header flex"}>
                <div className={Style.navsearchbox + " flex items-center w-full relative pointer-events-auto"}>
                    <div className="w-full relative">
                        <Search />
                        <input type="text" className={Style.navinput + " w-full"}/>
                        <button type="reset">Reiniciar</button>
                    </div>
                    
                </div>
            </div>
            <button type="button">
                <CleanText/>
            </button>
            <ul>
                <li>
                    <a href=""><Shooping/></a>
                </li>
                <li>
                    <a href=""><Heart/></a>
                </li>
                <li>
                    <a href=""><User/></a>
                </li>
                <li>
                    <a href=""><Cart/></a>
                </li>
            </ul>   
        </div>             
    </>
  )
}
