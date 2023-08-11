import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const statusApi = createApi({
    reducerPath: "statusApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7245/api/",
    }),
    tagTypes: ["Status"],
    endpoints: (builder) => ({
        getStatus: builder.query({
            query: () => ({
                url: "status"
            }),
            providesTags: ["Status"]
        })
    }),
});

export const { 
    useGetStatusQuery, 
} = statusApi;

export default statusApi;