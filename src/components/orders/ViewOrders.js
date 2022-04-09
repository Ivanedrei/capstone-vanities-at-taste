import React, { useEffect, useState } from "react"
import { getAllPurchases, deleteOrder } from "../../modules/PurchaseManager";
import { getAllInventory } from "../../modules/InventoryManager";
import "./ViewOrders.css"
import { getAllCustomOrder } from "../../modules/CustomOrderManager";
import { PurchaseCards } from "./PurchaseCards";

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

    const CustomOrder = () => {
        if (customOrder.purchased === true) {
            return customOrder.id
        } else return null
    };

    const DeleteOrder = id => {
        deleteOrder(id)
            .then(() => getAllPurchases().then(setPurchases));
    };

    return (
        <>
            <h1>My Orders</h1>
            <section>
                <div>
                    <h3>Custom Orders</h3>
                    <div>
                        {customOrder.map(c =>
                            <PurchaseCards
                                key={c.id}
                                c={c}
                                DeleteOrder={DeleteOrder} />)}
                    </div>
                </div>
                <div>
                    <h3>Inventory Orders</h3>
                    <div>
                        {purchases.map(p =>
                            <PurchaseCards
                                key={p.id}
                                p={p}
                                DeleteOrder={DeleteOrder} />)}
                    </div>
                </div>

            </section>
        </>
    )
}