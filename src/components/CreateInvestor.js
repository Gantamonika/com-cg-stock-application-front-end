import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Investor from "./models/Investor";

const CreateInvestor = (props) => {
    const history = useHistory();

    const [investor, setInvestor] = useState(new Investor());
    const [credentials, setCredentials] = useState("");

    const handleInvestor = (event) => {
       
        setInvestor({

            ...investor,
            [event.target.name]: event.target.value,
        });

    };
    const resetInputField = () => {
        setInvestor("");
    };
    const submitInvestor = (event) => {
        axios
            .post(`http://localhost:8084/addInvestor`, investor)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("investor", investor);
                alert("Data Added  Sucessfully");
                history.push("/investor"); 
            })
            .catch((error) => {
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    };
    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h4 className=" text-black text-center mt-1">Add Investor</h4>
                    <div className="card-body">
                        <form
                            className="form form-group form-primary "
                            onSubmit={submitInvestor}
                        >
                          
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                id="email"
                                className="form-control mb-3"
                                placeholder="Enter Email"
                                value={investor.email}
                                onChange={handleInvestor}
                                autoFocus
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                name="investorPassword"
                                id="investorPassword"
                                className="form-control mb-3"
                                placeholder="Enter Investor Password"
                                value={investor.investorPassword}
                                onChange={handleInvestor}
                                autoFocus
                                required
                            />
                             <input
                                type="text"
                                className="form-control"
                                name="investorName"
                                id="investorName"
                                className="form-control mb-3"
                                placeholder="Enter investorName."
                                value={investor.investorName}
                                onChange={handleInvestor}
                                autoFocus
                                required
                            />

                            <input
                                type="number"
                                className="form-control"
                                name="mobileNo"
                                id="mobileNo"
                                className="form-control mb-3"
                                placeholder="Enter Mobile No."
                                value={investor.mobileNo}
                                onChange={handleInvestor}
                                autoFocus
                                required
                            />

                        
                            <button className="btn btn-success" onClick={submitInvestor}>

                                Add
                            </button>

                            <button className="btn btn-danger ml-2 " onClick={resetInputField}>

                                Cancel

                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};
export default CreateInvestor;