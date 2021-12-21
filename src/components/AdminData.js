import { getAdminDetailsService, addAdminDetailsService, updateAdminDetailsService, removeAdminDetailsService,getAllAdminDetailsService } from "./services/AdminService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {getAdminDetails,addAdminDetails,updateAdminDetails,removeAdminDetails,getAllAdminDetails } from '../redux/AdminSlice';
import AddAdmin from "./AddAdmin";
import UpdateAdmin from "./UpdateAdmin"
import { Store } from "redux";
import { Provider } from "react";

const AdminData = () => {

    const [adminId, setAdminid] = useState('');
    const[admId,setAdmid] = useState('');
    const dispatch = useDispatch();
    const adminDataFromStore = useSelector((state) => state.admin.adminState);
    const adminList = useSelector((state) => state.admin.adminList);

    const handleAdmin = (e) => {
        console.log('handleAdmin');
        setAdminid(e.target.value);
    }

    const handleDeleteAdmin = (ev) => {
        console.log('handleDeleteAdmin');
        setAdmid(ev.target.value);
    }

    const submitgetAdminDetails = (evt) => {
        evt.preventDefault();
        console.log('submitgetAdminDetails');
        getAdminDetailsService(adminId)
        
            .then((response) => { dispatch(getAdminDetails(response.data)) })
            .catch(() => {
                alert(`Admin with ${adminId} not found.`);
            });
        console.log(Object.keys(adminList));
        setAdminid('');
    }

    const submitremoveAdminDetails = (evt) => {
        evt.preventDefault();
        console.log('submitremoveAdminDetails');
        removeAdminDetailsService(admId)
        .then((response) => {
            alert(`Admin details deleted successfully.`)
        })
            
            .catch(() => {
                alert(`Admin with ${admId} not found.`);
            });
    }
   
   
    
    const submitgetAllAdminDetails = (evt) => {
        evt.preventDefault();
        console.log('submitgetAllAdminDetails');
        getAllAdminDetailsService()
            .then((response) => {
                dispatch(getAllAdminDetails(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

   

    return (

        <div align="center"
        style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>


        <div className="container">
            <h1 className="display-4 text-strong mt-3 mb-3" >Admin</h1>
            

            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            <h4 className=" text-black text-center mt-1">Find AdminBy Id </h4>
                <form className="form form-group form-primary" onSubmit={submitgetAdminDetails}>
                    <input className="form-control mt-3" type="number" id="adminId" name="adminId" value={adminId} onChange={handleAdmin} placeholder="Enter adminId to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Admin" />
                </form>
                
                <p>Data from store: <table className="table table-light table-striped ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Admin Name</th>
                <th>email</th>
                <th>password </th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {adminDataFromStore.adminId}</td>
                <td>{adminDataFromStore.adminName}</td>
                <td> {adminDataFromStore.email}</td>
                <td>{adminDataFromStore.password}</td>
                

              </tr>
            </tbody>
          </table>
          </p>
            </div>

            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <AddAdmin/>
                    </div>

            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <UpdateAdmin/>
                    </div>


            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            <h4 className=" text-black text-center mt-1">Delete Admin By Id</h4>
                <form className="form form-group form-primary" onSubmit={submitremoveAdminDetails}>
                    <input className="form-control mt-3" type="number" id="admId" name="admId" value={admId} onChange={handleDeleteAdmin} placeholder="Enter adminId to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Admin" />
                </form>
            </div>
           


 <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
 <h4 className=" text-black text-center mt-1">Find All Admin's</h4>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitgetAllAdminDetails} value="Find All Admin" />
                        </form>
                    </div>
                    <table border="2" className="table table-light table-striped ">
                        <thead>
                            <tr>

                                <th>adminId</th>
                                <th>adminName</th>
                                <th>email</th>
                                <th>password</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {adminList.map((admin, k) => {
                                return (
                                    <tr k={k}><td>{admin.adminId}</td><td>{admin.adminName}</td><td>{admin.email}</td><td>{admin.password}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
        </div>
        </div>
    );
}
export default AdminData;
