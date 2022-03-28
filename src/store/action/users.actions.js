export const FETCH_DATA   = 'FETCH_DATA';
export const ADD_USER_DATA = 'ADD_USER_DATA';
export const ADD_USERS = 'ADD_USERS';

export const fetchData = (result) => ({
  type: FETCH_DATA,
  payload: { result }
});

export const addUserData = (userData) => ({
  type: ADD_USER_DATA,
  payload: { result: userData }
})

export const addUsers = (users) => ({
  type: ADD_USERS,
  payload: { result: users }
})