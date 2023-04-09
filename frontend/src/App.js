import './App.css';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import Questions from './Pages/Questions/Questions';
import AskQuestion from './Pages/AskQuestions/AskQuestion';
import DisplayQuestion from './Pages/Questions/DisplayQuestion';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllQuestions } from './actions/questionActions';
import Tags from './Pages/Tags/Tags';
import { getAllUsers } from './actions/authactions';
import Users from './Pages/Users/Users';
import UserProfile from './Pages/UserProfile/UserProfile';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllQuestions());
    dispatch(getAllUsers);
  },[dispatch])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/questions' element={<Questions/>}/>
          <Route path='/askquestion' element={<AskQuestion/>}/>
          <Route path='/questions/:id' element={<DisplayQuestion/>}/>
          <Route path='/tags' element={<Tags/>} exact/>
          <Route path='/users' element={<Users/>} exact/>
          <Route path='/users/:id' element={<UserProfile/>} exact />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
