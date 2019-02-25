import {getAllBlock, createNewBlock} from 'request_sc/doc_manager';

const FETCH_DOC = 'doc/FETCH_DOC';
const ADD_DOC = 'doc/ADD_DOC';

export const fetchDocuments = (contract) => {
  return (dispatch) => {
    getAllBlock(contract)
    .then((response) => {
      const parsenData = response.map(block => {
        return {
          numDoc: block.returnValues._numDoc,
          owner: block.returnValues._owner,
          name: block.returnValues._name,
          contentHash: block.returnValues._contentHash,
          linkIpfsCrypt: block.returnValues._linkIpfsCrypt,
          createdAt: block.returnValues._createdAt
        }
      })
      dispatch({
        type: FETCH_DOC,
        payload: parsenData
      })
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export const addNewDocuments = (params) => {
  return (dispatch) => {
    createNewBlock(params)
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
  documents: [],
  docDetail: null
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