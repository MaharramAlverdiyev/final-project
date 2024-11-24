import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
value: [],
}


export const getBlog = createAsyncThunk("getBlog", async () =>{
const {data} = await axios.get("https://67439199b7464b1c2a6539c0.mockapi.io/Bloq")
return data
})


export const blogSlice = createSlice({
name: 'blog',
initialState,
reducers: {
},
extraReducers: (payload) => {
    payload.addCase(getBlog.fulfilled,(state,action) => {
    state.value = action.payload
    })
}
})

export default blogSlice.reducer