
import {getAuthPersonalData} from '../Redux/auth-reducer';

const INITIALIZED_APP = 'INITIALIZED-APP';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_APP:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedApp = () => ({type: INITIALIZED_APP});

export const initializedAllApp = () => (dispatch) => {
    let promise = dispatch(getAuthPersonalData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedApp())
        });
}
export default appReducer;


