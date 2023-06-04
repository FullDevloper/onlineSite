import { createSlice } from "@reduxjs/toolkit";
// import axios from "../../axios";
// import S3 from "../../utils/s3";


// ----------------------------------------------------------------------

const initialState = {

  sideBar: {
    open: false,
 // can be CONTACT, STARRED, SHARED
  },
  authBar:{
    opens:false
  },
  isLoggedIn: true,

  open:false,

};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
  
    // Toggle Sidebar
    toggleSideBar(state) {
      state.sideBar.open = !state.sideBar.open;
    },

    authToggle(state){
      state.open=!state.open
    },
    openSnackBar(state, action) {
      console.log(action.payload);
      state.open = true;

    },
    closeSnackBar(state) {
      state.open = false;
    },

  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export const closeSnackBar = () => async (dispatch,getState) => {
  dispatch(slice.actions.closeSnackBar());
};
export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSideBar());
  };
}
export function AuthToggle() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.authToggle());
  };
}

export const showSnackbar =
  () =>
  async (dispatch) => {
    dispatch(
      slice.actions.closeSnackBar()
    );    
  };

