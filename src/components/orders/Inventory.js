import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { addOrders, getAllInventory } from "../../modules/InventoryManager";


export const Inventory = () => {
    const [inventory, setInventory] = useState({
        id: 0,
        styleId: 0,
        imgUrl: "",
        price: 0,
        purchaseId: 0,
        ifNotPurchaseId: 0
    })
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllInventory()
            .then((newinventory) => {
                setInventory(newinventory);
                setIsLoading(false);
            });
    }, []);

    const handleClickSummit = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        // need to fetch my images from database to get the id of each image
        const orderSelected = event.target.id("img-inventory")

        if (orderSelected === null) {
            window.alert("Please select an item")
        } else {
            addOrders(inventory)
                .then(() => navigate("/checkout"))
        }
    }


    const navigate = useNavigate()

    return (
        <>
            <h1>Existing Inventory</h1>
            <section className="form-flex">
                <div className="form-component">
                    <h3 className="form-title">
                        Rustic
                    </h3>
                    <div htmlFor="img-inventory" className="form-img">
                        <img id="img-inventory"></img>
                        <img id="img-inventory"></img>
                        <img id="img-inventory"></img>
                    </div>
                </div>
                <div className="form-component">
                    <h3 className="form-title">
                        Farm
                    </h3>
                    <div id="img-inventory" className="form-img">
                        <img id="img-inventory"></img>
                        <img id="img-inventory"></img>
                        <img id="img-inventory"></img>
                    </div>
                </div>
                <div className="form-component">
                    <h3 className="form-title">
                        Classic
                    </h3>
                    <div id="img-inventory" className="form-img">
                        <img id="img-inventory"></img>
                        <img id="img-inventory"></img>
                        <img id="img-inventory"></img>
                    </div>
                </div>
                <div className="form-component">
                    <h3 className="form-title">
                        Modern
                    </h3>
                    <div id="img-inventory" className="form-img">
                        <img id="img-inventory"></img>
                        <img id="img-inventory"></img>
                        <img id="img-inventory"></img>
                    </div>
                </div>
                <button className="btn btn-primary" disabled={isLoading}
                    onClick={handleClickSummit}>
                    Proceed to Checkout
                </button>
            </section>
        </>
    )
}