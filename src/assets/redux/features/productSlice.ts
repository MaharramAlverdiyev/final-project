import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://672f319c229a881691f220af.mockapi.io/Perfumes';

interface Product {
  id?: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  image: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const getProduct = createAsyncThunk<Product[]>('products/fetchProducts', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});


export const addProduct = createAsyncThunk<Product, Product>('products/addProduct', async (newProduct) => {
  const response = await axios.post(API_URL, newProduct);
  return response.data;
});

export const updateProduct = createAsyncThunk<Product, { id: string; updatedProduct: Product }>(
  'products/updateProduct',
  async ({ id, updatedProduct }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedProduct);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk<string, string>('products/deleteProduct', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching products';
      })
      .addCase(addProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        const index = state.products.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) state.products[index] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<string>) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
