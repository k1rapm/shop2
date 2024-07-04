import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";

export const getData = createAsyncThunk("project/getData", async () => {
  try {
    let { data } = await axiosRequest.get(`Product/get-products`);
    return data.data.products;
  } catch (error) {
    console.log(error);
  }
});

export const getProductById = createAsyncThunk(
  "project/getProductById",
  async (id) => {
    console.log(id);
    try {
      let { data } = await axiosRequest.get(
        `Product/get-product-by-id?id=${id}`
      );

      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postCart = createAsyncThunk(`project/postCart`, async (id) => {
  try {
    let { data } = await axiosRequest.post(`Cart/add-product-to-cart?id=${id}`);
  } catch (error) {
    console.log(error);
  }
});

export const reduce = createAsyncThunk(
  "project/reduce",
  async (id) => {
    console.log(id);

    try {
      let { data } = await axiosRequest.put(
        `Cart/reduce-product-in-cart?id=${id}`
      );
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteCart = createAsyncThunk(
  "project/deleteCart",
  async (id, { dispatch }) => {
    try {
      let { data } = await axiosRequest.delete(
        `Cart/delete-product-from-cart?id=${id}`
      );
      dispatch(getCart(data));
    } catch (error) {
      console.error(error);
    }
  }
);

export const increase = createAsyncThunk(
  "project/increase",
  async (id, { dispatch }) => {
    try {
      let { data } = await axiosRequest.put(
        `Cart/increase-product-in-cart?id=${id}`
      );
      dispatch(getCart());
    } catch (error) {
      console.error(error);
    }
  }
);

export const clearCart = createAsyncThunk(
  "todos/clearCart",
  async (_, { dispatch }) => {
    try {
      let { data } = await axiosRequest.delete("Cart/clear-cart");
      dispatch(getCart(data));
    } catch (error) {
      console.error(error);
    }
  }
);

export const getCart = createAsyncThunk(`project/getCart`, async () => {
  try {
    let { data } = await axiosRequest.get(`Cart/get-products-from-cart`);
    return data.data[0].productsInCart;
  } catch (error) {
    console.log(error);
  }
});

export const counterSlice = createSlice({
  name: "project",
  initialState: {
    data: [],
    ById: null,
    Cart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      console.log(2);
      state.data = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.ById = action.payload;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      console.log(action.payload);
      state.Cart = action.payload;
    });
  },
});

export default counterSlice.reducer;
