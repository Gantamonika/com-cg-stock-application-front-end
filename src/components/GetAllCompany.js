import {getAllCompanyInfoService} from "./services/CompanyService";
import { useDispatch, useSelector } from "react-redux";

import { getAllCompanyInfo } from "../redux/CompanySlice";
import Company from "../components/models/Company";


const GetAllCompany = () => {


    const dispatch = useDispatch();
    const companyList = useSelector((state) => state.company.companyList);
   
   


    const submitGetAllCompany = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllCompany');
        getAllCompanyInfoService()
            .then((response) => {
                dispatch(getAllCompanyInfo(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

   
   

    
    return (
        <div className="container">
            <h4 className="display-5 text-strong mt-3 mb-3" >Find All Companies</h4>
           

            <div>
                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    {/* <p>Find all companies</p> */}
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllCompany} value="Find All Companies" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>companyId</th>
                                <th>CompanyName</th>
                                <th>CompanyManager</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody>
                            {companyList.map((company, k) => {
                                return (
                                    <tr k={k}> <td>{company.companyId}</td> 
                                     <td>{company.companyName}</td>
                                     <td>{company.companyManager}</td>
                                      
                                      </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
            
          
    );
}
export default GetAllCompany;