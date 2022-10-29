import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { sortBy, order, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://62b5c918da3017eabb229337.mockapi.io/pizzas?page=${currentPage}&limit=3&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
});

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state, action) => {
        console.log('Идет отправка');
    },
    [fetchPizzas.fulfilled]: (state, action) => {
        console.log(state,'ВСЕ ОК');
    },
    [fetchPizzas.rejected]: (state, action) => {
        console.log('Была ошибка');
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
