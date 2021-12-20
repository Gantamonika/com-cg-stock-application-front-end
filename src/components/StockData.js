// import { useEffect, useState } from "react";
import {
    viewStockDetailsService,
    getAllStockDetailsService,
    addStockDetailsService,
    updateStockDetailsService,
    removeStockDetailsService,
  } from "./services/StockService";
  import { useDispatch, useSelector } from "react-redux";
  import { useState } from "react";
  import {
    viewStockDetails,
    getAllStockDetails,
    addStockDetails,
    updateStockDetails,
    removeStockDetails,
  } from "../redux/StockSlice";
  import CreateStock from "./CreateStock";
  import UpdateStock from "./UpdateStock";
  import { Store } from "redux";
  import { Provider } from "react";
  
  const StockData = () => {
    const [stockId, setStockid] = useState("");
  //  const [stkId, setStkid] = useState("");
  const [stkId, setStkId] =useState('');

    const dispatch = useDispatch();
    const stockDataFromStore = useSelector(
      (state) => state.stock.stockState
    );
    const stockList = useSelector((state) => state.stock.stockList);
    //const stockListI = useSelector((state) => state.stock.stockList);

  
    const handleStock = (e) => {
      console.log("handleStock");
      setStockid(e.target.value);
    };
    const handleRemoveStock = (ev) => {
        console.log("handleRemoveStock");
        setStkId(ev.target.value);
      };
  
    const submitviewStockDetails = (evt) => {
     
      console.log("submitviewStockDetails");
      evt.preventDefault();
      viewStockDetailsService(stockId)
        .then((response) => {
          dispatch(viewStockDetails(response.data));
        })
        .catch(() => {
          alert(`Stock with ${stockId} not found.`);
        });
      console.log(Object.keys(stockList));
      setStockid("");
    };
  
    const submitremoveStockDetails = (evt) => {
      evt.preventDefault();
      console.log("submitremoveStockDetails");
      removeStockDetailsService(stkId)
        .then((response) => {
         // dispatch(removeStockDetails(response.data));
          alert(`  stock Deleted.`);
        })
        .catch(() => {
          alert(`stock with ${stkId} not found.`);
        });
    };
    const submitgetAllStockDetails = (evt) => {
      evt.preventDefault();
      console.log("submitgetAllStockDetails");
      getAllStockDetailsService()
        .then((response) => {
          dispatch(getAllStockDetails(response.data));
        })
        .catch(() => {
          alert(`Something is wrong!`);
        });
    };
  
    return (

        <div align="center"
        style={{
           // backgroundImage: " url(" + " https://media.istockphoto.com/photos/american-country-farm-picture-id177505798?k=20&m=177505798&s=612x612&w=0&h=jFgHLVyAgTQ7DtPF81OqgygnDI4faMQ3RzvYz6PLozs=" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
       
      <div className="container">
          <br/>
        <h4 className=" text-black text-center mt-1">Stock </h4>
        <br/>
  
        <div className="col-10 border border-light shadow p-3 mb-5 bg-white">
        <h4 className=" text-black text-center mt-1">Find Stock By Id</h4>
          <form
            className="form form-group form-primary"
            onSubmit={submitviewStockDetails}
          >
            <input
              className="form-control mt-3"
              type="search"
              id="stockId"
              name="stockId"
              value={stockId}
              onChange={handleStock}
              placeholder="Enter stock ID to search"
              autoFocus
              required
            />
            <input
              className="form-control mt-3 btn btn-primary"
              type="submit"
              value="Find Stock"
            />
          </form>
          <h4 className=" text-black text-center mt-1">Data from store:</h4>
          <table className="table table-light table-striped ">
            <thead>
              <tr>
                <th>ID</th>
                <th>stock Name</th>
                <th>type</th>
                <th>quantity </th>
                <th>profitLoss </th>
                <th>avgPrice </th>
                <th>totalNoOfStocks </th>
                <th>status </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {stockDataFromStore.stockId}</td>
                <td>{stockDataFromStore.stockName}</td>
                <td> {stockDataFromStore.type}</td>
                <td>{stockDataFromStore.quantity}</td>
                <td>{stockDataFromStore.profitLoss}</td>
                <td>{stockDataFromStore.totalNoOfStocks}</td>
                <td>{stockDataFromStore.avgPrice}</td>
                <td>{stockDataFromStore.status}</td>

              </tr>
            </tbody>
          </table>
        
        </div>
  
        <div>
          <div className="col-10 border border-light shadow p-3 mb-5 bg-white">
          <h4 className=" text-black text-center mt-1">Find all stocks</h4>
            <div>
              <form className="form form-group form-primary">
                <input
                  className="mt-3 btn btn-primary btn-block"
                  type="button"
                  onClick={submitgetAllStockDetails}
                  value="Find All Stocks"
                />
              </form>
            </div>
            <table className="table table-light table-striped ">
              <thead>
                <tr>
                <th>ID</th>
                <th>stock Name</th>
                <th>type</th>
                <th>quantity </th>
                <th>profitLoss </th>
                <th>avgPrice </th>
                <th>totalNoOfStocks </th>
                <th>status </th>
                </tr>
              </thead>
              <tbody>
                {stockList.map((stock, k) => {
                  return (
                    <tr k={k}>
                     <td> {stock.stockId}</td>
                <td>{stock.stockName}</td>
                <td> {stock.type}</td>
                <td>{stock.quantity}</td>
                <td>{stock.profitLoss}</td>
                <td>{stock.totalNoOfStocks}</td>
                <td>{stock.avgPrice}</td>
                <td>{stock.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
          <CreateStock />
        </div>

        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            <UpdateStock/>
        </div>
        
        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
        <h4 className=" text-black text-center mt-1">Delete StockBy Id</h4>
          <form
            className="form form-group form-primary"
            onSubmit={submitremoveStockDetails}
          >
            <input
              className="form-control mt-3"
              type="text"
              id="stockId"
              name="stockId"
              value={stkId}
              onChange={handleRemoveStock}
              placeholder="Enter stock ID to Delete"
              autoFocus
              required
            />
            <input
              className="form-control mt-3 btn btn-primary"
              type="submit"
              value="Delete stock"
            />
          </form>
         
        </div>
  
 </div>
  
      </div>
    );
  };
  export default StockData;






















