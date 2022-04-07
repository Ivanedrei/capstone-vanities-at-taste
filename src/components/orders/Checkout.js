import React from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css"

export const Checkout = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="checkout_background">
                <div className="paragraph">
                    <p className="checkout_p1">Thank you for your purchase!
                        You've made an order of { } item/s.</p><br></br>
                    <p className="checkout_p2">We'll see you soon!</p>
                </div>
                <div className="btn-section">
                    <button id="btn" onClick={() => navigate("/")}>
                        Back Home
                    </button>
                    <button id="btn" onClick={() => navigate("/orders")}>
                        View Orders
                    </button>
                </div>
            </div>
        </>
    )
}