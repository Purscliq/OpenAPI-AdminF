import { ApiSlice } from "..";

const authSlice = ApiSlice.enhanceEndpoints({}).injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            localStorage.setItem(
              "refresh",
              apiResponse.data?.data?.token.refresh_token
            );
            localStorage.setItem(
              "token",
              apiResponse.data?.data?.token?.access_token
            );
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }),

    refresh: builder.mutation({
      query: (body) => ({
        url: "auth/login/refresh",
        method: "POST",
        body,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "auth/forgot-password",
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "auth/update-forgotten-password",
        method: "POST",
        body,
      }),
    }),
    getDashbaord: builder.query({
      query: () => ({
        url: "admin/dashboard",
        method: "GET",
      }),
    }),
    getNotification: builder.query({
      query: () => ({
        url: "admin/notifications?limit=5",
        method: "GET",
      }),
    }),
    getRecentBusiness: builder.query({
      query: () => ({
        url: "business/all?limit=5",
        method: "GET",
      }),
    }),
    getCompliance: builder.query({
      query: () => ({
        url: "admin/compliance/businesses",
        method: "GET",
      }),
    }),
    getAccountSumarry: builder.query({
      query: () => ({
        url: "admin/accounts/summary",
        method: "GET",
      }),
    }),
    getAlAccount: builder.query({
      query: () => ({
        url: "admin/accounts",
        method: "GET",
      }),
    }),
    getsingleAccountDetails: builder.query({
      query: (id) => ({
        url: `admin/accounts/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useLoginMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useGetDashbaordQuery,
  useLazyGetDashbaordQuery,
  useGetNotificationQuery,
  useGetRecentBusinessQuery,
  useGetComplianceQuery,
  useGetAccountSumarryQuery,
  useGetAlAccountQuery,
  useGetsingleAccountDetailsQuery,
} = authSlice;
