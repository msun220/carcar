import React, { useState, useEffect } from "react";


function VehicleForm() {
    const [manufacturers, setManufacturers] = useState([]);

    const [name, setName] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const [picUrl, setPicUrl] = useState("");
    const handlePicUrlChange = (e) => {
        setPicUrl(e.target.value);
    };

    const [manufacturer, setManufacturer] = useState("");
    const handleManufacturerChange = (e) => {
        setManufacturer(e.target.value);
    };
    const fetchManufacturers = async () => {
        const url = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    };

    useEffect(() => {
        fetchManufacturers();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.picture_url = picUrl;
        data.manufacturer_id = manufacturer;

        const vehicleUrl = "http://localhost:8100/api/models/";

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(vehicleUrl, fetchConfig);

        if (response.ok) {
            setName("");
            setPicUrl("");
            setManufacturer("");
        }
    };

    return (
        <>
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Record Vehicle Model</h1>
                        <form onSubmit={handleSubmit} id="create-customer-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleNameChange} value={name} placeholder="Vehicle model name " required name="name" className="form-control"/>
                                <label htmlFor="name">Vehicle model name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handlePicUrlChange} value={picUrl} placeholder="Picture URL" required name="picUrl" type="text" id="picUrl" className="form-control"/>
                                <label htmlFor="picUrl">Picture URL</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select onChange={handleManufacturerChange} value={manufacturer} placeholder="Manufacturer" required name="manufacturer" className="form-select">
                                    <option value="">Choose a manufacturer</option>
                                    {manufacturers.map((manufacturer) => {
                                        return (
                                            <option key={ manufacturer.id } value={ manufacturer.id }>
                                                { manufacturer.name }
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <button className="btn btn-primary">Record</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VehicleForm;
