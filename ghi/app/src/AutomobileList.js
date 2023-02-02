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
        <>
        <div id="carousel" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.bmw.com.mo/content/dam/bmw/common/all-models/i-series/i8/2014/at-a-glance/i8_stagepresentation.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1447941819928.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwallpapersmug.com%2Fdownload%2F2560x1080%2Ffb070a%2Fluxurious-bmw-concept-8-series-car.jpg" className="d-block w-100" alt="..." />
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
                <h1 className="pb-2">Our Automobiles</h1>
                <table className="table table-striped table-hover">
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
        </div>
    </>
    );
}

export default AutomobileList;
