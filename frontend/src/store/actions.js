import axiosApi from "../axiosApi";

export const SHORTEN_REQUEST = 'SHORTEN_REQUEST';
export const SHORTEN_SUCCESS = 'SHORTEN_SUCCESS';
export const SHORTEN_FAILURE = 'SHORTEN_FAILURE';

export const shortenRequest = () => ({type: SHORTEN_REQUEST});
export const shortenSuccess = link => ({type: SHORTEN_SUCCESS, payload: link});
export const shortenFailure = error => ({type: SHORTEN_FAILURE, payload: error});

export const getShortenLink = link => {
    return async dispatch => {
        dispatch(shortenRequest());
        try {
            const short = await axiosApi.post('/links', {
                "URL": link
            });

            dispatch(shortenSuccess(short.data.shortUrl));
        } catch (error) {
            dispatch(shortenFailure(error.message));
            throw error;
        }
    };
};