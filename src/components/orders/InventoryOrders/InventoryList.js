import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { addOrders, getAllInventory, getInventoryById } from "../../../modules/InventoryManager";
import "./Inventory.css"
import { InventoryCard } from "./InventoryCard";


export const Inventory = () => {
    //[] inside useState creates a list; while {} creates a new object to store in database.
    const [inventory, setInventory] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { inventoryId } = useParams();

    console.log(inventory)

    // const updateSelectInventory = (evt, inventoryId) => {
    //     evt.preventDefault()
    //     setIsLoading(true);

    //     const selectInventory = {
    //         id: inventoryId,
    //         styleId: inventory.styleId,
    //         price: inventory.price
    //     };

    //     getAllInventory(selectInventory)
    //         .then(() => alert("you have selected item #", { inventoryId })
    //         )
    // }

    //try to retrieve object by id but i dont have the value passing to the invoked function getInventoryById
    // useEffect(() => {
    //     //getinventoryById(id) from inventoryManager and hang on to the data; put it into state
    //     console.log("useEffect", inventoryId)
    //     getInventoryById(inventoryId)
    //         .then(Inventory => {
    //             setInventory(Inventory);
    //             setIsLoading(false);
    //         });
    // }, []);

    useEffect(() => {
        getAllInventory()
            .then((newinventory) => {
                setInventory(newinventory);
                setIsLoading(false);
            });
    }, []);

    // console.log(inventory[0].id)

    // const handleClickSummit = (event) => {
    //     event.preventDefault() //Prevents the browser from submitting the form

    //     // need to fetch my images from database to get the id of each image
    //     const orderSelected = event.target.id("img-inventory")

    //     if (orderSelected === null) {
    //         window.alert("Please select an item")
    //     } else {
    //         addOrders(inventory)
    //             .then(() => navigate("/checkout"))
    //     }
    // }


    const navigate = useNavigate()

    return (
        <div>
            {inventory.map((product) => <InventoryCard key={product.id} product={product} />)}
        </div>
    )
}