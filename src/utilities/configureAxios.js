import axios from 'axios';
import {configKeys} from '../config/keys';
import interceptErrors from './interceptErrors';

/** -------------------Initiate axios instance--------------------------- **/

const configureAxios = () => {
  return axios.create({
    timeout: 10000,
    // withCredentials: false,
    baseURL: `${configKeys.BASE_URL}`,
  });
};

export const axiosInstance = configureAxios();

/** -------------------Request Intercepertor--------------------------- **/

axiosInstance.interceptors.request.use(async config => {
  // console.log('Request config==>', config);

  // ADD ACCESS TOKEN TO THE REQUEST HERE
  return config;
});

/** -------------------Response Intercepertor--------------------------- **/

axiosInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    const errors = interceptErrors(error);

    return Promise.reject(errors);
  },
);
