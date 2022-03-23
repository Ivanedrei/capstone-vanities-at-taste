import React from "react";
import { useNavigate } from "react-router-dom";
import "./Vanities.css"


export const Home = () => {
    const navigate = useNavigate();


    return (
        <>
            {/* <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
            <ApplicationViews
                setAuthUser={setAuthUser}
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated} /> */}
            <section className="background">
                <div className="title" >
                    <h2>Vanities at Taste</h2>
                </div>
                <div className="container_home">
                    <section className="section-content">
                        <button type="button"
                            className="btn"
                            onClick={() => { navigate("/custom_order") }}>
                            Create Custom Order
                        </button>
                        <button type="button"
                            className="btn"
                            onClick={() => { navigate("/inventory_order") }}>
                            Existing Inventory
                        </button>
                    </section>
                </div>
            </section>
        </>
    );
};
