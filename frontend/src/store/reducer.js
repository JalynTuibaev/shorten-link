import {SHORTEN_FAILURE, SHORTEN_REQUEST, SHORTEN_SUCCESS} from "./actions";

const initialState = {
    shortLink: '',
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHORTEN_REQUEST:
            return {...state, loading: true, error: null};
        case SHORTEN_SUCCESS:
            return {...state, loading: false, shortLink: action.payload};
        case SHORTEN_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default reducer;