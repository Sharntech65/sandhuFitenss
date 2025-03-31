import { apiSlice } from "../api/apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => `/cart`,
      tagsTypes: ["cart"],
    }),

    addCartItem: builder.mutation({
      query: (body) => ({
        url: "/cart/add",
        method: "POST",
        body,
      }),
      tagsTypes: ["addCartItem"],
      invalidatesTags: ["addCartItem"],
    }),
    deleteCartItem: builder.mutation({
      query: (body) => ({
        url: `/cart/delete`,
        method: "POST",
        body,
      }),
      tagsTypes: ["deleteCartItem"],
      invalidatesTags: ["deleteCartItem"],
    }),
  }),
});
export const {
  useGetCartQuery,
  useAddCartItemMutation,
  useDeleteCartItemMutation,
} = cartApiSlice;
