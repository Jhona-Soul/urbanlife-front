//Dependencias
import { Link } from "react-router-dom"
//Components

import MenuItem from "./MenuItem";
//Styles
import Style from "./NavBar.module.css";
import SubMenu from "./SubMenu";
import { NavbarContextProvider } from "../../../context/navbarContext";

export const NavBar = () => {
    return (
        <NavbarContextProvider>
            <nav className={Style.navbar + " fixed"}>
                <ul className=" flex justify-center">
                    <MenuItem to={"Novedades"}/>
                    <MenuItem to={"Hombre"}/>
                    <MenuItem to={"Mujer"}/>
                    <MenuItem to={"Niñoz"}/>
                    <MenuItem to={"Polos"}/>
                    <MenuItem to={"Snikers"}/>
                    <MenuItem to={"We are UrbanLife"}/>
                </ul>
                <ul className="">
                    <SubMenu heigtvar={"712px"}/>
                    
                </ul>
            </nav>
        </NavbarContextProvider>
    )
}