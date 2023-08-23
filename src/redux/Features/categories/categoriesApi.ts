import { api } from "@/redux/Api/apiSlice";

const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),

    // singleBook: builder.query({
    //   query: (id) => `/books/${id}`,
    // }),
  }),
});

export const {useGetCategoriesQuery} = categoriesApi;
