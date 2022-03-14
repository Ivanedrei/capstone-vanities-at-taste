import React from "react"
import { NavBar } from "./nav/NavBar"
// import { CustomOrders } from "./orders/CustomOrders"
// import { Inventory } from "./orders/Inventory"
// import { ApplicationViews } from "../ApplicationViews"
import "./Vanities.css"

export const Vanities = () => {

    return (
        <>
            {/* <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
            <ApplicationViews
                setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated} /> */}
            <NavBar />
            <div className="vanities" >
                <h2>Vanities at Taste</h2>
            </div>
            {/* <div className="cus"> */}
            {/* <CustomOrders />
            </div>
            <div className="inv">
            <Inventory /> */}
            {/* </div> */}
        </>
    );
};

export default Vanities;