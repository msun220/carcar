import React, { useState, useEffect } from "react";


function AutomobileList() {
    const [automobiles, setAutomobiles] = useState([]);
    const fetchAutomobiles = async () => {
        const response = await fetch('http://localhost:8100/api/automobiles/');
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
        }
    }

    useEffect(() => {
        fetchAutomobiles()
    }, []);

    return (
        <div className="pt-4">
            <h1 className="pb-2">Our Automobiles</h1>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Vehicle</th>
                    <th>Manufacturer</th>
                </tr>
            </thead>
            <tbody>
                {automobiles.map(automobile => {
                    return (
                        <tr key={automobile.vin}>
                            <td>{automobile.vin}</td>
                            <td>{automobile.color}</td>
                            <td>{automobile.year}</td>
                            <td>{automobile.model.name}</td>
                            <td>{automobile.model.manufacturer.name}</td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    );
}

export default AutomobileList;
