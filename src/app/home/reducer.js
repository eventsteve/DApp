import {getAllBlock, createNewBlock} from 'request_sc/doc_manager';

const FETCH_MEMBER = 'home/FETCH_MEMBER';
const FETCH_DOC = 'home/FETCH_DOC';


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