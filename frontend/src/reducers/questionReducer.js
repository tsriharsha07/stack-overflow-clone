
export const questionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ASK_QUESTION_REQUEST': 
            return { 
                ...state,
                loading: true 
            }
        case 'ASK_QUESTION_SUCCESS':
            return { 
                loading: false,
                success:action.payload.success,
                question:action.payload.user
            }
        case 'ASK_QUESTION_FAIL':
            return { 
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const allQuestionsReducer=(state={allQuestions:[]},action)=>{
    switch(action.type){
        case 'GET_ALL_QUESTION_REQUEST':
            return{
              ...state,
                loading:true
            }
        case 'GET_ALL_QUESTION_SUCCESS':
            return{
              ...state,
                loading:false,
                allQuestions:action.payload.questions
            }
        case 'GET_ALL_QUESTION_FAIL':
            return{
              ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export const addAnswerReducer=(state={},action)=>{
    switch(action.type){
        case 'ADD_QUESTION_REQUEST':
            return{
              ...state,
                loading:true
            }
        case 'ADD_QUESTION_SUCCESS':
            return{
              ...state,
                loading:false,
                success:action.payload.success
            }
        case 'ADD_QUESTION_FAIL':
            return{
              ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export const deleteQuestionReducer=(state={},action)=>{
    switch(action.type){
        case 'DELETE_QUESTION_REQUEST':
            return{
              ...state,
                loading:true
            }
        case 'DELETE_QUESTION_SUCCESS':
            return{
              ...state,
                loading:false,
                success:action.payload.success
            }
        case 'DELETE_QUESTION_FAIL':
            return{
              ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export const deleteAnswerReducer=(state={},action)=>{
    switch(action.type){
        case 'DELETE_ANSWER_REQUEST':
            return{
              ...state,
                loading:true
            }
        case 'DELETE_ANSWER_SUCCESS':
            return{
              ...state,
                loading:false,
                success:action.payload.success
            }
        case 'DELETE_ANSWER_FAIL':
            return{
              ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}