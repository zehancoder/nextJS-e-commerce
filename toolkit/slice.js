import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  viewProduct: null,
  populerData: [],
  selectedCategory: "All",
  filterByPrice: {
    lowPrice: 0,
    highPrice: 0,
  },
  products: [],
  cartProduct: [],
  alertMessage: ''
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
    productsSaveState: (state, action) => {
      state.products = action.payload;
    },
    // cart product state
    cartProductState: (state, action) => {
      if (action.payload) {
        state.cartProduct = state.cartProduct.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.cartProduct.push({ ...action.payload, quantity: 1 });
      }
    },
    // remove data from cart
    removeFromCartState: (state, action) => {
      state.cartProduct = state.cartProduct.filter((product) => {
        return product.id !== action.payload.id
      });
    },
    // update product quantity
    increaseProductQuantity: (state, action) => {
      state.cartProduct = state.cartProduct.map((product) => {
        if (action.payload.id === product.id) {
          product.quantity = product.quantity + 1;
        }
        return product;
      });
    },
    decreaseProductQuantity: (state, action) => {
      state.cartProduct = state.cartProduct.map((product) => {
        if (action.payload.id === product.id) {
          if (product.quantity > 1) {
            product.quantity = product.quantity - 1;
          }
        }
        return product;
      });
    },
    /// set alert messages
    alertMessageState: (state, action) => {
      state.alertMessage = action.payload;
     
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
  productsSaveState,
  cartProductState,
  increaseProductQuantity,
  decreaseProductQuantity,
  alertMessageState,
  removeFromCartState
} = reduxSlice.actions;
export default reduxSlice.reducer;
