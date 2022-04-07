import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { addOrders, getAllInventory } from "../../../modules/InventoryManager";

import "./Inventory.css"


export const Inventory = () => {
    //[] inside useState creates a list; while {} creates a new object to store in database.
    const [inventory, setInventory] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    // const { inventoryId } = useParams();

    const updateSelectInventory = (evt, inventoryId) => {
        evt.preventDefault()
        setIsLoading(true);

        const selectInventory = {
            id: inventoryId,
            styleId: inventory.styleId,
            price: inventory.price
        };

        getAllInventory(selectInventory)
            .then(() => alert("you have selected item #", { inventoryId })
            )
    }

    // try to retrieve object by id but i dont have the value passing to the invoked function getInventoryById
    // useEffect(() => {
    //     //getinventoryById(id) from inventoryManager and hang on to the data; put it into state
    //     console.log("useEffect", inventoryId)
    //     getInventoryById(inventoryId)
    //         .then(Inventory => {
    //             setInventory(Inventory);
    //             setIsLoading(false);
    //         });
    // }, []);

    // useEffect(() => {
    //     getAllInventory()
    //         .then((newinventory) => {
    //             setInventory(newinventory);
    //             setIsLoading(false);
    //         });
    // }, []);

    // console.log(inventory[0].id)

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
    //change these into cards for each and dont group them by style. just make it work!!! no hard coding!!!!!
    return (
        <>
            <h1 className="inventory_title">Existing Inventory</h1>
            <section className="form-flex">
                <div className="form-component">
                    <h2 className="form-title">
                        Rustic
                    </h2>
                    <div htmlFor="img-inventory" className="form-img1">
                        <div>
                            <img id="img-inventory1" src="https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202152/0908/benchwright-72-double-sink-vanity-2-o.jpg"
                                alt="rustic1" onClick={updateSelectInventory}></img>
                        </div>
                        <div>
                            <img id="img-inventory1" src="https://www.sprucdmarket.com/wp-content/uploads/2018/08/36473173_488420491616469_7893135448837455872_n.jpg"
                                alt="rustic2" onClick={updateSelectInventory}></img>
                            <p>{inventory.price}</p>
                        </div>
                        <div>
                            <img id="img-inventory1" src="https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202209/1393/abbott-68-double-sink-vanity-o.jpg"
                                alt="rustic3" onClick={updateSelectInventory}></img>
                        </div>
                    </div>
                </div>
                <div className="form-component">
                    <h2 className="form-title">
                        Farm
                    </h2>
                    <div id="img-inventory" className="form-img2">
                        <img id="img-inventory2" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/6/26/1/FOD18_Jennifer-Mehditash_Lido-House_017.jpg.rend.hgtvcom.616.822.suffix/1530037866072.jpeg"
                            alt="farm1" onClick={updateSelectInventory}></img>
                        <img id="img-inventory2" src="https://secure.img1-fg.wfcdn.com/im/75625293/resize-h445%5Ecompr-r85/1444/144470601/Braylen+Sliding+Barn+Door+49%2522+Single+Bathroom+Vanity+Set.jpg"
                            alt="farm2" onClick={updateSelectInventory}></img>
                        <img id="img-inventory2" src="https://cdn.shopify.com/s/files/1/0603/8845/products/charlotte-72-double-farmhouse-vanity-white-quartz-top-1_2048x.jpg?v=1637770574"
                            alt="farm3" onClick={updateSelectInventory}></img>
                    </div>
                </div>
                <div className="form-component">
                    <h2 className="form-title">
                        Classic
                    </h2>
                    <div id="img-inventory" className="form-img3">
                        <img id="img-inventory3" className="img_1" src="https://cdn.trendir.com/wp-content/uploads/old/archives/2015/11/27/3-classic-italian-bathroom-vanities-chic-style-aida.jpg"
                            alt="classic1" onClick={updateSelectInventory}></img>
                        <img id="img-inventory3" src="https://cdn.trendir.com/wp-content/uploads/old/archives/2015/11/27/13-classic-italian-bathroom-vanities-chic-style-otello.jpg"
                            alt="classic2" onClick={updateSelectInventory}></img>
                        <img id="img-inventory3" src="https://cdn.trendir.com/wp-content/uploads/old/archives/2015/11/27/15-classic-italian-bathroom-vanities-chic-style-tosca.jpg"
                            alt="classic3" onClick={updateSelectInventory}></img>
                    </div>
                </div>
                <div className="form-component">
                    <h2 className="form-title">
                        Modern
                    </h2>
                    <div id="img-inventory" className="form-4">
                        <img id="img-inventory4" src="https://www.rawsunshinecoast.com.au/wp-content/uploads/2018/07/vanity-1-1.jpg"
                            alt="modern1" onClick={updateSelectInventory}></img>
                        <img id="img-inventory4" src="https://img1.homary.com/mall/file/2021/06/03/5039b555998f461b9f99ff9a7fc2f318.jpg"
                            alt="modern2" onClick={updateSelectInventory}></img>
                        <img id="img-inventory4" src="https://img1.homary.com/mall/file/2021/10/29/cfa3cbd8accc4d8fae5ea93054d34fb5.jpg"
                            alt="modern3" onClick={updateSelectInventory}></img>
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