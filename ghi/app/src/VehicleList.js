import React, { useState, useEffect } from "react";

function ModelColumn(props) {
    return (
        <div className="col">
            {props.list.map(data => {
                const vehicle = data;
                return (
                <div key={ vehicle.id } className="card mb-3 shadow">
                    <img src={ vehicle.picture_url } className="card-img-top" style={{ height: "250px"}} />
                    <div className="card-body">
                        <h5 className="card-title">{ vehicle.name }</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            { vehicle.manufacturer.name }
                        </h6>
                        <p class="card-text">
                            Available for local delivery
                        </p>

                    </div>
                </div>
                );
            })}
        </div>
    )
}
function VehicleList() {
    const [vehicles, setVehicles] = useState([[], [], [], []]);
    const fetchVehicles = async () => {
        const response = await fetch("http://localhost:8100/api/models/");
        if (response.ok) {
            const data = await response.json();
            const requests = [];
            for (let model of data.models) {
                const detailUrl = `http://localhost:8100${model.href}`;
                requests.push(fetch(detailUrl));
            }
            const responses = await Promise.all(requests);
            const columns = [[], [], [], []];

            let i=0;
            for (const modelResponse of responses) {
                if (modelResponse.ok) {
                    const details = await modelResponse.json();
                    columns[i].push(details);
                    i+=1;
                    if (i > 3) {
                        i = 0;
                    }
                } else {
                    console.error(modelResponse)
                }
            }
            setVehicles(columns);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    return (
        <>
        <div className="container-fluid" style={{ paddingTop: 40 }}>
            <h2>Available Vehicle Models</h2>
            <div className="container-fluid bg-light">
                <div className="row" style={{ paddingTop: 70 }}>
                    {vehicles.map((modelList, id) => {
                        return (
                        <ModelColumn key={id} list={modelList} />
                        );
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default VehicleList;
