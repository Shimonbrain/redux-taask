import { createStore } from "redux";
import apiDataReducer from './reducer/users.reducer'

const store = createStore(
  apiDataReducer
);

export default store;