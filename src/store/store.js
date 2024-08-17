import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';
const store= configureStore({
    reducer:{  
        auth: authSlice,
      // add more reducer post   
    }
});
export default store;