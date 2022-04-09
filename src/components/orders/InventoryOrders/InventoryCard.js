import React from "react"
// import "./InventoryCard.css"
import { Link } from "react-router-dom";

//THIS IS A PROPS NOT A ROUTE!
export const InventoryCard = ({ inventory, handleAddOrder }) => {

    const styleName = () => {
        if (inventory.styleId === 1 || 2 || 3) {
            return "Rustic"
        } else if (inventory.styleId === 4 || 5 || 6) {
            return "Farm"
        } else if (inventory.styleId === 7 || 8 || 9) {
            return "Classic"
        } else return "Modern"
    };

    return (
        <div className="card">
            <div className="card-content">
                <h3>Style: <span className="card-name">
                    {styleName}
                </span></h3>
                <picture>
                    <img src={inventory.imgUrl} alt={styleName} />
                </picture>
                <Link to={`/inventory/${inventory.id}`}>
                    <button>Details</button>
                </Link>
                {/* change Link to a Function to post new item to purchase list in database */}
                {/* <Link to={`/inventory/${inventory.id}/add`}>
                    <button>Add to Cart</button>
                </Link> */}

                <button type="button" onClick={() => handleAddOrder(inventory.id)}>Add to Cart</button>
            </div>
        </div>
    );
}