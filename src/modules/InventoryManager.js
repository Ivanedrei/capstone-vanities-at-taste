const remoteURL = "http://localhost:8088"

export const getAllInventory = () => {
    return fetch(`${remoteURL}/inventory`)
        .then(res => res.json())
}
export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
        .then(res => res.json())
}
export const addOrders = (neworder) => {
    return fetch(`${remoteURL}/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(neworder)
    }).then(response => response.json())
}

export const getInventoryById = (inventoryId) => {
    return fetch(`${remoteURL}/inventory/${inventoryId}?_expand=style`)
        .then(res => res.json())
}

export const getStyles = () => {
    return fetch(`${remoteURL}/styles`)
        .then(res => res.json())
}