import {
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS,
    SUBMIT_FORM_ERROR,
    UPDATE_FORM, RESET_FORM
} from './types';
import { postForm } from '../api';

export const updateForm = (key, value) => (dispatch) => {
    dispatch({
        type: UPDATE_FORM,
        payload: {
            key,
            value
        }
    });
};

export const submitForm = (form) => async (dispatch) => {
    dispatch({ type: SUBMIT_FORM_REQUEST });

    try {
        const data = await postForm(form);
        dispatch({
            type: SUBMIT_FORM_SUCCESS,
            payload: data
        });
    }
    catch (ex) {
        dispatch({
            type: SUBMIT_FORM_ERROR,
            payload: ex
        });
    }
};

export const resetForm = () => (dispatch) => {
    dispatch({ type: RESET_FORM });
};
