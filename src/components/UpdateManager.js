import { useState } from "react";
import axios from "axios";

import Stock from "./models/Manager";
import Manager from "./models/Manager";


const UpdateManager = () => {


    const [newMManagerObj, setNewManagerObj] = useState(new Manager());
    const [updtManagerObj, setUpdtManagerObj] = useState(new Manager());
    const [updateManagerObj, setUpdateManagerObj] = useState(new Manager());

    
   
    
    const handleUpdateManager = (e) => {
        console.log(e.target.value);
        setUpdtManagerObj({
            ...updtManagerObj,
            [e.target.name]: e.target.value,
        });
    }

    
   

    const submitupdateManager = (evt) => {
        evt.preventDefault();
        console.log('UpdateManager');
        axios.put(`http://localhost:8084/updateManager`, updtManagerObj)
            .then((response) => {
                setUpdateManagerObj(response.data);
                alert('Manager details updated successfully.');
                setNewManagerObj({  managerName:'',email:'',mobileNo:''})
            
            })
            .catch(() => {
                alert("manager could not be found.");
            });
    }

   

    return (
        <div className="container">
            <h4 className=" text-black text-center mt-1">Update manager</h4>

            <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
            
        
            <div id="updateNewManagerDiv">
            <input
                    type="number"
                    id="managerId"
                    name="managerId"
                    value={updtManagerObj.managerId}
                    onChange={handleUpdateManager}
                    placeholder="Enter manager Id" />
                    <br/>
                    <br/>
                <input
                    type="text"
                    id="managerName"
                    name="managerName"
                    value={updtManagerObj.managerName}
                    onChange={handleUpdateManager}
                    placeholder="Enter managerName " />
                    <br/>
                    <br/>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={updtManagerObj.email}
                    onChange={handleUpdateManager}
                    placeholder="Enter email" />
                    <br/>
                    <br/>

                <input
                    type="number"
                    id="mobileNo"
                    name="mobileNo"
                    value={updtManagerObj.mobileNo}
                    onChange={handleUpdateManager}
                    placeholder="Enter mobileNo" />  
                    <br/>
                    <br/> 
              

              <form className="form form-group form-primary" onSubmit={submitupdateManager}>
                    
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="UPDATE MANAGER" />
                </form>
            </div>
            <h4 className=" text-black text-center mt-1">Updated Manager Data:</h4>
             <p>managerId:{updateManagerObj.managerId}</p>  
             <p>managerName:{updateManagerObj.managerName}</p> 
             <p>email:{updateManagerObj.email}</p>
             <p>mobileNo:{updateManagerObj.mobileNo}
         </p>
        </div>


        </div>
    );
}
export default UpdateManager;