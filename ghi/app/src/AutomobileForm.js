import React, { useState, useEffect } from "react";


function AutomobileForm() {
    const [vin, setVin] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState("");
    const [vehicle, setVehicle] = useState("");

    const [vehicles, setVehicles] = useState([]);
    const fetchVehicles = async () => {
        const response = await fetch("http://localhost:8100/api/models/");
        if (response.ok) {
            const data = await response.json();
            setVehicles(data.models);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    const handleVinChange = (event) => {
        setVin(event.target.value);
    };
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const handleVehicleChange = (event) => {
        setVehicle(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = vehicle;

        const url = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, fetchConfig);

        if (response.ok) {
            setVin("");
            setColor("");
            setYear("");
            setVehicle("");
        }
    };

    return (
        <>
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                <h1>Add a new automobile to inventory</h1>
                <form onSubmit={handleSubmit} id="create-automobile-form">
                    <div className="form-floating mb-3">
                        <input value={vin} onChange={handleVinChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control"/>
                        <label htmlFor="vin">VIN</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={color} onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control"/>
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={year} onChange={handleYearChange} placeholder="Year" required type="number" name="year" id="year" className="form-control"/>
                        <label htmlFor="year">Year of manufacture</label>
                    </div>
                    <div className="mb-3">
                        <select value={vehicle} onChange={handleVehicleChange} required name="vehicle" id="vehicle" className="form-select">
                            <option value="">Choose a model</option>
                            {vehicles.map((vehicle) => {
                                return (
                                    <option key={ vehicle.id } value={ vehicle.id }>
                                    { vehicle.name }
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
                </div>
            </div>
        </div>
    </>
    );
}

export default AutomobileForm;
