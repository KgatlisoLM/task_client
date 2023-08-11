import { Middleware, MiddlewareAPI, configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import { authApi, statusApi, taskApi} from "../../Api";
import { taskReducer } from "./taskSlice";
import { statusReducer } from "./statusSlice";
import { authReducer } from "./authSlice";



const store = configureStore({
    reducer: {
        statusStore: statusReducer,
        taskStore: taskReducer,
        authStore: authReducer,
        [statusApi.reducerPath]: statusApi.reducer,
        [taskApi.reducerPath]: taskApi.reducer,
        [authApi.reducerPath]: authApi.reducer,

        
    },
    middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware()
          .concat(statusApi.middleware)
          .concat(taskApi.middleware)
          .concat(authApi.middleware) 
});

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.warn('We got a rejected action!')
    };

    return next(action)
}

export type RootState = ReturnType<typeof store.getState>;
export default store;