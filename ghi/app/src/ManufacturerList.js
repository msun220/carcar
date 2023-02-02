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
        <>
        <div id="carousel" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://imagescdn.dealercarsearch.com/DealerImages/ImageLibrary/1920x800/e6391306.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://dealer-partner-assets.roadster.com/dealer_partners/all/LandingPageHero_LeifJohnson4.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        <div className="container" style={{ paddingTop: 40}}>
            <div className="pt-4">
                <h1 className="pb-2">Manufacturers</h1>
                <table className="table table-striped table-hover">
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
        </div>
        </>
    );
}

export default ManufacturerList;
