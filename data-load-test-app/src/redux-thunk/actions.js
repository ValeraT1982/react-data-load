import Api from "../api"

export const LOAD_USERS_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING';
export const LOAD_USERS_SUCCESS = 'REDUX_THUNK_LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR';

export const loadUsers = () => dispatch => {
    dispatch({ type: LOAD_USERS_LOADING });

    Api.getUsers()
        .then(response => response.json())
        .then(
            data => dispatch({ type: LOAD_USERS_SUCCESS, data }),
            error => dispatch({ type: LOAD_USERS_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};
