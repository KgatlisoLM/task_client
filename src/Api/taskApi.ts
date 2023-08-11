import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7245/api/",
        prepareHeaders: (headers:Headers, api) => {
            const token = localStorage.getItem("token");
            token && headers.append("Authorization", "Bearer " + token)
        },
    }),
    tagTypes: ["Tasks"],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({
                url: "tasks"
            }),
            providesTags: ["Tasks"]
        }),
        getTaskId: builder.query({
            query: (id) => ({
                url: `tasks/${id}`
            }),
            providesTags: ["Tasks"]
        }),
        createTask: builder.mutation({
            query:(data) => ({
                url: "tasks",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Tasks"]
        }),
        updateTask: builder.mutation({
            query:({data,id}) => ({
                url: "tasks/" + id,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Tasks"]
        }),
        deleteTask: builder.mutation({
            query:(id) => ({
                url: "tasks/" + id,
                method: "DELETE",
            }),
            invalidatesTags: ["Tasks"]
        }),
    }),
});

export const { 
   useGetTasksQuery,
   useGetTaskIdQuery,
   useCreateTaskMutation,
   useDeleteTaskMutation

} = taskApi;

export default taskApi;