    import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
    import axios from 'axios'



    const initialState = {
    value: [],
    }


    export const getProduct = createAsyncThunk("getProduct", async () =>{
    const {data} = await axios.get("https://672f319c229a881691f220af.mockapi.io/Perfumes")
    return data
    })


    export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (payload) => {
        payload.addCase(getProduct.fulfilled,(state,action) => {
        state.value = action.payload
        })
    }
    })

    export default productSlice.reducer