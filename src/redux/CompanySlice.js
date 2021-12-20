import { createSlice } from "@reduxjs/toolkit";
import Company from "../components/models/Company";

// step 3 for redux - create slices for each components 
const CompanySlice = createSlice({

    name: 'company',

    initialState: {
        companyState: new Company(),
        companyList: []
    },

    reducers: {

        addcompanyInfo: (state, action) => {
            console.log('CompanySlice reducers addCompanyInfo');
            state.companyState = action.payload;
        },
        updateCompanyInfo: (state, action) => {
            console.log('CompanySlice reducers updateCompanyInfo');
            state.companyList = action.payload;
        },
        deleteCompanybyid: (state, action) => {
            console.log('CompanySlice reducers deleteCompanybyid');
            state.companyList = action.payload;
        },
        getAllCompanyInfo:(state, action) => {
            console.log('CompanySlice reducers getAllCompanyInfo');
            state.companyList = action.payload;
        }
        // more methods will be added 
    }
});

export const {addcompanyInfo,updateCompanyInfo,deleteCompanybyid ,getAllCompanyInfo} = CompanySlice.actions;

export default CompanySlice.reducer;