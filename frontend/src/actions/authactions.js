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