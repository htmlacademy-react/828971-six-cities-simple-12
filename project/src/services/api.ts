import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {REQUEST_TIMEOUT, URL_API} from '../constants';
import {getToken} from './token';
import {StatusCodes} from 'http-status-codes/build/cjs';
import {store} from '../store';
import {loadingData} from '../store/loading-data/loading-data.slice';


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    method: 'get',
    baseURL: URL_API,
    timeout: REQUEST_TIMEOUT,
  });

  const StatusCodeMapping: Record<number, boolean> = {
    [StatusCodes.BAD_REQUEST]: true,
    [StatusCodes.UNAUTHORIZED]: true,
    [StatusCodes.NOT_FOUND]: true
  };

  const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

  //это перехватчик, способ вмешаться в запрос перед отправкой
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    // store.dispatch(loadingData.actions.setError(`${response.data.error} this is ${response.status}`));
    //todo здесь написать, что если статус не 200 - то надо это передать в текст ошибки, возможно try catch
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        store.dispatch(loadingData.actions.setError(`${error.response.data.error} this is ${error.response.status}`));
      }
      throw error;
    }
  );

  return api;
};


