import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import authReducer from "./slices/auth";
import appReducer from "./slices/app";
import learnReducer from "./slices/learn";
const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    //   whitelist: [],
    //   blacklist: [],
  };
  
  const rootReducer = combineReducers({

    auth: authReducer,
    app:appReducer,
    learn:learnReducer

  });
  
  export { rootPersistConfig, rootReducer };