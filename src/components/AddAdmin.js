import { useState } from "react";
import axios from "axios";

import Admin from "../components/models/Admin";



const AddAdmin = () => {

    const [newAdminObj, setNewAdminObj] = useState(new Admin());
    const [displayAdminObj, setDisplayAdminObj] = useState('');

    const handleAddAdmin = (e) => {
        console.log(e.target.value);
        setNewAdminObj({
            ...newAdminObj,
            [e.target.name]: e.target.value,
        });
    }

    const submitAddAdmin = (evt) => {
        evt.preventDefault();
        console.log('addAdmin');
        axios.post(`http://localhost:8084/addAdminDetails`, newAdminObj)
            .then((response) => {
                setDisplayAdminObj(response.data);
                alert('Admin added successfully.');
                setNewAdminObj({  adminName:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Admin could not be added.");
            });
    }

    return (
        
        <div className="container">
        {/* <h1 className="display-4 text-black mt-3 mb-3" >Add New Admin</h1> */}
        <h4 className=" text-black text-center mt-1">Add New Admin</h4>

        <div className="col-10 border border-light shadow p-3 mb-5 bg-white">
 
            
        {/* <h4 className=" text-black text-center mt-1">Add New Admin</h4> */}
             
            <div id="addNewAdminDiv">
            
               
                <input
                    type="text"
                    id="adminName"
                    name="adminName"
                    value={newAdminObj.adminName}
                    onChange={handleAddAdmin}
                    placeholder="Enter admin Name" />
                    <br/>
                    <br/>

                

                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={newAdminObj.email}
                    onChange={handleAddAdmin}
                    placeholder="Enter Email" />   
                    <br/>
                    <br/>

                 <input
                    type="text"
                    id="password"
                    name="password"
                    value={newAdminObj.password}
                    onChange={handleAddAdmin}
                    placeholder="Enter password" />   
                    <br/>
                    <br/>

                   
               
                 <form className="form form-group form-primary" onSubmit={submitAddAdmin}>
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Add Admin" />
                </form>
            </div>
           
            <h4 className=" text-black text-center mt-3"> New Admin Data:</h4> 
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
                <td> {displayAdminObj.adminId}</td>
                <td>{displayAdminObj.adminName}</td>
                <td> {displayAdminObj.email}</td>
                <td>{displayAdminObj.password}</td>
              </tr>
            </tbody>
        </table>
            
           



            
            
            
        </div>
        </div>

        
    );
}
export default AddAdmin;