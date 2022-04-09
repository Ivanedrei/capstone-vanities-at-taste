import React, { useState, useEffect } from "react"
import { InventoryCard } from "./InventoryCard";
import { addOrders, getAllInventory } from "../../../modules/InventoryManager";


export const InventoryList = () => {

    const [inventory, setInventory] = useState([])

    //fetching all my inventory from database
    useEffect(() => {
        getAllInventory()
            .then((inventory) => {
                setInventory(inventory);
                // setIsLoading(false);
            });
    }, []);

    const handleAddOrder = (id) => {
        addOrders(id)
            .then(() => getAllInventory().then(setInventory));
    }


    return (
        <>
            <section className="section-content">
                <h1 className="inventory_title">Existing Inventory</h1>
            </section>
            <div className="container-cards">
                {inventory.map(inventory =>
                    <InventoryCard
                        key={inventory.id}
                        inventory={inventory}
                        handleAddOrder={handleAddOrder} />)}

            </div>
        </>
    );
};