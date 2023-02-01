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
    );
}

export default ManufacturerList;
