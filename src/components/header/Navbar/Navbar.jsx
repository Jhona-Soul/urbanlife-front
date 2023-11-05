//Dependencias
import { Link } from "react-router-dom"
//Components
import { NavLink } from "./NavLink";
import { ArrowTop } from "../../Iconos/IconNav";
import MenuItem from "./MenuItem";
//Styles
import Style from "./NavBar.module.css";


export const NavBar = () => {
    const opciones = [
        {
            id:"1",
            href:"/contacts",
            text:"Contacto"
        },
        {
            id:"2",
            href:"/listar",
            text:"Lista de etiquetas"
        },
        {
            id:"3",
            href:"/grafica",
            text:"Grafica"
        },
        {
            id:"4",
            href:"/guardar",
            text:"Crear Etiqueta"
        }
    ]
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

            </nav>
        </>
    )
}