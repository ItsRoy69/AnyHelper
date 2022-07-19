import { combineReducers } from "redux";

import pemReducer from "./pem";
import customerReducer from "./customer";
import shopReducer from "./shop";
import adminReducer from "./admin";

export default combineReducers({
  pem: pemReducer,
  customer: customerReducer,
  shop: shopReducer,
  admin: adminReducer,
});
