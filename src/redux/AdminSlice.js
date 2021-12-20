import { createSlice } from "@reduxjs/toolkit";
import Admin from "../components/models/Admin";


const AdminSlice = createSlice({

    name: 'admin',

    initialState: {
       

        adminState: new Admin(),
        adminList: []


    },

    reducers: {

        getAdminDetails: (state, action) => {
            console.log('AdminSlice reducers getAdminDetails');
            state.adminState = action.payload;
        },
        getAllAdminDetails: (state, action) => {
            console.log('AdminSlice reducers getAllAdminDetails');
            state.adminList = action.payload;
        },

        

        addAdminDetails: (state, action) => {
            console.log('AdminSlice reducers addAdminDetails');
            state.adminList = action.payload;
        },

        updateAdminDetails: (state, action) => {
            console.log('AdminSlice reducers updateAdminDetails');
            state.adminList = action.payload;
        },

        removeAdminDetails: (state, action) => {
            console.log('AdminSlice reducers removeAdminDetails');
            state.adminList = action.payload;
        }
       
    }
});

export const {getAdminDetails,addAdminDetails,updateAdminDetails,removeAdminDetails,getAllAdminDetails} = AdminSlice.actions;

export default AdminSlice.reducer;