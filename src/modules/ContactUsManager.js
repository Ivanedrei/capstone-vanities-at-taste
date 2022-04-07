const remoteURL = "http://localhost:8088"

export const getAllContacts = () => {
    return fetch(`${remoteURL}/contact`)
        .then(res => res.json())
}
export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
        .then(res => res.json())
}
export const addContact = (newContact) => {
    return fetch(`${remoteURL}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact)
    }).then(response => response.json())
}