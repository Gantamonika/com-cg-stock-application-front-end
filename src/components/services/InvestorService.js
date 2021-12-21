import axios from 'axios';


const getInvestorByIdService = (investorId) => {
    console.log(`getInvestorByIdService`);
    return axios.get(`/getInvestorDetails/${investorId}`);
}
const getAllInvestorDetailsService = () => {
    console.log(`getInvestorByIdService`);
    return axios.get(`/getAllInvestor`);
}


const addInvestorService = (investor) => {
    console.log(`getInvestorByIdService`);
    return axios.post(`/addInvestor`, investor);
}

const updateInvestorService = (investor) => {
    console.log(`getInvestorByIdService`);
    return axios.post(`/updateInvestor`, investor);
}

const deleteInvestorService = (invId) => {
    console.log(`getInvestorByIdService`);
    return axios.delete(`/deleteInvestor/${invId}`);
}
export { getInvestorByIdService, getAllInvestorDetailsService, addInvestorService, updateInvestorService, deleteInvestorService };