import { createSlice } from "@reduxjs/toolkit";

const toggleslice = createSlice({
  name: "toggle",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen; // Modify the draft directly
    },
  },
});

export const { toggleMenu } = toggleslice.actions;
export default toggleslice.reducer;