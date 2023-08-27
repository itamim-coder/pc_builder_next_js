import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Api/apiSlice";
import categoriesReducer from "./Features/categories/categoriesSlice";
import pc_builderReducer from "./Features/pc_builder/pc_builderslice";

export const store = configureStore({
  reducer: {
    category: categoriesReducer,
    pcBuilder: pc_builderReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
