import { createContext, useState,  } from 'react'

export const NavbarContext = createContext();

export const NavbarContextProvider = ({children}) => {
    const [openLink, setOpenLink ] = useState(false)

    return (
        <NavbarContext.Provider value = {{
            openLink,
            setOpenLink
        }}>
            {children}
        </NavbarContext.Provider>
    )
}