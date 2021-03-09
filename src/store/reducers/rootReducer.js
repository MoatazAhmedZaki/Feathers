import lanReducer from "./lanReducer";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import menuReducer from "./menuReducer"

const rootReducer = combineReducers({
  lan: lanReducer,
  auth: authReducer,
  menu:menuReducer

  
});


export default rootReducer