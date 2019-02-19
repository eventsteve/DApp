import * as request from 'api/request_server';

const FETCH_MEMBER = 'home/FETCH_MEMBER';
const FETCH_DOC = 'home/FETCH_DOC';

export const fetchMembers = () => {
  return (dispatch) => {
    request.getAllMember()
    .then((response) => {
      dispatch({
        type: FETCH_MEMBER,
        payload: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  };
}

export const fetchDocuments = () => {
  return (dispatch) => {
    request.getAllDoc()
    .then((response) => {
      dispatch({
        type: FETCH_DOC,
        payload: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  };
}

const initState = {
  members: [],
  documents: []
}

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MEMBER:
      return { ...state, members: action.payload };
      case FETCH_DOC:
      return { ...state, documents: action.payload };
    default:
      return state;
  }
};