import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from '../slice/authSlice'
import servicesSliceReducer from '../slice/servicesSlice'

export const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        services: servicesSliceReducer
    }
})