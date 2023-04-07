import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './HomeMainBar.css'
import QuestionsList from './QuestionsList';
import {useDispatch, useSelector} from 'react-redux'
import { getAllQuestions } from '../../actions/questionActions';


const HomeMainBar = () => {
  const dispatch=useDispatch()
  const {allQuestions}=useSelector(state=>state.allQuestions);
  useEffect(()=>{
    dispatch(getAllQuestions());
  },[dispatch])


  var questionsList = [{
    _id: 1,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    userPosted: "mano",
    userId: 1,
    askedOn: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  }, {
    _id: 2,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "mano",
    askedOn: "jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  }, {
    _id: 3,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "mano",
    askedOn: "jan 1",
    userId: 1,
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  }]
  const user = 1;
  const checkAuth = () => {
    if (user === null) {
      alert('Login or Signup to ask a question')
    }
    
    
  }

  const location = useLocation();
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        <div className='main-bar-head'>{location.pathname === '/' ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
          <Link to={user!==null ? '/askquestion': '/login'} onClick={checkAuth} className='ask-btn'>Ask Question</Link></div>
        <div>
          {
            questionsList === null ? (<h1>Loading....</h1>) : (
              <>
                <p>{questionsList.length} questions</p>
                <QuestionsList questionsList={allQuestions} />
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default HomeMainBar;
