import axios, {AxiosInstance} from 'axios';
import {REQUEST_TIMEOUT, URL_API} from './constants';

export const createAPI = (): AxiosInstance => (
  axios.create({
    method: 'get',
    baseURL: URL_API,
    timeout: REQUEST_TIMEOUT,
  })
);
