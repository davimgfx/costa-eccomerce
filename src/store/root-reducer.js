import { combineReducers} from "redux";
import { userReducer } from "./user/user-reducer";

//root (boilerplate code)
export const rootReducer = combineReducers({
  user: userReducer,
});
