//Dependencias
import { Link } from "react-router-dom"
//Components
import { ArrowTop } from "../../Iconos/IconNav";
import MenuItem from "./MenuItem";
//Styles
import Style from "./NavBar.module.css";
import SubMenu from "./SubMenu";


export const NavBar = () => {
    return (
        <>
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
                <ul>
                    <SubMenu />
                    <h2>Hola soy un texto</h2>
                </ul>
            </nav>
        </>
    )
}