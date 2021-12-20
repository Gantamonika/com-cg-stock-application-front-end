import { getInvestorByIdService, getAllInvestorDetailsService, addInvestorService, updateInvestorService, deleteInvestorService } from "./services/InvestorService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getInvestorById, getAllInvestorDetails, addInvestor, updateInvestor, deleteInvestor } from '../redux/InvestorSlice';
import CreateInvestor from "./CreateInvestor";
import { Store } from "redux";
import { Provider } from "react";
import Investor from "./models/Investor";
import UpdateInvestor from "./UpdateInvestor";
import axios from "axios";

const InvestorData = () => {

    const [investorId, setInvestorid] = useState('');
    const [invId, setInvId] = useState('');
    const [investor, setInvestor] = useState('');
    const dispatch = useDispatch();

    const investorDataFromStore = useSelector((state) => state.investor.investorState);
    const investorList = useSelector((state) => state.investor.investorList);
    const [displayInvestorObj, setDisplayInvestorObj] = useState(new Investor());


    const handleInvestor = (e) => {
        console.log('handleInvestor');
        setInvestorid(e.target.value);
    }
    const handleDeleteInvestor = (ev) => {
        console.log('handleDeleteInvestor');
        setInvId(ev.target.value);
    }

    const submitGetInvestorById = (evt) => {
        evt.preventDefault();
        console.log('submitgetInvestorById');
        getInvestorByIdService(investorId)
            .then((response) => { dispatch(getInvestorById(response.data)) })
            .catch(() => {
                alert(`Employee with ${investor} not found.`);
            });
        console.log(Object.keys(investorList));
        setInvestorid('');
    }

    const submitdeleteInvestor = (evt) => {
        evt.preventDefault();
        console.log('submitdeleteInvestor');
        alert('Investor details deleted')
        // axios.delete(`http://localhost:8082/investor/submitdeleteInvestor/${investorId}`)
        deleteInvestorService(invId)
            .then((response) => {
                alert('Investor details deleted')
                //dispatch(deleteInvestor(response.data));
            })
            .catch(() => {
                alert(`Investor with  {investorId} not found.`);
            });
    }

   
   
    const submitgetAllInvestorDetails = (evt) => {
        evt.preventDefault();
        console.log('submitgetAllInvestorDetails');
        getAllInvestorDetailsService()
            .then((response) => {
                dispatch(getAllInvestorDetails(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }


    return (
        <div align="center"
        style={{
           // backgroundImage: " url(" + " https://media.istockphoto.com/photos/american-country-farm-picture-id177505798?k=20&m=177505798&s=612x612&w=0&h=jFgHLVyAgTQ7DtPF81OqgygnDI4faMQ3RzvYz6PLozs=" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
        {/* <div className="container"
            style={{
                height: "100vh",
                color: "white"
            }}></div> */}
        <div className="container">
            <div>
            <h1 className="display-4 text-strong mt-3 mb-3" ><b>Investor</b> </h1>
            </div>
            <br/>
            

            <div className="col-6 border border-light shadow p-3 mb-5 bg-">
            <h4 className=" text-black text-center mt-1">Find investor by id</h4>
                <form className="form form-group form-primary" onSubmit={submitGetInvestorById}>
                    <input className="form-control mt-3" type="number" id="investorId" name="investorId" value={investorId} onChange={handleInvestor} placeholder="Enter investorId to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Investor by Id" />
                </form>
                <h4 className=" text-black text-center mt-1">Data from store: </h4>
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
                <td> {investorDataFromStore.investorId}</td>
                <td>{investorDataFromStore.email}</td>
                <td> {investorDataFromStore.mobileNo}</td>
                <td>{investorDataFromStore.investorName}</td>
              </tr>
            </tbody>
        </table>
                    
                    
                    
                    {/* {investorDataFromStore.investorId} {investorDataFromStore.firstName} {investorDataFromStore.email} {investorDataFromStore.password} {investorDataFromStore.mobileNo} {investorDataFromStore.gender}</p> */}
            </div>

            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-">
                <h4 className=" text-black text-center mt-1">Find all investor</h4>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitgetAllInvestorDetails} value="Find All Investor" />
                        </form>
                    </div>
                    <table border="2" className="table table-light table-striped ">
                        <thead>
                            <tr>

                                <th>investorId</th>
                                <th>email</th>
                                <th>mobileNo</th>
                                <th>Investor Name</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {investorList.map((investor, k) => {
                                return (
                                    <tr k={k}><td>{investor.investorId}</td><td>{investor.email}</td><td>{investor.mobileNo}</td><td>{investor.investorName}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        
            <div className="col-6 border border-light shadow p-3 mb-5 bg-">
            <h4 className=" text-black text-center mt-1">Delete investor by id</h4>
                <form className="form form-group form-primary" onSubmit={submitdeleteInvestor}>
                    <input className="form-control mt-3" type="number" id="investorId" name="investorId" value={invId} onChange={handleDeleteInvestor} placeholder="Enter investorId to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Investor" />
                </form>
            </div>


            <div className="col-6 border border-light shadow p-3 mb-5 bg-">
                <CreateInvestor />
            </div>
            <div className="col-6 border border-light shadow p-3 mb-5 bg-">
                <UpdateInvestor />
            </div>

        </div>
        </div>
    );
}
export default InvestorData;