import { getAllBlock } from 'request_sc/doc_manager';
import { parsenDataBlock } from 'utils/helper/common';

const FETCH_MEMBER = 'home/FETCH_MEMBER';
const FETCH_DOC = 'home/FETCH_DOC';


export const fetchDocuments = (contract) => {
  return (dispatch) => {
    getAllBlock(contract)
    .then((response) => {
      const parsenData = response.map(block => {
        return parsenDataBlock(block.returnValues);
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