// import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { cartApiSlice } from "./cartApiSlice";
const { createSlice } = require("@reduxjs/toolkit");
// import { HYDRATE } from "next-redux-wrapper";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    checkout: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      if (!product.variation) {
        const cartItem = state.cart.find((item) => item.id === product.id);
        if (!cartItem) {
          state.cartItems.push({
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            // cartItemId: uuidv4(),
          });
        } else {
          state.cartItems = state.cartItems.map((item) => {
            if (item.cartItemId === cartItem.cartItemId) {
              return {
                ...item,
                quantity: product.quantity
                  ? item.quantity + product.quantity
                  : item.quantity + 1,
              };
            }
            return item;
          });
        }
      } else {
        const cartItem = state.cartItems.find(
          (item) =>
            item.id === product.id &&
            (product.cartItemId ? product.cartItemId === item.cartItemId : true)
        );
        if (!cartItem) {
          state.cartItems.push({
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            // cartItemId: uuidv4(),
          });
        } else {
          state.cartItems = state.cartItems.map((item) => {
            if (item.cartItemId === cartItem.cartItemId) {
              return {
                ...item,
                quantity: product.quantity
                  ? item.quantity + product.quantity
                  : item.quantity + 1,
              };
            }
            return item;
          });
        }
      }

      toast.success("Added To Cart", { position: "bottom-left" });
    },
    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemId !== action.payload
      );
      //   cogoToast.error("Removed From Cart", { position: "bottom-left" });
    },
    decreaseQuantity(state, action) {
      const product = action.payload;
      if (product.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.cartItemId !== product.cartItemId
        );
        toast.error("Removed From Cart", { position: "bottom-left" });
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.cartItemId === product.cartItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        toast.warn("Item Decremented From Cart", {
          position: "bottom-left",
        });
      }
    },
    deleteAllFromCart(state) {
      state.cart = [];
    },

    addToCheckout(state, action) {
      state.checkout = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApiSlice.endpoints.getCart.matchFulfilled,
      (state, action) => {
        state.cart = action.payload.data;
      }
    );
    builder.addMatcher(
      cartApiSlice.endpoints.addCartItem.matchFulfilled,
      (state, action) => {
        state.cart = [action.payload.data];
      }
    );
    builder.addMatcher(
      cartApiSlice.endpoints.deleteCartItem.matchFulfilled,
      (state, action) => {
        state.cart = [action.payload.data];
      }
    );
  },
});

export const {
  addToCart,
  deleteFromCart,
  decreaseQuantity,
  deleteAllFromCart,
  addToCheckout,
} = cartSlice.actions;
export default cartSlice.reducer;
