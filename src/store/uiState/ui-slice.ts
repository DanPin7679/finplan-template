import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomThemes } from "./ui-data-models";

interface UiState {
  drawerIsVisible: boolean;
  settingIsVisible: boolean;
  customTheme: CustomThemes;
}

const initialState: UiState = {
  drawerIsVisible: true,
  settingIsVisible: false,
  customTheme: CustomThemes.dark,
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
    colorsSelection: (state, action: PayloadAction<CustomThemes>) => {
      state.customTheme = action.payload;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
