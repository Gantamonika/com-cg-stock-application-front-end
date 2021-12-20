import stockReducer from './StockSlice';
import companyReducer from './CompanySlice';
import managerReducer from './ManagerSlice';
import adminReducer from './AdminSlice';
import investorReducer from './InvestorSlice';

// steps - 
// 1. create store - only one 
// 2. provide the store to index.js 
// 3. create slices for components (one for each)
// 4. use slices in components 

import { configureStore } from "@reduxjs/toolkit";

// note - redux store can be created in multiple different ways. 
// latest way 

// step 1 for redux 
console.log('store');
const store = configureStore(
    {
        reducer: {
            stock: stockReducer,
            company: companyReducer,
            manager: managerReducer,
            admin: adminReducer,
            investor: investorReducer
            // ,
            // anotherComponent: anotherComponentReducer
        }
    }
);

export default store;