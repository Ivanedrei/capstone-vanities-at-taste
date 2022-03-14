import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">vanities at taste</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">view orders</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">about us</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">contact us</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">acount</Link>
            </li>
        </ul>
    )
}