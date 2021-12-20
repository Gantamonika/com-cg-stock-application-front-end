
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
  // import CreateManager from "./CreateManager";
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
      <div className="container">
        <h1 className="display-4 text-primary mt-3 mb-3">Manager Component</h1>
        <p>
          Fetch data from backend, store it in redux store and get it to component
        </p>
  
        <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
          <p>Find manager by id</p>
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
          <p>Data from store:</p>
          <table className="table table-light table-striped ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Manager Name</th>
                <th>Email</th>
                <th>Monile Number</th>
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
          <div className="col-12 border  border-light shadow p-3 mb-5 bg-white">
            <p>Find all manager</p>
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
                  <th>Monile Number</th>
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
        {/* <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
          <CreateManager />
        </div> */}
        
          
      <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
        <p>Delete manager by id</p>
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

      <div className="col-12 border border-light shadow p-3 mb-5 bg-white">

                    <UpdateManager/>

             </div>

      <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
        <p>Some other functionality</p>
      </div>
    </div>
  );
};
export default ManagerData;