/*
 * @Date: 2023-07-28 16:57:08
 * @Author: Bruce Hsu
 * @Description: 
 */
import { configureStore } from "@reduxjs/toolkit"

//Custom Imports
import dashboardReducer from "./dashboardSlice"

export const store = configureStore({
    reducer: {
       dashboard: dashboardReducer, 
    }
})

