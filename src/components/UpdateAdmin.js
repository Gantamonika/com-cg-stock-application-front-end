import { useState } from "react";
import axios from "axios";
import Admin from "../components/models/Admin";


const UpdateAdmin = () => {


    const [newAdminObj, setNewAdminObj] = useState(new Admin());
    const [updtAdminObj, setUpdtAdminObj] = useState(new Admin());
    const [updateAdminObj, setUpdateAdminObj] = useState(new Admin());

    
   
    
    const handleUpdateAdmin = (e) => {
        console.log(e.target.value);
        setUpdtAdminObj({
            ...updtAdminObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitUpdateAdmin = (evt) => {
        evt.preventDefault();
        console.log('UpdateAdmin');
        axios.put(`http://localhost:8084/updateAdminDetails`, updtAdminObj)
            .then((response) => {
                setUpdateAdminObj(response.data);
                alert('Admin details updated successfully.');
                setNewAdminObj({ adminId:'', adminName:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Admin could not be found.");
            });
    }

   

    return (
        <div className="container">
<h4 className=" text-black text-center mt-1">Update Admin</h4>
            <div className="col-10 border border-light shadow p-3 mb-5 bg-white">
            
            
            <div id="addNewAdminDiv">
             <input
                    type="number"
                    id="adminId"
                    name="adminId"
                    value={updtAdminObj.adminId}
                    onChange={handleUpdateAdmin}
                    placeholder="Enter admin Id" />
                    <br/>
                    <br/> 
                    <input
                    type="text"
                    id="adminName"
                    name="adminName"
                    value={updtAdminObj.adminName}
                    onChange={handleUpdateAdmin}
                    placeholder="Enter admin Name" />
                    <br/>
                    <br/>

                

                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={updtAdminObj.email}
                    onChange={handleUpdateAdmin}
                    placeholder="Enter Email" />   
                    <br/>
                    <br/>

                 <input
                    type="text"
                    id="password"
                    name="password"
                    value={updtAdminObj.password}
                    onChange={handleUpdateAdmin}
                    placeholder="Enter password" />   
                    <br/>
                    <br/>
                
               

              <form className="form form-group form-primary" onSubmit={submitUpdateAdmin}>
                    
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Update Admin" />
                </form>
            </div>
            <h4 className=" text-black text-center mt-3"> Updated Admin Data:</h4> 
            <table border="2" className="table table-light table-striped ">
                <thead>
              <tr>
                <th>Id</th>
                <th>AdminName </th>
                <th>email</th>
                <th>password  </th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {updateAdminObj.adminId}</td>
                <td>{updateAdminObj.adminName}</td>
                <td> {updateAdminObj.email}</td>
                <td>{updateAdminObj.password}</td>
              </tr>
            </tbody>
        </table>
            
        </div>


        </div>
    );
}
export default UpdateAdmin;