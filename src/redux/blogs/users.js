import Axios from 'axios';
import { API_TOKEN, USER_URL } from '../../helpers/api/endPoints';

// constants
const FETCH_USERS = 'PORTFOLIO/BLOGS/USERS';

// actions
const fetchUsers = (payload) => ({
  type: FETCH_USERS,
  payload,
});

// initial-state
const initialState = [];

// API-functions
export const fetchUsersApi = () => async (dispatch) => {
  const returnValue = await Axios.post(`${USER_URL}/load`, {
    headers: {
      Authorization: API_TOKEN,
    },
  });
  const { users } = returnValue.data.data;
  dispatch(fetchUsers(users));
};

// reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;