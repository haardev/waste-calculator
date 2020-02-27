import {
    RESET_FORM,
    SUBMIT_FORM_ERROR,
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS,
    UPDATE_FORM
} from '../actions/types';

const initialState = {
    form: {
        gender: '',
        age: '',
        frequencyOfThrowing: '',
        countTimesThrown: '',
        methodOfDisposing: '',
        materialType: '',
        mostThrownItems: '',
    },
    results: null,
    isSubmitted: false,
    isFetching: false,
    errors: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FORM: {
            const { key, value } = action.payload;
            return {
                ...state,
                form: {
                    ...state.form,
                    [key]: value
                }
            };
        }
        case RESET_FORM: {
            return {
                ...initialState
            };
        }
        case SUBMIT_FORM_REQUEST: {
            return {
                ...state,
                isFetching: true
            };
        }
        case SUBMIT_FORM_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                isSubmitted: true,
                results: action.payload
            };
        }
        case SUBMIT_FORM_ERROR: {
            return {
                ...state,
                isFetching: false,
                isSubmitted: false
            };
        }
        default:
            return state;
    }
}
