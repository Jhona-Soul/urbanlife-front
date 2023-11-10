import { Outlet } from "react-router-dom"

//Components
import  Nav  from "./header/Nav/Nav"
import { NavBar } from "./header/Navbar/Navbar"


export const Layout = () => {
    return (
        <div>
            <Nav/>
            <NavBar />
            <Outlet/>
        </div>
    )
}