const remoteURL = "http://localhost:8088"

export const getAllInventory = () => {
    return fetch('${remoteURL}/inventory')
        .then(res => res.json())
}
// export const getAllRustics = (styleId) => {
//     return fetch(`${remoteURL}/inventory/${styleId}?_expand=style`)
//         .then(res => res.json())
// }
export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
        .then(res => res.json())
}
export const addOrders = (id) => {
    return fetch(`${remoteURL}/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    }).then(response => response.json())
}

// export const getInventoryById = (inventoryId) => {
//     //be sure your animals have good data and related to a location and customer
//     return fetch(`${remoteURL}/inventory/${inventoryId}?_expand=style`)
//         .then(res => res.json())
// }