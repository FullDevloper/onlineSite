import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
const initialState = {
  
  onelearn:null,
  error:"",
  allLearns:null,
  category:null,
  video:null,
  getVideo:null,
  userLearn:null
  };
  const slice = createSlice({
    name: "learn",
    initialState,
    reducers: {
      updateIsLoading(state, action) {
        state.error = action.payload.error;
    
      },
      LearnData(state, action) {
      state.onelearn=action.payload.onelearn;
        // state.token = action.payload.token;
        // state.user_id = action.payload.user_id;
      },
      CategoryData(state,action){
        state.category=action.payload.category
      },
      Learns(state,action){
        state.allLearns=action.payload.allLearns
      },
      userLearns(state,action){
        state.userLearn=action.payload.userLearn
      },
    //   signOut(state, action) {
    //     state.isLoggedIn = false;
    //     state.token = "";
    //     state.user_id = null;
    //   },
      video(state,action){
        state.getVideo=action.payload.getVideo
      }
    },
  });
  export default slice.reducer;
  export function LearnDatas(id) {
    // console.log(id,"learn")
    return async (dispatch) => {
      // Make API call here
  
      dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
  
      await axios
        .get(
          `/learn/oneLearn/${id}`,
        
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          // console.log(response);
          // console.log(response);
          dispatch(slice.actions.LearnData({ onelearn: response.data.data }));
      
        })
        .catch(function (error) {
          console.log(error);
          // dispatch(showSnackbar({ severity: "error", message: error.message }));
          // dispatch(
          //   slice.actions.updateIsLoading({ isLoading: false, error: true })
          // );
        });
    };
  }
  export function Category(){
    return async(dispatch)=>{
      dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
      await axios.get('/category/categories',
        {
          headers: {
            "Content-Type": "application/json",
          },
        
      })
      .then(function (response) {
        console.log(response);
        // console.log(response);
        dispatch(slice.actions.CategoryData({ category: response.data.data }));
    
      })
      .catch(function (error) {
        console.log(error);
        // dispatch(showSnackbar({ severity: "error", message: error.message }));
        // dispatch(
        //   slice.actions.updateIsLoading({ isLoading: false, error: true })
        // );
      });
    }
  }
  // export function Category(){
  //   return async(dispatch)=>{
  //     dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
  //     await axios.get('/category/categories',
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
        
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       // console.log(response);
  //       dispatch(slice.actions.CategoryData({ category: response.data.data }));
    
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       // dispatch(showSnackbar({ severity: "error", message: error.message }));
  //       // dispatch(
  //       //   slice.actions.updateIsLoading({ isLoading: false, error: true })
  //       // );
  //     });
  //   }
  // }

  export function learnData() {
    return async (dispatch) => {
      // Make API call here
  
      dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
  
      await axios
        .get(
          `/learn/learns`,
        
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          // console.log(response);
          dispatch(slice.actions.Learns({ allLearns: response.data.data }));
      
        })
        .catch(function (error) {
          console.log(error);
          // dispatch(showSnackbar({ severity: "error", message: error.message }));
          // dispatch(
          //   slice.actions.updateIsLoading({ isLoading: false, error: true })
          // );
        });
    };
  }

  export function newVideo(video,path,learnCode){
    return async (dispatch)=>{
      dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
     await axios.post(
        `/video/newVideo`,
        {
          VideoCode:video,
          VideoPath:path,
          LearnCode:learnCode
        },
      
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        // console.log(response);
        // dispatch(slice.actions.Learns({ allLearns: response.data.data }));
    
      })
      .catch(function (error) {
        console.log(error);
        // dispatch(showSnackbar({ severity: "error", message: error.message }));
        // dispatch(
        //   slice.actions.updateIsLoading({ isLoading: false, error: true })
        // );
      });
    }
  }
  export function videoGet(learnCode){
    console.log(learnCode,"lea")
    return async (dispatch)=>{
      dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
     await axios.get(
        `/video/${learnCode}/learn`,
        {headers: {"Content-Type": "application/json"},}).then(function (response) {
        console.log(response);
        // console.log(response);
        dispatch(slice.actions.video({ getVideo: response.data.data }));
    
      })
      .catch(function (error) {
        console.log(error);
        // dispatch(showSnackbar({ severity: "error", message: error.message }));
        // dispatch(
        //   slice.actions.updateIsLoading({ isLoading: false, error: true })
        // );
      });
    }
  }
  export function getLearnUser(id){
    return async(dispatch)=>{
      await axios.get(`/auth/mylearn/${id}`,{headers:{"Content-Type": "application/json"}}).then(
        function (response) {
          // console.log(response.data.data);
          // console.log(response);
          dispatch(slice.actions.userLearns({userLearn:response.data.data}))
          // console.log(response);
        }

      )
      .catch(function (error) {
        console.log(error);
        // dispatch(showSnackbar({ severity: "error", message: error.message }));
        // dispatch(
        //   slice.actions.updateIsLoading({ isLoading: false, error: true })
        // );
      });
    }
  }