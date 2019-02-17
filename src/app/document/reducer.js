const FETCH_USER = 'user/FETCH_USER';
const ADD_USER = 'user/ADD_USER';

export const fetchUser = () => {
  const users = [{username: 'phamtinh', age:'22'},{username: 'ngocthien', age:'24'}];
  return { type: FETCH_USER, users }
  // return (dispatch) => {
  //   
  //   dispatch({ type: FETCH_USER, users });
  // };
};

export const addUser = (data) => {
  return { type: ADD_USER, newUser: data }
};

const initState = {
  list: []
}

export const docReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, list: action.users };
    case ADD_USER:
      const newList = [ ...state.list, action.newUser ]
      return { ...state, list: newList };
    default:
      return state;
  }
};