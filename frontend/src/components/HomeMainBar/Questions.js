import React from 'react';
import { Link } from 'react-router-dom';

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
      <div className='display-votes-ans'>
        <p>{question.upVote.length - question.downVote.length} </p>
        <p>votes</p>
      </div>
      <div className='display-votes-ans'>
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className='display-question-details'>
        <Link to={`/questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
        <div className='display-tags-time'>
            <div className='display-tags'>
                {
                    question && question.tags && question.tags.map((tag) => (
                        <p key={tag.id}>{tag}</p>
                    ))
                }
            </div>
            <p className='display-time'>
                asked {question.askedOn} by {question.userPosted}
            </p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
