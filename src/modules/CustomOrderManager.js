const remoteURL = "http://localhost:8088"

export const getAllStyles = () => {
    return fetch(`${remoteURL}/style`)
        .then(res => res.json())
}
export const getAllWood = () => {
    return fetch(`${remoteURL}/wood`)
        .then(res => res.json())
}
export const getAllColors = () => {
    return fetch(`${remoteURL}/color`)
        .then(res => res.json())
}
export const getAllCountertop = () => {
    return fetch(`${remoteURL}/countertop`)
        .then(res => res.json())
}
export const getAllHardware = () => {
    return fetch(`${remoteURL}/hardware`)
        .then(res => res.json())
}
export const getAllSizes = () => {
    return fetch(`${remoteURL}/dimensions`)
        .then(res => res.json())
}
export const addSizes = (newDimension) => {
    return fetch(`${remoteURL}/dimensions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDimension)
    }).then(response => response.json())
}