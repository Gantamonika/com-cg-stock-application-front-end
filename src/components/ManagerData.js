
import {
    getManagerByIdService,
    getManagerDetailsService,
    getAllmanagerService,
    addManagerDetailsService,
    updateManagerService,
    deleteManagerByIdService,
  } from "./services/ManagerService";
  import { useDispatch, useSelector } from "react-redux";
  import { useState } from "react";
  import {
    getmanagerById,
    getAllmanager,
    addManagerDetails,
    updateManager,
    deleteManagerById,
  } from "../redux/ManagerSlice";
  import CreateManager from "./CreateManager";
  import UpdateManager from "./UpdateManager";
  import { Store } from "redux";
  import { Provider } from "react";
  
  const ManagerData = () => {
    const [managerId, setManagerid] = useState("");
    const dispatch = useDispatch();
    const managerDataFromStore = useSelector(
      (state) => state.manager.managerState
    );
    const managerList = useSelector((state) => state.manager.managerList);
  
    const handleManager = (e) => {
      console.log("handleManager");
      setManagerid(e.target.value);
    };
  
    const submitgetmanagerById = (evt) => {
      evt.preventDefault();
      console.log("submitgetmanagerById");
      getManagerDetailsService(managerId)
        .then((response) => {
          dispatch(getmanagerById(response.data));
        })
        .catch(() => {
          alert(`Manager with ${managerId} not found.`);
        });
      console.log(Object.keys(managerList));
      setManagerid("");
    };
  
    const submitdeleteManagerById = (evt) => {
      evt.preventDefault();
      console.log("submitdeleteManagerById");
      deleteManagerByIdService(managerId)
        .then((response) => {
          dispatch(deleteManagerById(response.data));
          alert(`  ManagerId= ${managerId}  Deleted.`);
        })
        .catch(() => {
          alert(`ManagerId= ${managerId} not found.`);
        });
    };
  
    const submitupdateManager = (evt) => {
     evt.preventDefault();
      console.log("submitupdateManager");
      updateManagerService(managerId)
        .then((response) => {
          dispatch(getmanagerById(response.data));
        })
        .catch(() => {
          alert(`Manager with ${managerId} not found.`);
        });
      console.log(Object.keys(managerList));
      setManagerid("");
    };
  
    const submitgetAllmanager = (evt) => {
      evt.preventDefault();
      console.log("submitgetAllmanager");
      getAllmanagerService()
        .then((response) => {
          dispatch(getAllmanager(response.data));
        })
        .catch(() => {
          alert(`Something is wrong!`);
        });
    };
  
    return (

      <div align="center"
      style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
      }}>
     
      <div className="container">
      <h3 className=" text-black text-center mt-3">Manager</h3>
        <br/>
       
  
        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
        <h4 className=" text-black text-center mt-1">Find Manager By Id</h4>
          <form
            className="form form-group form-primary"
            onSubmit={submitgetmanagerById}
          >
            <input
              className="form-control mt-3"
              type="search"
              id="managerId"
              name="managerId"
              value={managerId}
              onChange={handleManager}
              placeholder="Enter Manager ID to search"
              autoFocus
              required
            />
            <input
              className="form-control mt-3 btn btn-primary"
              type="submit"
              value="Find Manager"
            />
          </form>
          <h4 className=" text-black text-center mt-1">Data from store:</h4>
          <table className="table table-light table-striped ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Manager Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {managerDataFromStore.managerId}</td>
                <td>{managerDataFromStore.managerName}</td>
                <td> {managerDataFromStore.email}</td>
                <td>{managerDataFromStore.mobileNo}</td>
              </tr>
            </tbody>
          </table>
          
        </div>
  
        <div>
          <div className="col-6 border  border-light shadow p-3 mb-5 bg-white">
          <h4 className=" text-black text-center mt-1">Find all manager</h4>
            <div>
              <form className="form form-group form-primary">
                <input
                  className="mt-3 btn btn-primary btn-block"
                  type="button"
                  onClick={submitgetAllmanager}
                  value="Find All Manager"
                />
              </form>
            </div>
            <table border="5"  className="table table-light table-striped ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Manager Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                {managerList.map((manager, k) => {
                  return (
                    <tr k={k}>
                      <td>{manager.managerId}</td>
                      <td>{manager.managerName}</td>
                      <td>{manager.email}</td>
                      <td>{manager.mobileNo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
          <CreateManager />
        </div>
        
          
      <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
      <h4 className=" text-black text-center mt-1">Delete manager by id</h4>
        <form
          className="form form-group form-primary"
          onSubmit={submitdeleteManagerById}
        >
          <input
            className="form-control mt-3"
            type="text"
            id="managerId"
            name="managerId"
            value={managerId}
            onChange={handleManager}
            placeholder="Enter Manager ID to Delete"
            autoFocus
            required
          />
          <input
            className="form-control mt-3 btn btn-primary"
            type="submit"
            value="Delete Manager"
          />
        </form>
      </div>

      <div className="col-6 border border-light shadow p-3 mb-5 bg-white">

        <UpdateManager/>

      </div>
</div>
     
    </div>
  );
};
export default ManagerData;