
import { useState } from "react";
import axios from "axios";
// import Customer from "../../models/Customer";
import Stock from "./models/Stock";


const UpdateStock = () => {


    const [newStockObj, setNewStockObj] = useState(new Stock());
    const [updtStockObj, setUpdtStockObj] = useState(new Stock());
    const [updateStockObj, setUpdateStockObj] = useState(new Stock());

    
   
    
    const handleUpdateStock = (e) => {
        console.log(e.target.value);
        setUpdtStockObj({
            ...updtStockObj,
            [e.target.name]: e.target.value,
        });
    }

    
   

    const submitUpdateStock = (evt) => {
        evt.preventDefault();
        console.log('UpdateStock');
        axios.put(`http://localhost:8084/updateStockDetails`, updtStockObj)
            .then((response) => {
                setUpdateStockObj(response.data);
                alert('Stock details updated successfully.');
                setNewStockObj({ stockName:'', quantity:'',type:'',avgPrice:'',totalNoOfStocks:'', profitLoss:'',status:''})
            
            })
            .catch(() => {
                alert("stock could not be found.");
            });
    }

   

    return (
        <div className="container">
            <h4 className=" text-black text-center mt-1">Update stock </h4>

            <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
            
           
            {/* <form onSubmit={submitAddEmp}> */}
            <div id="updateNewStockDiv">
            <input
                    type="number"
                    id="stockId"
                    name="stockId"
                    value={updtStockObj.stockId}
                    onChange={handleUpdateStock}
                    placeholder="Enter stock Id" />
                    <br/>
                    <br/>
                <input
                    type="text"
                    id="stockName"
                    name="stockName"
                    value={updtStockObj.stockName}
                    onChange={handleUpdateStock}
                    placeholder="Enter stockName " />
                    <br/>
                    <br/>

                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={updtStockObj.quantity}
                    onChange={handleUpdateStock}
                    placeholder="Enter quantity" />
                    <br/>
                    <br/>

                <input
                    type="text"
                    id="type"
                    name="type"
                    value={updtStockObj.type}
                    onChange={handleUpdateStock}
                    placeholder="Enter type" />  
                    <br/>
                    <br/> 
                <input
                    type="number"
                    id="avgPrice"
                    name="avgPrice"
                    value={updtStockObj.avgPrice}
                    onChange={handleUpdateStock}
                    placeholder="Enter averagePrice" />
                    <br/>
                    <br/>

                 <input
                    type="number"
                    id="totalNoOfStocks"
                    name="totalNoOfStocks"
                    value={updtStockObj.totalNoOfStocks}
                    onChange={handleUpdateStock}
                    placeholder="Enter totalNoOfStocks" />   
                    <br/>
                    <br/>

                    <input
                    type="number"
                    id="profitLoss"
                    name="profitLoss"
                    value={updtStockObj.profitLoss}
                    onChange={handleUpdateStock}
                    placeholder="Enter profitLoss" />   
                    <br/>
                    <br/>

                    <input
                    type="text"
                    id="status"
                    name="status"
                    value={updtStockObj.status}
                    onChange={handleUpdateStock}
                    placeholder="Enter status" />   
                    <br/>
                    <br/>
            

              <form className="form form-group form-primary" onSubmit={submitUpdateStock}>
                    
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Update Stock" />
                </form>
            </div>
            <h4 className=" text-black text-center mt-1">Updated Stock Data:</h4>
             <p>StockId:{updateStockObj.StockId}</p>  
             <p>StockName:{updateStockObj.stockName}</p> 
             <p>quantity:{updateStockObj.quantity}</p>
             <p>type:{updateStockObj.type}</p> 
             <p>totalNoOfStocks:{updateStockObj.totalNoOfStocks}</p> 
             <p>profitLoss:{updateStockObj.profitLoss}</p> 
             <p>status:{updateStockObj.status}</p> 
             <p>avgPrice:{updateStockObj.avgPrice}</p>
        </div>


        </div>
    );
}
export default UpdateStock;













