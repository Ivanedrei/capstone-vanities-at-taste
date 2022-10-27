const remoteURL = "http://localhost:8088"

export const getAllPurchases = () => {
    return fetch(`${remoteURL}/purchases`)
        .then(res => res.json())
}
export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
        .then(res => res.json())
}
export const addOrders = (neworder) => {
    return fetch(`${remoteURL}/inventory`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(neworder)
    }).then(response => response.json())
}