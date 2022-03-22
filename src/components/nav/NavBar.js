import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link
                    alt="logo" className="navbar__link" to="/"> <img src="https://st4.depositphotos.com/28687978/41102/v/450/depositphotos_411025424-stock-illustration-logo-design-white-letter-letter.jpg" className="logo" ></img></Link>
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
        </ul >
    )
}


// https://cdn.vectorstock.com/i/1000x1000/38/13/vt-v-t-swoosh-letter-logo-design-with-modern-vector-21703813.webp