import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { userReducer } from './reducers/authreducer';
import { addAnswerReducer, allQuestionsReducer, deleteQuestionReducer, questionReducer } from './reducers/questionReducer';
import { composeWithDevTools} from 'redux-devtools-extension'

const reducer=combineReducers({
    user:userReducer,
    question:questionReducer,
    allQuestions:allQuestionsReducer,
    addAnswer:addAnswerReducer,
    deleteQuestion:deleteQuestionReducer
});

const middleware=[thunk]

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;