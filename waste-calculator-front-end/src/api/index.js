import axios from 'axios';
import { API_URL } from '../settings';
import { handleResponse } from '../utilities/apiUtilities';

const instance = axios.create();

export const postForm = (form) => {
    return instance.post(API_URL, form).then(handleResponse);
};

export const getResult = (id) => {
    return instance.get(`${ API_URL }/${ id }`).then(handleResponse);
};
