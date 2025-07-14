import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: JSON.parse(localStorage.getItem('wishList')) || [],
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      if(state.items.some(item => item.id == action.payload.id)) {
          
      }else{
        state.items.push(action.payload);
        localStorage.setItem('wishList', JSON.stringify(state.items));
      }
    },
    removeFromWishList: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('wishList', JSON.stringify(state.items));
    },
  },
});

export const { addToWishList,removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;