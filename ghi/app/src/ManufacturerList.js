import React, { useState, useEffect } from "react";


function ManufacturerList() {
    const [manufacturers, setManufacturers] = useState([]);
    const fetchManufacturers = async () => {
        const response = await fetch("http://localhost:8100/api/manufacturers/");
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    };

    useEffect(() => {
        fetchManufacturers();
    }, []);

    return (
        <div className="pt-4">
        <h1 className="pb-2">Our manufacturers</h1>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Manufacturer</th>
            </tr>
            </thead>
            <tbody>
            {manufacturers.map((manufacturer) => {
                return (
                    <tr key={ manufacturer.id }>
                        <td>{ manufacturer.name }</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
}

export default ManufacturerList;
