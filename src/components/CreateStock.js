import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Stock from "./models/Stock";

const CreateStock = (props) => {
  const history = useHistory();

  const [stock, setStock] = useState(new Stock());
  const [credentials, setCredentials] = useState("");

  const handleStock = (event) => {
  
    setStock({
      
      ...stock,
      [event.target.name]: event.target.value,
    });
    
  };
  const resetInputField = () => {
    setStock("");
  };
  const submitStock = (event) => {
   
    axios
      .post(`http://localhost:8084/addStockDetails`, stock)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("stock", stock);
        alert("Stock Added  Sucessfully");
        history.push("/stock"); // check this method to navigate
      })
      .catch((error) => {
        console.log(error.response);
        setCredentials("Enter proper credentials.");
      });
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
        <h4 className=" text-black text-center mt-1">Add Stock</h4>
          <div className="card-body">
            <form
              className="form form-group form-primary "
              onSubmit={submitStock}
            >
              <input
                        type="text"
                        id="stockName"
                        name="stockName"
                        value={stock.stockName}
                        onChange={handleStock}
                        placeholder="Enter stock Name" 
                        autoFocus
                        required

                        />
                        <br/>
                        <br/>
                        <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={stock.quantity}
                        onChange={handleStock}
                        placeholder="Enter quantity" />
                        <br/>
                        <br/>
                         <input
                        type="text"
                        id="type"
                        name="type"
                        value={stock.type}
                        onChange={handleStock}
                        placeholder="Enter type" />
                        <br/> <br/>
                         <input
                        type="number"
                        id="avgPrice"
                        name="avgPrice"
                        value={stock.avgPrice}
                        onChange={handleStock}
                        placeholder="Enter avgPrice" />
                        <br/> <br/>
                         <input
                        type="number"
                        id="totalNoOfStocks"
                        name="totalNoOfStocks"
                        value={stock.totalNoOfStocks}
                        onChange={handleStock}
                        placeholder="Enter totalNoOfStocks" />
                        <br/> <br/>
                         <input
                        type="number"
                        id="profitLoss"
                        name="profitLoss"
                        value={stock.profitLoss}
                        onChange={handleStock}
                        placeholder="Enter profitLoss" />
                        <br/> <br/>
                         <input
                        type="text"
                        id="status"
                        name="status"
                        value={stock.status}
                        onChange={handleStock}
                        placeholder="Enter status" />
                        <br/> <br/>
                       
                    
              <button className="btn btn-success" onClick={submitStock}>
              
                Add
              </button>
              

              <button className="btn btn-danger ml-2 " onClick={resetInputField}>
               
                  Cancel
             
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>{/* https://material.io/components/dialogs/web#alert-dialog */}</div>
    </div>
  );
};
export default CreateStock;