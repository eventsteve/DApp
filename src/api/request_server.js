import {request, mergeQueryParams} from './request';

const getDomain = (parameters) => {
    return parameters.$domain ? parameters.$domain : API_ADDRESS;
};
const getConfig = (parameters) => {
    return parameters.$config ? parameters.$config : {};
};

export const getAllMember = function(parameters = {}) {
    let path = '/members';
    let queryParameters = {};
    let jsonBody = {};
    let form = {};

    queryParameters = mergeQueryParams(parameters, queryParameters);
    return request(
        'GET',
        getDomain(parameters) + path,
        queryParameters,
        jsonBody,
        form,
        getConfig(parameters)
    );
};

export const getAllDoc = function(parameters = {}) {
  let path = '/documents';
  let queryParameters = {};
  let jsonBody = {};
  let form = {};

  queryParameters = mergeQueryParams(parameters, queryParameters);
  return request(
      'GET',
      getDomain(parameters) + path,
      queryParameters,
      jsonBody,
      form,
      getConfig(parameters)
  );
};

export const addNewDoc = function(parameters = {}) {
    let path = '/documents';
    let queryParameters = {};
    let jsonBody = {};
    let form = {};

    if (parameters['numDoc'] !== undefined) {
        form['num_doc'] = parameters['numDoc'];
    }

    if (parameters['name'] !== undefined) {
        form['name'] = parameters['name'];
    }

    if (parameters['contentHash'] !== undefined) {
        form['hash_content'] = parameters['contentHash'];
    }

    if (parameters['linkIpfsCrypt'] !== undefined) {
        form['link_ipfs_crypt'] = parameters['linkIpfsCrypt'];
    }

    if (parameters['owner'] !== undefined) {
        form['owner'] = parameters['owner'];
    }
  
    queryParameters = mergeQueryParams(parameters, queryParameters);
    return request(
        'POST',
        getDomain(parameters) + path,
        queryParameters,
        jsonBody,
        form,
        getConfig(parameters)
    );
  };