// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = bea;

const baseQuery = fetchBaseQuery({
  baseUrl: "baseUrl",
  // baseUrl: 'http://192.168.1.38:8000/api/v1',
  //   prepareHeaders: (headers, { getState }) => {
  prepareHeaders: (headers, { getState, endpoint }) => {
    const UPLOAD_ENDPOINTS = ["addProperty", "updateUser"];

    const token = getState()?.auth?.token;
    if (token) {
      // if (auth.token) {
      headers.set("authorization", `Bearer ${token}`);
      // headers.set("authorization", auth.token);
    }

    if (!UPLOAD_ENDPOINTS.includes(endpoint)) {
      headers.set("content-type", "application/json");
      headers.set("ngrok-skip-browser-warning", "69420");
    }
    return headers;
  },
});

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: baseQuery,
  tagTypes: ["login"],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({}),
});
