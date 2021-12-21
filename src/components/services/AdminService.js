import axios from 'axios';



const getAdminDetailsService = (adminId) => {
    console.log(`getAdminDetailsService`);
    return axios.get(`/getAdminDetails/${adminId}`);
}
const getAllAdminDetailsService = () => {
    console.log(`getAllAdminDetailsService`);
    return axios.get(`/getAllAdminDetails`);
}


const addAdminDetailsService = (admin) => {
    console.log(`addAdminDetailsService`);
    return axios.post(`/addAdminDetails/${admin}`);
}

const updateAdminDetailsService = (admin) => {
    console.log(`updateAdminDetailsService`);
    return axios.put(`/updateAdminDetails/${admin}`);
}

const removeAdminDetailsService = (admId) => {
    console.log(`removeAdminDetailsService`);
    return axios.delete(`/removeAdminDetails/${admId}`);
}


export {getAdminDetailsService,addAdminDetailsService,updateAdminDetailsService,removeAdminDetailsService,getAllAdminDetailsService};