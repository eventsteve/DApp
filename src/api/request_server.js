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