import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./components/Home"
import { ContactUs } from "./components/contact/ContactUs"
import { CustomOrderForm } from "./components/orders/CustomOrders"
import { AboutUs } from "./components/about/AboutUs"
import { Inventory } from "./components/orders/InventoryOrders/Inventory"
import { Checkout } from "./components/orders/Checkout"
import { ViewOrders } from "./components/orders/ViewOrders"
import { InventoryList } from "./components/orders/InventoryOrders/InventoryList"
import { InventoryDetails } from "./components/orders/InventoryOrders/InventoryDetails"
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    return (
        <>
            <Routes>
                <Route exact path="/login" element={
                    <Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />

                <Route exact path="/" element={<Home />} />

                <Route path="/contact" element={<ContactUs />} />

                <Route path="/custom_order" element={<CustomOrderForm />} />
                <Route path="/inventory_order" element={<Inventory />} />
                <Route path="/inventory_list" element={<InventoryList />} />
                {/* <Route path="/inventory_card" element={<InventoryCard />} /> */}
                <Route path="/inventory/:inventoryId" element={<InventoryDetails />} />
                {/* <Route path="/inventory/:inventoryId/add" element={
                    
                        <LocationEditForm />
                    
                } /> */}

                <Route path="/about" element={<AboutUs />} />

                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<ViewOrders />} />


            </Routes>
        </>
    )
}
