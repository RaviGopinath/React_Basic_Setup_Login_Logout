export const InitialState = {
    Auth: JSON.parse(localStorage.getItem("authentication"))
}

export const stateReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return {
                ...state,
                Auth : action.payload
            }
        case "logout":
            return {
                ...state,
                Auth : action.payload
            }
        default:
            return state
    }
}