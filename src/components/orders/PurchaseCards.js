import React, { useEffect, useState } from "react"

export const PurchaseCards = ({ purchase, handleDeleteOrder }) => {
    return (
        <>
            <div>
                <img src={purchase.imgUrl}></img>
                <p>{purchase.totalPrice} {purchase.timestamp}</p>
                <button onClick={handleDeleteOrder}></button>
            </div>
        </>
    )
}