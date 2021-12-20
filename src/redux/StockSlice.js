
import { createSlice } from "@reduxjs/toolkit";
import Stock from "../components/models/Stock";

// step 3 for redux - create slices for each components 
const StockSlice = createSlice({

    name: 'stock',

    initialState: {

        stockState: new Stock(),
        stockList: []


    },

    reducers: {

        viewStockDetails: (state, action) => {
            console.log('StockSlice reducers viewStockDetails');
            state.stockState = action.payload;
        },

        getAllStockDetails: (state, action) => {
            console.log('StockSlice reducers getAllStockDetails');
            state.stockList = action.payload;
        },
        addStockDetails: (state, action) => {
            console.log('StockSlice reducers addStockDetails');
            state.stockState = action.payload;
        },
        updateStockDetails: (state, action) => {
            console.log('StockSlice reducers updateStockDetails');
            state.stockState = action.payload;
        },
        removeStockDetails: (state, action) => {
            console.log('StockSlice reducers removeStockDetails');
            state.stockState = action.payload;
        },
        viewStockByCompany: (state, action) => {
            console.log('StockSlice reducers viewStockByCompany');
            state.stockState = action.payload;
        },
        viewStockByInvestor: (state, action) => {
            console.log('StockSlice reducers viewStockByInvestor');
            state.stockState = action.payload;
        },


        // more methods will be added 
    }
});

export const { viewStockDetails, getAllStockDetails, addStockDetails, updateStockDetails, removeStockDetails, viewStockByCompany, viewStockByInvestor } = StockSlice.actions;

export default StockSlice.reducer;