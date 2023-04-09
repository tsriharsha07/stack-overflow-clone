
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

export const allUsersReducer=(state={users:[]},action)=>{
    switch(action.type){
        case 'GET_ALL_USERS_REQUEST':
            return{
              ...state,
                loading:true
            }
        case 'GET_ALL_USERS_SUCCESS':
            return{
              ...state,
                loading:false,
                users:action.payload.users
            }
        case 'GET_ALL_USERS_FAIL':
            return{
              ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export const updateUserReducer = (state={}, action) =>{
    switch(action.type){
        case 'UPDATE_USER_REQUEST':
            return{
              ...state,
                loading:true
            }
        case 'UPDATE_USER_SUCCESS':
            return{
              ...state,
                loading:false,
                success:action.payload.success
            }
        case 'UPDATE_USER_FAIL':
            return{
              ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}