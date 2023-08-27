// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {};

// const categoriesSlice = createSlice({
//   name: "categories",
//   initialState,
//   reducers: {
//     selectCategory: (state, action) => {
//       const selectedCategory = action.payload;
//       state[selectedCategory] = [];
//     },
//     addComponent: (state, action) => {
//       const { title, id } = action.payload;
//       console.log(title, id);
//       console.log(action.payload);
//       // console.log(state[]);
//       //   state[title] = [...state[title], id];
//     },
//     removeComponent: (state, action) => {
//       const { category, id } = action.payload;
//       state[category] = state[category].filter(
//         (componentId) => componentId !== id
//       );
//     },
//   },
// });

// export const { selectCategory, addComponent, removeComponent } =
//   categoriesSlice.actions;

// export default categoriesSlice.reducer;
