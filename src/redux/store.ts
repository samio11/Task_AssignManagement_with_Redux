import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/task/taskSlice";
import { baseApi } from "./features/api/baseApi";
export const store = configureStore({
  reducer: {
    todo: taskSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
