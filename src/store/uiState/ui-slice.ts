import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Colors } from "./ui-data-models";

interface UiState {
  drawerIsVisible: boolean;
  settingIsVisible: boolean;
  colorsSelected: Colors;
}

const initialState: UiState = {
  drawerIsVisible: true,
  settingIsVisible: false,
  colorsSelected: {
    primary: "#29b6f6",
    secondary: "#9c27b0",
    background: "#1a2035;",
    paper: "#202940",
    text: "rgb(255,255,255)",
    icon: "rgba(255,255,255,0.5)",
  },
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
    colorsSelection: (state, action: PayloadAction<Colors>) => {
      state.colorsSelected = action.payload;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
