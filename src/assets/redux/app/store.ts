import { configureStore } from '@reduxjs/toolkit'
import  MenuSlice  from '../features/menuSlice'
import  productSlice from '../features/productSlice'
import blogSlice  from '../features/blogSlice'

export const store = configureStore({
    reducer: {
        product: productSlice,
        menu: MenuSlice,
        blog: blogSlice
    },
})