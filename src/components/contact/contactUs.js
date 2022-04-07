import React, { useState } from "react";
import "./ContactUs.css";
import { useNavigate } from 'react-router-dom';
import { getAllContacts, getAllUsers, addContact } from "../../modules/ContactUsManager";

export const ContactUs = () => {
    const [user, setUser] = useState([])
    const [contact, setContact] = useState({
        id: 0,
        userId: 0,
        message: "",
        timestamp: ""
    })

    const SaveInputValue = (event) => {
        const newMessage = { ...contact }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newMessage[event.target.id] = selectedVal
        // update state
        setContact(newMessage)
    }

    const navigate = useNavigate()

    const handleClickSummit = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        const UserFirstName = user.firstName
        const userLastName = user.lastName
        const UserEmail = user.email

        if (UserFirstName === "" || userLastName === "" || UserEmail === "") {
            window.alert("Please enter your full name and email")
        } else {
            //invoke addAnimal passing animal as an argument.
            //once complete, change the url and display the animal list
            addContact(contact)
                .then(() => navigate("/contact-us-summited"))
        }
    }

    return (
        <>
            <div className="header_contact">
                <h1>Contact Us:</h1>
            </div>
            <div className="background">
                <form className="flex_form" >
                    <div className="form-group">
                        <label htmlFor="name" id="text">First Name:</label>
                        <input type="text" id="name" onChange={SaveInputValue} required autoFocus className="form-control" placeholder="John Smith" value={user.firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" id="text">Last Name:</label>
                        <input type="text" id="name" onChange={SaveInputValue} required autoFocus className="form-control" placeholder="John Smith" value={user.lastName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" id="text">Email:</label>
                        <input type="text" id="email" onChange={SaveInputValue} required autoFocus className="form-control" placeholder="Johnsmith@me.com" value={user.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" id="text">Description:</label>
                        <textarea type="text" id="description" onChange={SaveInputValue} className="form-control" value="" />
                    </div>
                    <button className="contact_btn"
                        onClick={handleClickSummit}>
                        Summit
                    </button>
                </form>
            </div>
        </>
    )
}