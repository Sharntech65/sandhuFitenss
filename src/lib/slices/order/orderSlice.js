import { orderApiSlice } from "./orderApiSlice";

const { createSlice } = require("@reduxjs/toolkit");

const paymentMethod = [
  //   {
  //     id: "1",
  //     name: "Crypto Wallet",
  //     status: false,
  //     answer:
  //       "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode",
  //   },
  {
    id: "2",
    status: true,
    name: "Stripe",
    answer: "Pay with stripe",
  },
  //   {
  //     id: "3",
  //     status: false,
  //     name: "Card Payment",
  //     answer:
  //       "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.",
  //   },
];

const orderSlice = createSlice({
  name: "order",
  initialState: {
    paymentMethod: paymentMethod,
    activePaymentMethod: 2,
    paymentStatus: null,
  },
  reducers: {
    setPaymentMethod(state, action) {
      const { id, status } = action.payload;
      state.paymentMethod = state.paymentMethod.map((el) => {
        if (el.id === id) return { ...el, status: !el.status };
        return { ...el, status: false };
      });
      state.activePaymentMethod = status ? id : null;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      orderApiSlice.endpoints.updateOrderStatus.matchFulfilled,
      (state, action) => {
        state.paymentStatus = action.payload.data.status;
      }
    );
  },
});

export const { setPaymentMethod } = orderSlice.actions;
export default orderSlice.reducer;
