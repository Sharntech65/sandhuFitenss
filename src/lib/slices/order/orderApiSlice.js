import { apiSlice } from "../api/apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    initiateOrder: builder.mutation({
      query: (body) => ({
        url: "/order/checkout",
        method: "POST",
        body,
      }),
      tagsTypes: ["initiateOrder"],
      invalidatesTags: ["initiateOrder"],
    }),
    updateOrderStatus: builder.mutation({
      query: (body) => ({
        url: "/order/update-status",
        method: "POST",
        body,
      }),
      tagsTypes: ["updateOrderStatus"],
      invalidatesTags: ["updateOrderStatus"],
    }),

    initiateFractionalPropertyOrder: builder.mutation({
      query: (body) => ({
        url: "/order/place-fractional-property-order",
        method: "POST",
        body,
      }),
      tagsTypes: ["initiateFractionalPropertyOrder"],
      invalidatesTags: ["initiateFractionalPropertyOrder"],
    }),
  }),
});
export const {
  useInitiateOrderMutation,
  useUpdateOrderStatusMutation,
  useInitiateFractionalPropertyOrderMutation,
} = orderApiSlice;
