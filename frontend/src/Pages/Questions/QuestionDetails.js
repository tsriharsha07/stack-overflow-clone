import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert'
import { addAnswer, deleteQuestion, voteQuestion } from '../../actions/questionActions';
import moment from 'moment';
import copy from 'copy-to-clipboard'

const QuestionDetails = () => {
  const [Answer, setAnswer] = useState();

  const { allQuestions } = useSelector(state => state.allQuestions);
  const { user } = useSelector(state => state.user)
  const location = useLocation();
  const url = 'http://localhost:3000'
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  console.log(user);
  const submitHandler = (e, answerLength) => {
    e.preventDefault();
    if (user === undefined) {
      alert.error("Login to post an answer")
      navigate('/login')
    }

    else {
      if (Answer === '') {
        alert.error("Please enter an answer before submitting")
      }
      else {
        dispatch(addAnswer(id, answerLength + 1, Answer, user.name,user._id))
      }
    }
    setAnswer('')
  }
  console.log(user?.name,allQuestions);
  const handleShare = () => {
    copy(url + location.pathname);
    alert.success("Copied to clipboard")
  }
  const deleteHandler=()=>{
    dispatch(deleteQuestion(params.id))
    navigate('/');
  }
  const handleUpVote = () => {
    dispatch(voteQuestion(id,'upvote',user._id)) 
  }
  const handleDownVote = () => {
    dispatch(voteQuestion(id,'downvote',user._id)) 
  }

  return (
    <div className='question-details-page'>
      {
        allQuestions === null ? (
          <h1>Loading....</h1>
        ) : (
          <>
            {
              allQuestions && allQuestions.filter(question => question._id === params.id).map(question => (

                <div key={question._id}>
                  <section className='question-details-container'>
                    <h1>{question.questionTitle}</h1>
                    <div className='question-details-container-2'>
                      <div className="question-votes">
                        <img src={upvote} alt='Sort-up' width='18' className='votes-icon' onClick={handleUpVote}/>
                        <p>{question.upVote.length - question.downVote.length}</p>
                        <img src={downvote} alt='Sort-down' width='18' className='votes-icon' onClick={handleDownVote}/>
                      </div>
                      <div style={{ width: '100%' }}>
                        <p className='question-body'>{question.questionBody}</p>
                        <div className="question-details-tags">
                          {
                            question && question.tags && question.tags.map(tag => (
                              <p key={tag}>{tag}</p>
                            ))
                          }
                        </div>
                        <div className="question-actions-user">
                          <div>
                            <button type='button' onClick={handleShare}>
                              Share
                            </button>
                            {
                              user?.name === question?.userPosted && <button type='button' onClick={deleteHandler}>
                                Delete
                              </button>
                            }

                          </div>
                          <div>
                            <p>asked {moment(question.askedOn).fromNow()}</p>
                            <Link to={`user/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                              <Avatar backgroundColor="orange"
                                px="8px"
                                py="5px"
                                borderRadius="4px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                              <div>
                                {question.userPosted}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {
                    question.noOfAnswers !== 0 && (
                      <section className='question-answers-container'>
                        <h3>{question.noOfAnswers} answers</h3>
                        <DisplayAnswer key={question._id} question={question} />
                      </section>
                    )
                  }
                  <section className="post-ans-container">
                    <h3>Your Answer</h3>
                    <form onSubmit={(e) => { submitHandler(e, question.answer.length) }}>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={Answer}
                        onChange={(e) => {

                          setAnswer(e.target.value)
                        }}
                      ></textarea>
                      <br />
                      <input
                        type="submit"
                        className="post-ans-btn"
                        value="Post Your Answer"
                      />
                    </form>
                    <p>
                      Browse other Question tagged
                      {question && question.tags && question.tags.map((tag) => (
                        <Link to="/tags" key={tag} className="ans-tags">
                          {" "}
                          {tag}{" "}
                        </Link>
                      ))}{" "}
                      or
                      <Link
                        to="/askquestion"
                        style={{ textDecoration: "none", color: "#009dff" }}
                      >
                        {" "}
                        ask your own question.
                      </Link>
                    </p>
                  </section>
                </div>
              ))
            }
          </>
        )
      }
    </div>
  );
}

export default QuestionDetails;
