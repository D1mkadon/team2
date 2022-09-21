const SET_NAME = "SET_NAME"
const SET_SURNAME = "SET_SURNAME"
const SET_EMAIL = "SET_EMAIL"
const defaulStore = {
    name: "",
    surname: "",
    email: "",
}

export default function authDataReducer(state = defaulStore, action) {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_SURNAME:
            return {
                ...state,
                surname: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }   
        default:
            return state
    }

}
export const setMainName = (name) => ({
    type: SET_NAME,
    payload: name

})
export const setMainSurname = (surname) => ({
    type: SET_SURNAME,
    payload: surname

})
export const setMainEmail = (email) => ({
    type: SET_EMAIL,
    payload: email

})