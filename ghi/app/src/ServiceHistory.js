import React, { useEffect, useState } from "react";


function ServiceHistory() {
    const [filterValue, setFilterValue] = useState("");
    const [appointments, setAppointments] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);

    const fetchAppointments = async () => {
        const response = await fetch("http://localhost:8080/api/appointments/");
        if (response.ok) {
            const allData = await response.json();
            setAppointments(allData.appointments);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAutomobiles = async () => {
        const response = await fetch("http://localhost:8100/api/automobiles/");
        if (response.ok) {
            const data = await response.json();
            const vinList = [];
            data.autos.map((automobile) => vinList.push(automobile.vin));
            setAutomobiles(vinList);
        }
    };

    useEffect(() => {
        fetchAutomobiles();
    }, []);

    const handleFilterVal = (event) => {
        setFilterValue(event.target.value.toUpperCase());
    };

    const filteredAppointments = () => {
        if (filterValue === " ") {
            return appointments;
        } else {
            return appointments.filter((appointment) =>
                appointment.vin.toUpperCase().includes(filterValue)
            );
        }
    };

    const isVip = (vin) => {
        if (automobiles.includes(vin)) {
            return "VIP treatment received.";
        } else {
            return "Not a VIP.";
        }
    };

    return (
        <>
        <div id="carousel" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fac-schnitzer-cdn.de%2Fmedia%2Fimage%2F56%2Fe2%2F25%2FM4_G82_by_AC_Schnitzer_Step_1_Front_3500x1400.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            </div>
            <div className="container" style={{ paddingTop: 40}}>
                <div className="pt-4">
                    <h1 className="pb-2">Search Service Appointment</h1>
                    <form>
                        <div className="form mb-3">
                            <input value={filterValue} onChange={handleFilterVal} placeholder="Search by VIN" name="filter-value" id="filter-value" className="form-control"/>
                        </div>
                    </form>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th>VIN</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                            <th>VIP</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAppointments().map((appointment) => {
                                return (
                                    <tr key={ appointment.id }>
                                        <td className="pt-3">{ appointment.vin }</td>
                                        <td className="pt-3">{ appointment.customer_name }</td>
                                        <td className="pt-3">
                                            {new Date(appointment.date).toLocaleDateString()}
                                        </td>
                                        <td className="pt-3">
                                            {new Date(appointment.date).toLocaleTimeString(
                                            navigator.language,{
                                                hour: "2-digit", minute: "2-digit"
                                            })}
                                        </td>
                                        <td className="pt-3">{ appointment.technician }</td>
                                        <td className="pt-3">{ appointment.reason }</td>
                                        <td className="pt-3">{ isVip(appointment.vin) }</td>
                                        <td className="pt-3">{ appointment.status }</td>
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

export default ServiceHistory;
