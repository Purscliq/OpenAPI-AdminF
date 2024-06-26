import { ApiSlice } from "..";

const authSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["developer"],
}).injectEndpoints({
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
    getComplianceDetails: builder.query({
      query: (id) => ({
        url: `admin/compliance/businesses/${id}/director`,
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
    getsingleBusinessDetails: builder.query({
      query: (id) => ({
        url: `admin/compliance/businesses/${id}`,
        method: "GET",
      }),
    }),
    getSingleDetailsKYC: builder.query({
      query: (id) => ({
        url: `admin/businesses/${id}/kyc`,
        method: "GET",
      }),
    }),
    getBusinessSummary: builder.query({
      query: () => ({
        url: "admin/businesses/summary",
        method: "GET",
      }),
    }),
    getAllBusiness: builder.query({
      query: () => ({
        url: "business/all",
        method: "GET",
      }),
    }),
    getCustomer: builder.query({
      query: (id) => ({
        url: `admin/businesses/${id}/customers`,
        method: "GET",
      }),
    }),
    getCostomerDetails: builder.query({
      query: (id) => ({
        url: `business/customers/${id}`,
        method: "GET",
      }),
    }),
    getCostomerKYC: builder.query({
      query: (id) => ({
        url: `admin/businesses/customers/${id}/kyc`,
        method: "GET",
      }),
    }),
    getCostomerTransaction: builder.query({
      query: (id) => ({
        url: `admin/businesses/customers/${id}/transactions`,
        method: "GET",
      }),
    }),
    getBusinessDeveloperKey: builder.query({
      query: (id) => ({
        url: `admin/businesses/${id}/developers/resources`,
        method: "GET",
      }),
      providesTags: ["developer"],
    }),
    deleteApikey: builder.mutation({
      query: (id) => ({
        url: `auth/api_keys/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["developer"],
    }),
    deleteWebHookey: builder.mutation({
      query: (id) => ({
        url: `users/webhooks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["developer"],
    }),
    activateWebhook: builder.mutation({
      query: (id) => ({
        url: `admin/businesses/developers/webhooks/${id}/activate`,
        method: "POST",
      }),
      invalidatesTags: ["developer"],
    }),
    deactivateWebhook: builder.mutation({
      query: (id) => ({
        url: `admin/businesses/developers/webhooks/${id}/deactivate`,
        method: "POST",
      }),
      invalidatesTags: ["developer"],
    }),
    deleteIP: builder.mutation({
      query: (id) => ({
        url: `users/ip-address/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["developer"],
    }),
    activateIP: builder.mutation({
      query: (id) => ({
        url: `admin/businesses/developers/ipaddress/${id}/activate`,
        method: "POST",
      }),
      invalidatesTags: ["developer"],
    }),
    deactivateIP: builder.mutation({
      query: (id) => ({
        url: `admin/businesses/developers/ipaddress/${id}/deactivate`,
        method: "POST",
      }),
      invalidatesTags: ["developer"],
    }),
    getDeveloperSummary: builder.query({
      query: () => ({
        url: "admin/businesses/developers/summary",
        method: "GET",
      }),
    }),
    getTransacSummary: builder.query({
      query: () => ({
        url: "admin/transactions/summary",
        method: "GET",
      }),
    }),
    getTransaction: builder.query({
      query: () => ({
        url: "/admin/transactions",
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
  useGetComplianceDetailsQuery,
  useGetsingleBusinessDetailsQuery,
  useGetSingleDetailsKYCQuery,
  useGetBusinessSummaryQuery,
  useGetAllBusinessQuery,
  useGetCustomerQuery,
  useGetCostomerDetailsQuery,
  useGetCostomerKYCQuery,
  useGetCostomerTransactionQuery,
  useGetBusinessDeveloperKeyQuery,
  useDeleteApikeyMutation,
  useDeleteWebHookeyMutation,
  useActivateWebhookMutation,
  useDeactivateWebhookMutation,
  useDeleteIPMutation,
  useActivateIPMutation,
  useDeactivateIPMutation,
  useGetDeveloperSummaryQuery,
  useGetTransacSummaryQuery,
  useGetTransactionQuery,
} = authSlice;
