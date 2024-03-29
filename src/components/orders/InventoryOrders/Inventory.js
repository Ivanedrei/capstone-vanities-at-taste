import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { addOrders, getAllInventory, getStyles } from "../../../modules/InventoryManager";

import "./Inventory.css"
import { InventoryItem } from "./InventoryItem";


export const Inventory = () => {
    //[] inside useState creates a list; while {} creates a new object to store in database.
    const [inventory, setInventory] = useState([])
    const [styles, setStyle] = useState({
        id: 0,
        name: "",
        price: 0
    })
    const [isLoading, setIsLoading] = useState(true);
    const { inventoryId } = useParams(); //where is it getting it from? ->ApplicationViews
    const navigate = useNavigate()

    useEffect(() => {
        getAllInventory()
            .then((selectedItem) => {
                setInventory(selectedItem);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        getStyles()
            .then((styles) => {
                setStyle(styles);
                setIsLoading(false);
            });
    }, []);
    console.log(setStyle + " styles!!!")

    // console.log(inventory[0].id)

    const updateSelectInventory = (evt, inventoryId) => {
        evt.preventDefault()
        setIsLoading(true);

        const selectInventory = {
            id: inventoryId,
            styleId: inventory.styleId,
            price: inventory.price
        };

        getAllInventory(selectInventory)
            .then(() => alert(`you have selected item # ${inventory.id}`)
            )
    }

    const handleClickSummit = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        // need to fetch my images from database to get the id of each image
        const orderSelected = event.target.id("img-inventory2")

        if (orderSelected === null) {
            window.alert("Please select an item")
        } else {
            addOrders(inventory)
                .then(() => navigate("/checkout"))
        }
    }

    const styleName = (styles, i) => {

        // inventory(inventory.styleId = styles.id); {
        //     return styles.name
        // }
    }


    return (
        <>
            <h1 className="inventory_title">Existing Inventory</h1>
            <section className="">
                <div className="inv-flexy">
                    {inventory.map(i =>
                        <div className="img-flexy">
                            <img id="img-inv" src={i.imgUrl} alt={i.id} />
                            <p id="details"> ${i.price}.00</p>
                            <p id="details" className="style"> {i.style} Style</p>
                            <button className="inv_btn" disabled={isLoading}
                                onClick={handleClickSummit}>
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                </div>
                {/* {inventory.map(i =>
                    <div className="form-component">
                        {style.map(s =>
                            <h2 className="form-title">  </h2>
                        )}
                        <div id="img-inventory" className="form-img1">
                            <div>
                                <img className="img-inventory2" alt="image" src={i.imgUrl}></img>
                            </div>

                        </div>
                    </div>)} */}

                {/* <div className="form-component">
                    <h2 className="form-title">
                        Farm
                    </h2>
                    <div id="img-inventory" className="form-img2">
                        <div>
                            <img id="img-inventory2" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/6/26/1/FOD18_Jennifer-Mehditash_Lido-House_017.jpg.rend.hgtvcom.616.822.suffix/1530037866072.jpeg"
                                alt="farm1" onClick={updateSelectInventory}></img>
                        </div>
                        <div><img id="img-inventory2" src="https://secure.img1-fg.wfcdn.com/im/75625293/resize-h445%5Ecompr-r85/1444/144470601/Braylen+Sliding+Barn+Door+49%2522+Single+Bathroom+Vanity+Set.jpg"
                            alt="farm2" onClick={updateSelectInventory}></img>
                        </div>
                        <div><img id="img-inventory2" src="https://cdn.shopify.com/s/files/1/0603/8845/products/charlotte-72-double-farmhouse-vanity-white-quartz-top-1_2048x.jpg?v=1637770574"
                            alt="farm3" onClick={updateSelectInventory}></img>
                        </div>
                    </div>
                </div>
                <div className="form-component">
                    <h2 className="form-title">
                        Classic
                    </h2>
                    <div id="img-inventory" className="form-img3">
                        <img id="img-inventory2" className="img_1" src="https://cdn.trendir.com/wp-content/uploads/old/archives/2015/11/27/3-classic-italian-bathroom-vanities-chic-style-aida.jpg"
                            alt="classic1" onClick={updateSelectInventory}></img>
                        <img id="img-inventory2" src="https://cdn.trendir.com/wp-content/uploads/old/archives/2015/11/27/13-classic-italian-bathroom-vanities-chic-style-otello.jpg"
                            alt="classic2" onClick={updateSelectInventory}></img>
                        <img id="img-inventory2" src="https://cdn.trendir.com/wp-content/uploads/old/archives/2015/11/27/15-classic-italian-bathroom-vanities-chic-style-tosca.jpg"
                            alt="classic3" onClick={updateSelectInventory}></img>
                    </div>
                </div>
                <div className="form-component">
                    <h2 className="form-title">
                        Modern
                    </h2>
                    <div id="img-inventory" className="form-img4">
                        <img id="img-inventory2" src="https://www.rawsunshinecoast.com.au/wp-content/uploads/2018/07/vanity-1-1.jpg"
                            alt="modern1" onClick={updateSelectInventory}></img>
                        <img id="img-inventory2" src="https://img1.homary.com/mall/file/2021/06/03/5039b555998f461b9f99ff9a7fc2f318.jpg"
                            alt="modern2" onClick={updateSelectInventory}></img>
                        <img id="img-inventory2" src="https://img1.homary.com/mall/file/2021/10/29/cfa3cbd8accc4d8fae5ea93054d34fb5.jpg"
                            alt="modern3" onClick={updateSelectInventory}></img>
                    </div>
                </div> */}
                <div id="btn_flex">
                    <button className="inv_btn" disabled={isLoading}
                        onClick={handleClickSummit}>
                        Proceed to Checkout
                    </button>
                </div>
            </section>
        </>
    )
}