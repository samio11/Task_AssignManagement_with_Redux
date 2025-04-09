import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { deleteTask } from "../task/taskSlice";

export const baseApi = createApi({
  reducerPath: "baseAPi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    // Getting all task
    getAllTask: builder.query({
      query: () => "/tasks",
    }),
    createATask: builder.mutation({
      query: (taskData) => ({
        url: "/create-task",
        method: "POST",
        body: taskData,
      }),
    }),

    getATask: builder.query({
      query: (id: string) => `/tasks/${id}`,
    }),

    deleteTask: builder.mutation({
      query: (id: string) => ({
        url: `/delete-task/${id}`,
        method: "DELETE",
      }),
    }),

    updateTask: builder.mutation({
      query: (data) => ({
        url: `/update-task/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateATaskMutation,
  useDeleteTaskMutation,
  useGetATaskQuery,
  useGetAllTaskQuery,
  useUpdateTaskMutation,
} = baseApi;
