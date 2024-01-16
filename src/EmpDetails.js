import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EmpDetails = () => {
    const { empid } = useParams();
    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid)
            .then((res) => res.json())
            .then((resp) => {
                empdatachange(resp);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>
            <div className="card" style={{ textAlign: "left" }}>
                <div className="card-title">
                    <h1>Employee Details</h1>
                </div>
                <div className="card-body"></div>
                {empdata &&
                    <div>
                        <h2> Name is: <b>{empdata.name}</b> ({empdata.id}) </h2>
                        <h3> Contact Details</h3>
                        <h5> Email is: {empdata.email}</h5>
                        <h5> Phone Number is: {empdata.phone}</h5>
                        <Link className="btn btn-danger" to="/"> Back to list</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default EmpDetails;

