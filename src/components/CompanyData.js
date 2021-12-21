import { getAllCompanyInfoService, addCompanyInfoService, updateCompanyInfoService, deleteCompanybyidService } from "./services/CompanyService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addcompanyInfo,updateCompanyInfo,deleteCompanybyid ,getAllCompanyInfo} from '../redux/CompanySlice';
import Company from "./models/Company";
import axios from "axios";
import { Store } from "redux";
import { Provider } from "react";
import GetAllCompany from "./GetAllCompany";

const CompanyData = () => {
   
const [companyId, setCompanyId] = useState('');
const[comId,setComId] = useState('');
const [newCompanyObj, setNewCompanyObj] = useState(new Company());

    const [updtCompanyObj, setUpdtCompanyObj] = useState(new Company());

    const [displayCompanyObj, setDisplayCompanyObj] = useState(new Company());

    const [updateCompanyObj, setUpdateCompanyObj] = useState(new Company());

    const [deleteCompanyObj, setDeleteCompanyObj] = useState(new Company());

    const companyDelete = useSelector((state) => state.company.companyDelete);
    const dispatch = useDispatch();
    const companyDataFromStore = useSelector((state) => state.company.companyState);
    const companyList = useSelector((state) => state.company.companyList);
    

    const handleCompany = (e) => {
        console.log('handleCompany');
        setCompanyId(e.target.value);
    }
     

    const handleAddCompany = (e) => {
        console.log(e.target.value);
        setNewCompanyObj({
            ...newCompanyObj,
            [e.target.name]: e.target.value,
        });
    }

    const handleUpdateCompany = (e) => {
        console.log(e.target.value);
        setUpdtCompanyObj({
            ...updtCompanyObj,
            [e.target.name]: e.target.value,
        });
    }



    const handleDeleteCompany = (ev) => {
        console.log('handleDeleteCompany');
        setComId(ev.target.value);
    }

    const submitdeleteCompanyDetails = (evt) => {
        evt.preventDefault();
        console.log("submitdeleteCompanyDetails");
        deleteCompanybyidService(comId)
          .then((response) => {
          
            alert(` ${comId}  company Deleted.`);
          })
          .catch(() => {
            alert(`company with ${comId} not found.`);
          });
      };
   
   

  
    
    const submitAddCompany = (evt) => {

        evt.preventDefault();
        console.log('addCompany');
        axios.post(`http://localhost:8084/addCompanyInfo`, newCompanyObj)

            .then((response) => {
                setDisplayCompanyObj(response.data);
                alert('Company added successfully.');
                setNewCompanyObj({ CompanyName:'', CompanyId:''})
            })
            .catch(() => {
                alert("Company could not be added.");
            });
    }
    const submitUpdateCompany = (evt) => {

        evt.preventDefault();
        console.log('updateCompany');
        axios.put(`http://localhost:8084/updateCompanyInfo`, updtCompanyObj)

            .then((response) => {
                setUpdateCompanyObj(response.data);
                alert('company details updated successfully.');
                setNewCompanyObj({ companyName:''})
            })
            .catch(() => {

                alert("Company could not be found.");
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
      
        <div>
            <h1 className="display-4 text-strong mt-3 mb-3" ><b>Company</b> </h1>
            </div>
            <br/>

            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <GetAllCompany/>
                    </div>
           

            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            
            <h4 className=" text-black text-center mt-1">Add New Company</h4>
            <br/>
            <div id="addNewCompanyDiv">
                    <input 
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={newCompanyObj.companyName}
                        onChange={handleAddCompany} 
                        placeholder="Enter Company Name" />
                         <br/><br/>
                    <input
                        type="text"
                        id="companyManager"
                        name="companyManager"
                        value={newCompanyObj.companyManager}
                        onChange={handleAddCompany}
                        placeholder="Enter companyManager" />
                        <br/><br/> 
                    
                        <form className="form form-group form-primary" onSubmit={submitAddCompany}>

<input className="mt-3 btn btn-primary" type="submit" value="Add Company" />
</form>
                </div>
                <p>New Company Data:{displayCompanyObj.companyName} </p>
            </div>
             
            <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            
            <h4 className=" text-black text-center mt-1">Update Company</h4>
            <br/>

            <div id="addNewCompanyDiv">
            <input
                    type="text"
                    id="companyId"
                    name="companyId"
                    name="companyId"
                    value={updtCompanyObj.companyId}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Id" />
                    <br/><br/>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    name="companyName"
                    value={updtCompanyObj.companyName}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Name" />
                    <br/><br/>
                    <input
                    type="text"
                    id="companyManager"
                    name="companyManager"
                    name="companyManager"
                    value={updtCompanyObj.companyManager}
                    onChange={handleUpdateCompany}
                    placeholder="Enter company Manager" />
                    <br/><br/>  
                    <form className="form form-group form-primary" onSubmit={submitUpdateCompany}>

<input className="mt-3 btn btn-primary" type="submit" value="update Company" />
</form>
            </div>
        <p>Updated Company Data: {updtCompanyObj.comapnyId} {updtCompanyObj.companyName} {updtCompanyObj.companyManager}</p>
        </div>
 
        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
        <h4 className=" text-black text-center mt-1">Delete Company by id</h4>
          <form
            className="form form-group form-primary"
            onSubmit={submitdeleteCompanyDetails}
          >
            <input
              className="form-control mt-3"
              type="text"
              id="companyId"
              name="companyId"
              value={comId}
              onChange={handleDeleteCompany}
              placeholder="Enter company ID to Delete"
              autoFocus
              required
            />
            <input
              className="form-control mt-3 btn btn-primary"
              type="submit"
              value="Delete company"
            />
          </form>

        </div>
        </div>
        </div>
    );
}


 
export default CompanyData;