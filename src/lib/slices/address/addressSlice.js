import { addressApiSlice } from "./addressApiSlice";

const { createSlice } = require("@reduxjs/toolkit");

const addressSlice = createSlice({
  name: "address",
  initialState: {
    country: [],
    states: [],
    city: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      addressApiSlice.endpoints.getCountry.matchFulfilled,
      (state, action) => {
        const country = action.payload.data.map((el) => ({
          label: el.name,
          value: el._id,
        }));
        state.country = country;
      }
    );
    builder.addMatcher(
      addressApiSlice.endpoints.getCountryStates.matchFulfilled,
      (state, action) => {
        const states = [...action.payload.data].map((el) => ({
          label: el.name,
          value: el._id,
        }));
        state.states = states;
      }
    );
    builder.addMatcher(
      addressApiSlice.endpoints.getStateCities.matchFulfilled,
      (state, action) => {
        const city = [...action.payload.data].map((el) => ({
          label: el.name,
          value: el._id,
        }));
        state.city = city;
      }
    );
  },
});

export const {} = addressSlice.actions;
export default addressSlice.reducer;
