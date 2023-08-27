import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedComponents: {},
};

const pcBuilderSlice = createSlice({
  name: 'pcBuilder',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const { category, component } = action.payload;
      state.addedComponents[category] = [
        ...(state.addedComponents[category] || []),
        component,
      ];
    },
    removeComponent: (state, action) => {
      const { category, componentId } = action.payload;
      state.addedComponents[category] = state.addedComponents[category].filter(
        (component: { id: any; }) => component.id !== componentId
      );
    },
  },
});

export const { addComponent, removeComponent} = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
