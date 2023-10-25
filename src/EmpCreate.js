import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EmpCreate = () => {
    const [id, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");
    const [active, activeChange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const empdata = {
           id,
            name,
            email,
            phone,
            active,
        };



        fetch('http://localhost:3000/employee', {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Correct the header key
            },
            body: JSON.stringify(empdata), // Convert the form data to a JSON string
        })
            .then((res) => {
                alert('saved successfully ')
                navigate('/')
            })
            .catch((err) => {
                console.log(err.message);
            });
    };


    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ textAlign: "left" }}>
                            <div className="card-title">
                                <h2>Employee create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input value={id} disabled={true} onChange={(e) => idChange(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={(e) => valchange(true)} onChange={(e) => nameChange(e.target.value)} className="form-control" />
                                            {name.length == 0 && validation  && <span className="text-danger"> Enter  the name </span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={(e) => emailChange(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={(e) => phoneChange(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-checkbox">
                                            <input checked={active} onChange={(e) => activeChange(e.target.checked)} type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmpCreate;
