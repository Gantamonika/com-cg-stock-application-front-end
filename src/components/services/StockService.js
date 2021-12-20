import axios from 'axios';

// Create services for other components in this way. 

const addStockDetailsService = (stock) => {
    console.log(`addStockDetailsService`);
    return axios.post(`/addStockDetails`, stock);
}
const updateStockDetailsService = (stock) => {
    console.log(`updateStockDetailsService`);
    return axios.put(`/updateStockDetails`, stock);
}
const removeStockDetailsService = (stkId) => {
    console.log(`removeStockDetailsService`);
    return axios.delete(`/removeStockDetails/${stkId}`);
}
const viewStockDetailsService = (stockId) => {
    console.log(`viewStockDetailsService`);
    return axios.get(`/viewStockDetails/${stockId}`);
}
const getAllStockDetailsService = () => {
    console.log(`getAllStockDetailsService`);
    return axios.get(`/getAllStockDetails/`);
}
const viewStockByCompanyService = (compnyId) => {
    console.log(`viewStockByCompanyService`);
    return axios.get(`/viewStockByCompany/${compnyId}`);
}
const viewStockByInvestorService = (invstrId) => {
    console.log(`viewStockByInvestorService`);
    return axios.get(`/viewStockByInvestor/${invstrId}`);
}
export{addStockDetailsService, updateStockDetailsService, removeStockDetailsService, viewStockDetailsService,getAllStockDetailsService, viewStockByCompanyService, viewStockByInvestorService};