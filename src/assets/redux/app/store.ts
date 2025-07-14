import { configureStore } from '@reduxjs/toolkit'
import  MenuSlice  from '../features/menuSlice'
import  productSlice from '../features/productSlice'
import blogSlice  from '../features/blogSlice'
import  wishListSlice  from '../features/wishListSlice'
import  basketSlice  from '../features/basketSlice'

export const store = configureStore({
    reducer: {
        product: productSlice,
        menu: MenuSlice,
        blog: blogSlice,
        wishList: wishListSlice,
        basket: basketSlice

    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;