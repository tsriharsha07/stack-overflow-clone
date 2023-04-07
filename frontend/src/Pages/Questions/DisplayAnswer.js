import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux'
import { deleteAnswer } from '../../actions/questionActions';


const DisplayAnswer = ({ question }) => {
    const {user}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    const params=useParams()
    const id=params.id;
    const deleteHandler = (answerId,noOfAnswers) => {
        dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
    }
    return (
        <div>
            {
                question.answer.map((answer) => (
                    <div className='display-ans' key={answer._id}>
                        <p>{answer.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type='button'>Share</button>
                                {
                                    user?.name === question?.userPosted && <button type='button' onClick={()=>{deleteHandler(answer._id,question.noOfAnswers)}}>
                                        Delete
                                    </button>
                                }
                            </div>
                            <div>
                                <p>answer {moment(answer.answeredOn).fromNow()}</p>
                                <Link to={`user/${answer.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                    <Avatar backgroundColor="orange"
                                        px="8px"
                                        py="5px"
                                        borderRadius="4px">{answer.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {answer.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayAnswer;
