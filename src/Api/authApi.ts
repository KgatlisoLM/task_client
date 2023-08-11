import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7245/api/"
    }),
    endpoints: (builder) => ({

        LoginUser: builder.mutation({
            query: (userCredentials) => ({
                url: "auth/login",
                method:"POST",
                headers:{
                    "Content-type" : "application/json",
                },
                body: userCredentials
            }),
        }),

    }),
});

export const { useLoginUserMutation } = authApi;
export default authApi;