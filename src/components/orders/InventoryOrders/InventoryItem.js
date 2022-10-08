import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { getInventoryById } from "../../../modules/InventoryManager";

export const InventoryItem = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { inventoryId } = useParams(); //where is it getting it from? InventoryManager??
    const navigate = useNavigate()

    // try to retrieve object by id but i don't have the value passing to the invoked function getInventoryById
    useEffect(() => {
        getInventoryById(inventoryId)
            .then(i => {
                setItem(i);
                setIsLoading(false);
            });
    }, [inventoryId]);

    //     const updateSelectInventory = (evt, id) => {
    //         evt.preventDefault()
    //         setIsLoading(true);

    //         const selectInventory = {
    //             id: id,
    //             styleId: inventory.styleId,
    //             price: inventory.price
    //         };

    //         getAllInventory(selectInventory)
    //             .then(() => alert(`you have selected item # ${inventory.id}`)
    //             )
    //     }

    //     const handleClickSummit = (event) => {
    //         event.preventDefault() //Prevents the browser from submitting the form

    //         // need to fetch my images from database to get the id of each image
    //         const orderSelected = event.target.id("img-inventory2")

    //         if (orderSelected === null) {
    //             window.alert("Please select an item")
    //         } else {
    //             addOrders(inventory)
    //                 .then(() => navigate("/checkout"))
    //         }
    //     }

    return (
        <>
            <h1 className="inventory_title">Existing Inventory</h1>
            <section className="form-flex">
                <div className="form-component">
                    <h2 className="form-title">
                        Rustic
                    </h2>
                </div>
                <div id="btn_flex">
                    <button className="inv_btn" disabled={isLoading}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </section>
        </>
    )
}