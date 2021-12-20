import axios from "axios";

// Create services for other components in this way.

const getManagerDetailsService = (managerId) => {
  console.log(`getManagerDetailsService`);
  return axios.get(`/getManagerDetails/${managerId}`);
};
const getAllmanagerService = () => {
  console.log(`getAllmanagerService`);
  return axios.get(`/getAllManager/`);
  // return axios.get(`/getAllManager`);
};

const addManagerDetailsService = (manager) => {
  console.log(`addManagerDetailsServiceService`);
  return axios.post(`/addManagerDetails`, manager);
};

const updateManagerService = (manager) => {
  console.log(`updateManagerService`);
  return axios.put(`/updateManager`,manager);
};

const deleteManagerByIdService = (managerId) => {
  console.log(`deleteManagerByIdService`);
  return axios.delete(`/deleteManager/${managerId}`);
};

export {
  getManagerDetailsService,
  getAllmanagerService,
  addManagerDetailsService,
  updateManagerService,
  deleteManagerByIdService,
};