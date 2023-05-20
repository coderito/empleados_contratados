import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false, formId: undefined },
};

export const reducerSlice = createSlice({
  name: "crudapp",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
        state.client.toggleForm = !state.client.toggleForm
    },
    updateAction: (state, action) => {
    }
  },
});

export const {toggleChangeAction, updateAction} = reducerSlice.actions

export default reducerSlice.reducer
