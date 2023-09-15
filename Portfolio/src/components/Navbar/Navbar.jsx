import {HashLink} from "react-router-hash-link"
import {RiMenu3Line} from "react-icons/ri"
import "./Navbar.css"
import { useState } from "react"
const Navbar = () => {

    const [activeNavbar, setActiveNavbar] = useState(false);
    const handleClick = () => {
        setActiveNavbar(!activeNavbar)
    }
    return (
        <>
            <div className="navbar">
                <div className="navbar-toggle" onClick={handleClick}>
                    <RiMenu3Line/>
                </div>
                <div className="navbar-links">
                    <HashLink to="#home" onClick={handleClick} className={activeNavbar == true ? "navbar-item open" : "navbar-item"}>Home </HashLink>
                    <HashLink to="#about" onClick={handleClick} className={activeNavbar == true ? "navbar-item open" : "navbar-item"}>About </HashLink>
                    <HashLink to="#projects" onClick={handleClick} className={activeNavbar == true ? "navbar-item open" : "navbar-item"}>Projects </HashLink>
                    <HashLink to="#contact" onClick={handleClick} className={activeNavbar == true ? "navbar-item open" : "navbar-item"}>Contact </HashLink>
                </div>
            </div>
        </>
    )
}

export default Navbar;