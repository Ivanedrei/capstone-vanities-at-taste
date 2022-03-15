import React from "react"
import { NavBar } from "./nav/NavBar"
// import { ApplicationViews } from "../ApplicationViews"
import "./Vanities.css"
import { Link } from "react-router-dom";

export const Vanities = () => {

    return (
        <>
            {/* <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
            <ApplicationViews
                setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated} /> */}
            <NavBar />
            <div className="title" >
                <h2>Vanities at Taste</h2>
            </div>
            <div className="container_home">
                <Link className="item_orders" to={`/custom_order`}>
                    <button>Custom Order</button>
                </Link>
                <Link className="item_inventory" to={`/inventory_order`}>
                    <button>Existing Inventory</button>
                </Link>
            </div>
        </>
    );
};

export default Vanities;