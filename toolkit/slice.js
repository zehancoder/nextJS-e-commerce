import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewProduct: null,
  populerData: [],
  selectedCategory: "All",
  filterByPrice: {
    lowPrice: 0,
    highPrice: 0,
  },
  electronicsProduct: [],
};

export const reduxSlice = createSlice({
  name: "e-commerce",
  initialState,
  reducers: {
    // view product state
    viewProductState: (state, action) => {
      state.viewProduct = action.payload;
    },
    // populer data state
    populerDataState: (state, action) => {
      state.populerData = action.payload;
    },
    //selected category state
    selectedCategoryState: (state, action) => {
      state.selectedCategory = action.payload;
    },
    //filtering handle state
    lowPriceState: (state, action) => {
      state.filterByPrice.lowPrice = action.payload;
    },
    hightPriceState: (state, action) => {
      state.filterByPrice.highPrice = action.payload;
    },
    electronicsProductState: (state, action) => {
      state.electronicsProduct = action.payload;
    }
  },
});

export const {
  landingPageCarouselDataState,
  viewProductState,
  populerDataState,
  selectedCategoryState,
  lowPriceState,
  hightPriceState,
  electronicsProductState
} = reduxSlice.actions;
export default reduxSlice.reducer;
