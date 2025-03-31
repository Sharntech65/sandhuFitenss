import { apiSlice } from '../api/apiSlice';

export const addressApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCountry: builder.query({
      query: () => `/address/country`,
      tagsTypes: ['country'],
    }),
    getCountryStates: builder.query({
      query: (id) => `/address/country/${id}/state`,
      tagsTypes: ['countryStates'],
    }),
    getStateCities: builder.query({
      query: (id) => `/address/state/${id}/city`,
      tagsTypes: ['stateCities'],
    }),
  }),
});
export const {
  useGetCountryQuery,
  useGetCountryStatesQuery,
  useGetStateCitiesQuery,
} = addressApiSlice;
