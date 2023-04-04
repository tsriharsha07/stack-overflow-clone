import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';

const DisplayAnswer = ({ question }) => {
    console.log(question);
    return (
        <div>
            {
                question.answer.map((answer) => (
                    <div className='display-ans' key={answer._id}>
                        <p>{answer.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type='button'>Share</button>
                                <button type='button'>Delete</button>
                            </div>
                            <div>
                                <p>answer {answer.answeredOn}</p>
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
