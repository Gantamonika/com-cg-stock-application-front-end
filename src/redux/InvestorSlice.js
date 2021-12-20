import { createSlice } from "@reduxjs/toolkit";
import Investor from "../components/models/Investor";

// step 3 for redux - create slices for each components 
const InvestorSlice = createSlice({

    name: 'investor',

    initialState: {
       
        investorState: new Investor(),
        investorList: [],


    },

    reducers: {

        getInvestorById: (state, action) => {
            console.log('InvestorSlice reducers getInvestorById');
            state.investorState = action.payload;
        },

        getAllInvestorDetails: (state, action) => {
            console.log('InvestorSlice reducers getAllInvestorDetails');
            state.investorList = action.payload;
        },

        // more methods will be added 

        addInvestor: (state, action) => {
            console.log('InvestorSlice reducers addAllInvestors');
            state.investorList = action.payload;
        },
        updateInvestor: (state, action) => {
            console.log('InvestorSlice reducers  updateInvestors');
            state.investorList = action.payload;
        },
        deleteInvestor: (state, action) => {
            console.log('InvestorSlice reducers deleteAllInvestors');
            state.investorList = action.payload;
        }

    }
});

export const { getInvestorById, getAllInvestorDetails, addInvestor, updateInvestor, deleteInvestor } = InvestorSlice.actions;

export default InvestorSlice.reducer;