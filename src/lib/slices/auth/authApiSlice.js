import { apiSlice } from '../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['login'],
      tagTypes: ['googleAuthLogin'],
    }),
    googleAuthLogin: builder.mutation({
      query: (body) => ({
        url: '/user/auth/google',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['googleAuthLogin'],
    }),

    register: builder.mutation({
      query: (body) => ({
        url: '/user/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['register'],
    }),

    updateUser: builder.mutation({
      query: (body) => ({
        url: '/user/update',
        method: 'POST',
        body,
        formData: true,
      }),
      tagsTypes: ['updateUser'],
      invalidatesTags: ['updateUser'],
    }),
    sendOtpEmail: builder.mutation({
      query: (body) => ({
        url: '/user',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['sendOtpEmail'],
    }),
    verifyOtp: builder.mutation({
      query: (body) => ({
        url: '/user/verify/registerOTP',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['verifyOtp'],
    }),

    updateUserDetails: builder.mutation({
      query: (body) => ({
        url: '/user',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['updateUserDetails'],
    }),
  }),
});

export const {
  useLoginMutation,
  useGoogleAuthLoginMutation,
  useRegisterMutation,
  useWeb3AuthMutation,
  useUpdateUserMutation,
  useSendOtpEmailMutation,
  useVerifyOtpMutation,
  useUpdateUserDetailsMutation,
} = authApiSlice;
