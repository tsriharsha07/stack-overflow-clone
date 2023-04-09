import axios from 'axios';

export const askQuestion=(questionData,navigate)=>async(dispatch)=>{
    
    try {
        dispatch({type:'ASK_QUESTION_REQUEST'});
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data}=await axios.post('/api/v1/askquestion',questionData,config);
        dispatch({type:'ASK_QUESTION_SUCCESS',payload:data});
        navigate('/');
    } catch (error) {
        dispatch({
            type:'ASK_QUESTION_FAIL',
            payload:error.message
        })
    }
}

export const getAllQuestions=()=>async(dispatch)=>{
    try {
        dispatch({type:'GET_ALL_QUESTION_REQUEST'});
        const {data}=await axios.get('/api/v1/getquestions');
        
        dispatch({type:'GET_ALL_QUESTION_SUCCESS',payload:data});
    } catch (error) {
        dispatch({
            type:'GET_ALL_QUESTION_FAIL',
            payload:error.message
        })
    }
}

export const addAnswer=(id,noOfAnswers,answerBody,userAnswered,userId)=>async(dispatch)=>{
    
    try {
        dispatch({type:'ADD_QUESTION_REQUEST'});
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data}=await axios.put(`/api/v1/askanswer/${id}`,{noOfAnswers,answerBody,userAnswered,userId},config);
        dispatch({type:'ADD_QUESTION_SUCCESS',payload:data});
        dispatch(getAllQuestions());
    } catch (error) {
        dispatch({
            type:'ADD_QUESTION_FAIL',
            payload:error.message
        })
    }
}

export const deleteQuestion=(id)=>async(dispatch)=>{
    
    try {
        dispatch({type:'DELETE_QUESTION_REQUEST'});
        const {data}=await axios.delete(`/api/v1/question/delete/${id}`);
        dispatch({type:'DELETE_QUESTION_SUCCESS',payload:data});
        
    } catch (error) {
        dispatch({
            type:'DELETE_QUESTION_FAIL',
            payload:error.message
        })
    }
}

export const deleteAnswer=(id,answerId,noOfAnswers)=>async(dispatch)=>{
    console.log(answerId);
    try {
        dispatch({type:'DELETE_QUESTION_REQUEST'});
        const {data}=await axios.put(`/api/v1/answer/delete/${id}`,{answerId,noOfAnswers});
        dispatch({type:'DELETE_QUESTION_SUCCESS',payload:data});
        dispatch(getAllQuestions())
    } catch (error) {
        dispatch({
            type:'DELETE_QUESTION_FAIL',
            payload:error.message
        })
    }
}

export const voteQuestion=(id,value,userId)=>async(dispatch)=>{
    try {
        dispatch({type:'VOTE_QUESTION_REQUEST'});
        
        const {data}=await axios.put(`/api/v1/question/vote/${id}`,{value,userId});
        dispatch({type:'VOTE_QUESTION_SUCCESS',payload:data});
        dispatch(getAllQuestions());
    } catch (error) {
        dispatch({
            type:'VOTE_QUESTION_FAIL',
            payload:error.message
        })
    }
}