import React from 'react';
import Questions from './Questions';

const QuestionsList = ({questionsList}) => {
    return (
        <div>
            {questionsList.map((question) => {
                return (
                    <Questions question={question} />
                )

            })}
        </div>
    );
}

export default QuestionsList;
