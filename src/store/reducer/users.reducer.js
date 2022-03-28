import { ADD_USERS, ADD_USER_DATA, FETCH_DATA } from "../action/users.actions";

const initialState = {
  items: [],
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        items: action.result,
      };
    case ADD_USER_DATA: {
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.result }
        ]
      };
    }

    case ADD_USERS:
      return {
        ...state,
        items: [
          ...action.result
        ]
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}

