
export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REGISTER_USER_REQUEST':
        case 'LOGIN_USER_REQUEST':    
            return { 
                ...state,
                loading: true 
            }
        case 'REGISTER_USER_SUCCESS':
            return { 
                loading: false,
                success:action.payload.success,
            }
        case 'LOGIN_USER_SUCCESS':
            return { 
                loading: false,
                isAuthenticated:action.payload.success,
                user:action.payload.user
            }
        case 'REGISTER_USER_FAIL':
        case 'LOGIN_USER_FAIL':
            return { 
                loading: false,
                error: action.payload
            }
        case 'LOGOUT_USER':
            return{
                loading:true,
                user:null
            }
        default:
            return state;
    }

}