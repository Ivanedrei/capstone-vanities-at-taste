import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { ContactUs } from "./components/contact/ContactUs"
import { CustomOrderForm } from "./components/orders/CustomOrders"
import { AboutUs } from "./components/about/AboutUs"
import { Inventory } from "./components/orders/Inventory"
import { Checkout } from "./components/orders/Checkout"
import { ViewOrders } from "./components/orders/ViewOrders"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="/contact" element={<ContactUs />} />

                <Route path="/custom_order" element={<CustomOrderForm />} />
                <Route path="/inventory_order" element={<Inventory />} />

                <Route path="/about" element={<AboutUs />} />

                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<ViewOrders />} />


            </Routes>
        </>
    )
}