import * as request from 'api/request_server';

const FETCH_DOC = 'doc/FETCH_DOC';
const ADD_DOC = 'doc/ADD_DOC';

export const fetchDocuments = () => {
  return (dispatch) => {
    request.getAllDoc()
    .then((response) => {
      dispatch({
        type: FETCH_DOC,
        payload: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export const addNewDocuments = (params) => {
  return (dispatch) => {
    request.addNewDoc(params)
    .then((response) => {
      dispatch({
        type: ADD_DOC,
        payload: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

const initState = {
  documents: []
}

export const docReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DOC:
      return { ...state, documents: action.payload };
    case ADD_DOC:
      const newList = [ ...state.documents, action.payload ];
      return { ...state, documents: newList };
    default:
      return state;
  }
};