import { useState } from "react";
import axios from "axios";
import Investor from "../components/models/Investor";


const UpdateInvestor = () => {


    const [newInvestorObj, setNewInvestorObj] = useState(new Investor());
    const [UpdateInvestor, setUpdtInvestorObj] = useState(new Investor());
    const [updateInvestorObj, setUpdateInvestorObj] = useState(new Investor());




    const handleUpdateInvestor = (e) => {
        console.log(e.target.value);
        setUpdtInvestorObj({
            ...UpdateInvestor,
            [e.target.name]: e.target.value,
        });
    }




    const submitUpdateInvestor = (evt) => {
        evt.preventDefault();
        console.log('UpdateInvestor');
        axios.put(`http://localhost:8084/updateInvestor`, UpdateInvestor)
            .then((response) => {
                setUpdateInvestorObj(response.data);
                alert('Investor details updated successfully.');
                setNewInvestorObj({ investorId: '', email: '', password: '', mobile: '', gender: '' })

            })
            .catch(() => {
                alert("Investor could not be found.");
            });
    }



    return (
        <div className="container">

            <div className="col-8 border border-light shadow p-3 mb-5 bg-white">

            <h4 className=" text-black text-center mt-1">Update Investor</h4>
            <div className="card-body">
                <div id="addNewInvestorDiv">
                    <input
                        type="number"
                        id="investorId"
                        name="investorId"
                        value={UpdateInvestor.investorId}
                        onChange={handleUpdateInvestor}
                        placeholder="Enter investor Id" />
                    <br />
                    <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={UpdateInvestor.email}
                        onChange={handleUpdateInvestor}
                        placeholder="Enter investor Email" />
                    <br />
                    <br />



                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={UpdateInvestor.password}
                        onChange={handleUpdateInvestor}
                        placeholder="Enter password" />
                    <br />
                    <br />

                    <input
                        type="number"
                        id="mobileNo"
                        name="mobileNo"
                        value={UpdateInvestor.mobileNo}
                        onChange={handleUpdateInvestor}
                        placeholder="Enter Mobile number" />
                    <br />
                    <br />
                    <input
                        type="text"
                        id="investorName"
                        name="investorName"
                        value={UpdateInvestor.investorName}
                        onChange={handleUpdateInvestor}
                        placeholder="Enter investor name" />
                    <br />
                    <br />
                    

                    <form className="form form-group form-primary" onSubmit={submitUpdateInvestor}>

                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Update Investor" />
                    </form>
                </div>
                </div>
                </div>
                <div>
               
                <h4 className=" text-black text-center mt-1"> Updated Investor Data: </h4>
                <table border="2" className="table table-light table-striped ">
                <thead>
              <tr>
                <th>Id</th>
                <th>Investor Email</th>
                <th>mobileNo</th>
                <th>Investor Name </th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {UpdateInvestor.investorId}</td>
                <td>{UpdateInvestor.email}</td>
                <td> {UpdateInvestor.mobileNo}</td>
                <td>{UpdateInvestor.investorName}</td>
              </tr>
            </tbody>
        </table>
                
            </div>


        </div>
    );
}
export default UpdateInvestor;