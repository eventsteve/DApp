import axios from 'axios';
import * as qs from 'qs';
import {
    assign,
    isEmpty
} from 'lodash';

export const request = (method, url, queryParameters, jsonBody, form, config) => {
  method = method.toLowerCase();
  let keys = Object.keys(queryParameters);
  let queryUrl = url;
  if (keys.length > 0) {
      queryUrl = url + '?' + qs.stringify(queryParameters);
  }

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
  const defaultConfig = {
      method: method,
      responseType: 'json',
      withCredentials: false,
      headers
  };

  let mergedConfig;
  if (isEmpty(jsonBody) && isEmpty(form)) {
      mergedConfig = assign(defaultConfig, config);
  } else if (!isEmpty(jsonBody)) {
      /* For raw POST, PUT */
      mergedConfig = assign({
          data: jsonBody
      }, defaultConfig, config);
  } else {
      /* For form field POST, PUT */
      mergedConfig = assign({
          data: qs.stringify(form)
      }, defaultConfig, config);
  }
  return axios(queryUrl, mergedConfig)
};

export function mergeQueryParams(parameters, queryParameters) {
  if (parameters.$queryParameters) {
      Object.keys(parameters.$queryParameters)
          .forEach(function(parameterName) {
              let parameter = parameters.$queryParameters[parameterName];
              queryParameters[parameterName] = parameter;
          });
  }
  return queryParameters;
}