//Dependencias
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//Icons
import { Search, User, Shooping,Heart, Cart, CleanText } from "../../Iconos/IconNav";
//Style
import Style from "./Nav.module.css"; 
import IconItem from "./IconItem";
import { NavBar } from "../Navbar/Navbar";

export default function Nav() {
    const [searchText, setSearchText] = useState("");


    const handleChange = (e) => {
        setSearchText(e.target.value);
      };

    const resetText = () => {
        setSearchText("");
    }



  return (
    <>
        <div className={Style.navlogo + " header flex items-center justify-between padding-1"}>
            <div id="title" className={Style.logo +" mr-5 shrink-0 "}>
                <Link className="p-2.5" to="/" > 
                    <h1 >Urban <b>Life</b></h1>
                </Link>
            </div>
            <div className={Style.navsearch + " header flex"}>
                <div className={Style.navsearchbox + " flex items-center w-full relative pointer-events-auto "}>
                    <div className="w-full relative ">
                        <form>
                            <Search />
                            <input type="text" className={Style.navinput + " w-full"} onChange={handleChange} />
                            <button type="reset" className={(searchText.length <= 0) ? `${Style.searchreset + " hidden"}` : `${Style.searchreset + " opacity-100 underline"}`} onClick={resetText}>Reiniciar</button>
                        </form>
                    </div>
                    <button type="button" className={"flex ml-2.5"}>
                        <CleanText/>
                    </button>
                </div>
            </div>
            
            <ul className=" header flex items-center text-4xl h-full">
                <li className={Style.linkicon + " flex mr-4 "} >
                    <a className={Style.linkar} href=""><Shooping/></a>
                </li>
                <IconItem />
                <li className={Style.linkicon + " flex mr-4 "}>
                    <a className={Style.linkar} href=""><User/></a>
                </li>

                <li className={Style.minishopheader + " flex mr-4 items-center " }>
                    <a className={Style.linkar + " relative"} href="">
                        <Cart/>
                        <span >
                            <span className={Style.minicart + ' absolute '}>
                                {"0"}
                            </span>
                        </span>
                    </a>
                    
                </li>
            </ul>   
        </div>             
    </>
  )
}
