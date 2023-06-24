import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchServices = createAsyncThunk('get/services', async()=> {
    try {
        const {data} = await axios.get('/api/services')
        return data
    } catch(error) {
        throw new Error(error.message)
    }
})

const servicesSlice = createSlice({
    name: 'services',
    initialState: {
        services: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchServices.fulfilled, (state,action) => {
            state.services = action.payload
        })
    }
})

export default servicesSlice.reducer