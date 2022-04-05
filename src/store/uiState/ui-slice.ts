import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  drawerIsVisible: boolean;
  settingIsVisible: boolean;
}

const initialState: UiState = {
  drawerIsVisible: true,
  settingIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle: (state) => {
      state.drawerIsVisible = !state.drawerIsVisible;
    },
    toggleSetting: (state) => {
      state.settingIsVisible = !state.settingIsVisible;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
