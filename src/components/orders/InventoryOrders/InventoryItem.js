import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { getInventoryById } from "../../../modules/InventoryManager";
import "./Inventory.css"

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

    const addItem = () => {

    }


    return (
        <>
            <div className="flex_parent">
                {/* <h1 className="title_item">Rustic</h1> */}
            </div>
            <div className="flex_parent">
                <img className="img_item" src="https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202152/0908/benchwright-72-double-sink-vanity-2-o.jpg"
                    alt="rustic1" ></img>
                <section className="form-flex">
                    <div className="form-component">
                        {item.map(i => (
                            <h2 className="form-title">
                                {i.style}
                            </h2>
                        ))}
                        <h2 className="form-title">
                            Rustic name
                        </h2>
                        <p>
                            details:

                        </p>
                    </div>
                    <div id="btn_flex">
                        <button className="inv_btn" disabled={isLoading}
                            onClick={addItem}>
                            Add to Cart
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}