import React, { useEffect, useState } from "react"
import { getAllPurchases } from "../../modules/PurchaseManager";
import { getAllInventory } from "../../modules/InventoryManager";
import "./ViewOrders.css"
import { getAllCustomOrder } from "../../modules/CustomOrderManager";

export const ViewOrders = () => {

    const [inventory, setInventory] = useState([]);

    const [customOrders, setCustomOrders] = useState([]);

    const [purchases, setPurchases] = useState({
        id: 0,
        userId: 0,
        timestamp: 1614659931693,
        totalPrice: 0
    })



    useEffect(() => {
        getAllInventory()
            .then((newPurchase) => {
                setInventory(newPurchase);
            });
    }, []);

    useEffect(() => {
        getAllPurchases()
            .then((newPurchase) => {
                setPurchases(newPurchase);
            });
    }, []);

    useEffect(() => {
        getAllCustomOrder()
            .then((newPurchase) => {
                setCustomOrders(newPurchase);
            });
    }, []);

    return (
        <>
            <h1>My Orders</h1>
            <section>
                <div>
                    <h3>Custom Orders</h3>
                    {/* customOrder.map(purchase => ) */}
                    <div> {customOrders.map(customOrder => <>
                        <img src={customOrder.imgURL}></img>
                        <p>{customOrder.styleId} {customOrder.timestamp} {customOrder.price}</p> </>
                    )}
                    </div>
                </div>
                <div>
                    <h3>Inventory Orders</h3>
                    {/* inventory.map(purchase => ) */}
                    <div> {inventory.map(invent => <>
                        <img>{invent.imgURL}</img>
                        <p>{invent.id} {invent.timestamp}</p> </>)}
                    </div>
                </div>

            </section>
        </>
    )
}