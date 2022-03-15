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
                <Link className="navbar__link" to="/orders">view orders</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/about">about us</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/contact">contact us</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/account">account</Link>
            </li>
        </ul>
    )
}