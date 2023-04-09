import axios from 'axios';

export const signUp=(userData)=>async(dispatch)=>{
    
    try {
        dispatch({type:'REGISTER_USER_REQUEST'});
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data}=await axios.post('/api/v1/signup',userData,config);
        console.log(data);
        dispatch({type:'REGISTER_USER_SUCCESS',payload:data});
    } catch (error) {
        dispatch({
            type:'REGISTER_USER_FAIL',
            payload:error.message
        })
    }
}


export const logIn=(userData)=>async(dispatch)=>{
    
    try {
        dispatch({type:'LOGIN_USER_REQUEST'});
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data}=await axios.post('/api/v1/login',userData,config);
        console.log(data,"Hi");
        dispatch({type:'LOGIN_USER_SUCCESS',payload:data});
    } catch (error) {
        dispatch({
            type:'LOGIN_USER_FAIL',
            payload:error.message
        })
    }
}

export const getAllUsers=async(dispatch)=>{
        try {
            dispatch({type:'GET_ALL_USERS_REQUEST'});
            const {data}=await axios.get('/api/v1/getallusers');
            console.log(data);
            dispatch({type:'GET_ALL_USERS_SUCCESS',payload:data});
        } catch (error) {
            dispatch({
                type:'GET_ALL_USERS_FAIL',
                payload:error.message
            })
        }
    
}

export const updateUserProfile = (id,userData) =>async(dispatch)=>{
    try {
        dispatch({type:'UPDATE_USER_PROFILE_REQUEST'});
        
        const {data}=await axios.put(`/api/v1/user/update/${id}`,userData);
        
        dispatch({type:'UPDATE_USER_PROFILE_SUCCESS',payload:data});
    } catch (error) {
        dispatch({
            type:'UPDATE_USER_PROFILE_FAIL',
            payload:error.message
        })
    }
}