import React, { useEffect, useState } from "react"
import { getAllPurchases } from "../../modules/PurchaseManager";
import { getAllInventory } from "../../modules/InventoryManager";
import "./ViewOrders.css"
import { getAllCustomOrder } from "../../modules/CustomOrderManager";

export const ViewOrders = () => {
    const [inventory, setInventory] = useState([]);
    const [customOrder, setCustomOrder] = useState([]);
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
                setPurchases(newPurchase);
            });
    }, []);

    return (
        <>
            <h1>My Orders</h1>
            <section>
                <div>
                    <h3>Inventory Orders</h3>
                    <div>
                        {inventory.map(item => <img src={item.imgUrl} alt="img_order"></img>)}
                    </div>
                </div>
            </section>
        </>
    )
}