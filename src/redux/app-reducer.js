import {getLoginThunkCreator} from "./auth-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED'

let initialProfile =   {
    initialized:false,
}
const appReducer = (state=initialProfile,action) =>
{
    switch (action.type) {
        case SET_INITIALIZED:
        {
         //   debugger
            return {...state,initialized: true}
        }
        default:
            return state;
    }
}
export const setInitialized = () =>
{
    return{type: SET_INITIALIZED,}
}
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getLoginThunkCreator())
    Promise.all([promise]).then( () => {
        dispatch(setInitialized())
    })
}
export default appReducer;