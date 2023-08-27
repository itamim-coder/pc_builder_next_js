import { api } from "@/redux/Api/apiSlice";

const categoriesApi = api.injectEndpoints({
  endpoints: (builder: { query: (arg0: { query: () => string; }) => any; }) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),

    // singleBook: builder.query({
    //   query: (id) => `/books/${id}`,
    // }),
  }),
});

export const {useGetCategoriesQuery} = categoriesApi;
