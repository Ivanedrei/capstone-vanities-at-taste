import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { ContactUs } from "./components/contact/ContactUs"
import { CustomOrders } from "./components/orders/CustomOrders"
import { Inventory } from "./components/orders/Inventory"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="/contact" element={<ContactUs />} />

                <Route path="/custom_order" element={<CustomOrders />} />
                <Route path="/inventory_order" element={<Inventory />} />
            </Routes>
        </>
    )
}