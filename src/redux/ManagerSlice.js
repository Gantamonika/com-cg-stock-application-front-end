import { createSlice } from "@reduxjs/toolkit";
import Manager from "../components/models/Manager";

// step 3 for redux - create slices for each components 
const ManagerSlice = createSlice({

    name: 'manger',

    initialState: {
        

        managerState: new Manager(),
        managerList: []


    },

    reducers: {

        getmanagerById: (state, action) => {
            console.log('ManagerSlice reducers getmanagerById');
            state.managerState = action.payload;
        },

        getAllmanager: (state, action) => {
            console.log('ManagerSlice reducers getAllmanager');
            state.managerList = action.payload;
        },
        addManagerDetails: (state, action) => {
            console.log('ManagerSlice reducers addmanager');
            state.managerState = action.payload;
        },
        deleteManagerById: (state, action) => {
            console.log('ManagerSlice reducers deletemanager');
            state.managerState = action.payload;
        },
        updateManager: (state, action) => {
            console.log('ManagerSlice reducers updatemanager');
            state.managerState = action.payload;
        }
        // more methods will be added 
    }
});

export const { getmanagerById, getAllmanager,addManagerDetails,deleteManagerById,updateManager } = ManagerSlice.actions;

export default ManagerSlice.reducer;