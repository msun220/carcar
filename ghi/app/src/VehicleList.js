import React, { useState, useEffect } from "react";


function VehicleList() {
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

    return (
        <>
            <div className="pt-4">
                <h1 className="pb-2">Vehicle Models</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Manufacturer</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                    {vehicles.map((vehicle) => {
                        return (
                            <tr key={ vehicle.id }>
                                <td>{ vehicle.name }</td>
                                <td>{ vehicle.manufacturer.name }</td>
                                <td>
                                    <img src={ vehicle.picture_url } className="img-thumbnail" width="200" height="220"/>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default VehicleList;
