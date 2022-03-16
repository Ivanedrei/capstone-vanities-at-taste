import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllWood, getAllStyles, getAllColors, getAllCountertop, getAllHardware, getAllSizes, addSizes } from '../../modules/CustomOrderManager';
import './CustomOrders.css'

export const CustomOrderForm = () => {

    const [wood, setWood] = useState([]);
    const [style, setStyle] = useState([]);
    const [color, setColor] = useState([]);
    const [countertop, setCountertop] = useState([]);
    const [hardware, setHardware] = useState([]);
    const [size, setSize] = useState([]);
    const [sizes, setSizes] = useState([

    ]);

    // const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        const newSizes = { ...sizes }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newSizes[event.target.id] = selectedVal
        setSizes(newSizes)
        console.log("football");
    }

    useEffect(() => {
        getAllWood()
            .then((newWood) => {
                setWood(newWood);
                // setIsLoading(false);
            });
    }, []);
    useEffect(() => {
        getAllStyles()
            .then((newStyle) => {
                setStyle(newStyle);
                // setIsLoading(false);
            });
    }, []);
    useEffect(() => {
        getAllColors()
            .then((newColor) => {
                setColor(newColor);
                // setIsLoading(false);
            });
    }, []);
    useEffect(() => {
        getAllCountertop()
            .then((newCountertop) => {
                setCountertop(newCountertop);
                // setIsLoading(false);
            });
    }, []);
    useEffect(() => {
        getAllHardware()
            .then((newHardware) => {
                setHardware(newHardware);
                // setIsLoading(false);
            });
    }, []);
    useEffect(() => {
        getAllSizes()
            .then((newSize) => {
                setSize(newSize);
                // setIsLoading(false);
            });
    }, []);


    const handleClickSummit = (event) => {
        event.preventDefault()

        if (wood.Id === 0 || style.Id === 0 || color.Id === 0 ||
            countertop.Id === 0 || hardware.Id === 0 || size.Id === 0) {
            window.alert("Please fill out all inputs")
        } else {
            addSizes(size)
                .then(() => navigate("/checkout"))
        }
    }
    return (
        <>
            <h2> Custom Orders</h2>
            {/* <img> </img> */}
            <form className="custom_form">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="style">Style: </label>
                        <select value={style.Id} name="styleId" id="styleId" onChange={handleControlledInputChange} className="form-control" >
                            <option value="0"> Select one</option>
                            {style.map(style => (
                                <option key={style.id} value={style.id}>
                                    {style.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="wood">Wood: </label>
                        <select value={wood.Id} name="woodId" id="woodId" onChange={handleControlledInputChange} className="form-control" >
                            <option value="0"> Select one</option>
                            {wood.map(wood => (
                                <option key={wood.id} value={wood.id}>
                                    {wood.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="color">Color: </label>
                        <select value={color.Id} name="colorId" id="colorId" onChange={handleControlledInputChange} className="form-control" >
                            <option value="0"> Select one</option>
                            {color.map(color => (
                                <option key={color.id} value={color.id}>
                                    {color.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="countertop">Countertop: </label>
                        <select value={countertop.Id} name="countertopId" id="countertopId" onChange={handleControlledInputChange} className="form-control" >
                            <option value="0"> Select one</option>
                            {countertop.map(countertop => (
                                <option key={countertop.id} value={countertop.id}>
                                    {countertop.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="hardware">Hardware: </label>
                        <select value={hardware.Id} name="hardwareId" id="hardwareId" onChange={handleControlledInputChange} className="form-control" >
                            <option value="0"> Select one</option>
                            {hardware.map(hardware => (
                                <option key={hardware.id} value={hardware.id}>
                                    {hardware.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                {/* left off here: edit this code as in tesla.com for orders input*/}
                {/* <fieldset>
                    <div className="form-group">
                        <input htmlFor="hardware">Hardware: </input>
                        <label value={hardware.Id} name="hardwareId" id="hardwareId" onChange={handleControlledInputChange} className="form-control" >
                            <option value="0"> Select one</option>
                            {hardware.map(hardware => (
                                <option key={hardware.id} value={hardware.id}>
                                    {hardware.name}
                                </option>
                            ))}
                        </label>
                    </div>
                </fieldset> */}
                <fieldset>
                    <div className="form-group">
                        {/* htmlFor and Id inside input shoiuld both match to work! */}
                        <label htmlFor="size">Dimensions:</label>
                        <input type="text" id="size" onChange={handleControlledInputChange} className="form-control" placeholder="width in inches" value={sizes.width} />
                        <input type="text" id="size" onChange={handleControlledInputChange} className="form-control" placeholder="height in inches" value={sizes.height} />
                        <input type="text" id="size" onChange={handleControlledInputChange} className="form-control" placeholder="depth in inches" value={sizes.deep} />
                    </div>
                </fieldset>
                <button className="btn btn-primary"
                    onClick={handleClickSummit}>
                    Summit
                </button>
            </form>
        </>
    )
}