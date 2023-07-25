

export default function reducer(state, action) {
    switch (action.type) {
        case "SET_FIRSTNAME":
            return { ...state, firstName: action.payload.firstN }
            break;
        case "SET_LASTNAME":
            return { ...state, lastName: action.payload.lastN }
            break;
        case "SET_EMAIL":
            return { ...state, email: action.payload.email }
            break;
        case "SET_PASSWORD":
            return { ...state, password: action.payload.passw }
            break;
        case "SET_STEP":
            return { ...state, step: action.payload.step }

            break;
        default:
            return state
    }
}

