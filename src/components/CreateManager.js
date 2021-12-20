// import React from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import Manager from "./models/Manager";

// const CreateManager = (props) => {
//   const history = useHistory();

//   const [manager, setManager] = useState(new Manager());
//   const [credentials, setCredentials] = useState("");

//   const handleManager = (event) => {
    
//     setManager({
      
//       ...manager,
//       [event.target.name]: event.target.value,
//     });
    
//   };
//   const resetInputField = () => {
//     setManager("");
//   };
//   const submitManager = () => {
//     setManager("");
//     axios
//       .post(`http://localhost:8084/addManagerDetails`, manager)
//       .then((response) => {
//         setManager("");
//         console.log(response.data);
//         localStorage.setItem("manager", manager);
//         alert("Data Added  Sucessfully");
//         history.push("/manager"); // check this method to navigate
//       })
//       .catch((error) => {
//         console.log(error.response);
//         setCredentials("Enter proper credentials.");
//       });
//   };
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="card col-md-6 offset-md-3 offset-md-3">
//           <h4 className=" text-black text-center mt-1">Add Manager</h4>
//           <div className="card-body">
//             <form
//               className="form form-group form-primary "
//               onSubmit={submitManager}
//             >
//               <input
//                 type="text"
//                 className="form-control"
//                 name="managerName"
//                 id="managerName"
//                 className="form-control mb-3"
//                 placeholder="Enter Manager Name"
//                 value={manager.managerName}
//                 onChange={handleManager}
//                 autoFocus
//                 required
//               />
//               <input
//                 type="text"
//                 className="form-control"
//                 name="email"
//                 id="email"
//                 className="form-control mb-3"
//                 placeholder="Enter Email"
//                 value={manager.email}
//                 onChange={handleManager}
//                 autoFocus
//                 required
//               />
//               <input
//                 type="text"
//                 className="form-control"
//                 name="mobileNo"
//                 id="mobileNo"
//                 className="form-control mb-3"
//                 placeholder="Enter Mobile No."
//                 value={manager.mobileNo}
//                 onChange={handleManager}
//                 autoFocus
//                 required
//               />
//               <button className="btn btn-success" onClick={submitManager}>
              
//                 Add
//               </button>

//               <button className="btn btn-danger ml-2 " onClick={resetInputField}>
               
//                   Cancel
             
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div>{/* https://material.io/components/dialogs/web#alert-dialog */}</div>
//     </div>
//   );
// };
// export default CreateManager;

